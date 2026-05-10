// Memoria segura para evitar errores en navegadores restrictivos
let memoryFallback = {};
const safeStorage = {
    get: (key) => { try { return localStorage.getItem(key); } catch(e) { return memoryFallback[key] || null; } },
    set: (key, val) => { try { localStorage.setItem(key, val); } catch(e) { memoryFallback[key] = val; } }
};

// Variables de estado
let currentExam = [], examIdGlobal = "", qIndex = 0, answers = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    renderMainMenus();
});

function initTabs() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-view');
            document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
            document.getElementById(target).classList.remove('hidden');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function renderMainMenus() {
    const examsContainer = document.getElementById('exams-accordion');
    const summaryContainer = document.getElementById('summary-accordion');
    let scores = JSON.parse(safeStorage.get('analitica_scores') || '{}');

    courseraDB.forEach((curso, index) => {
        // Acordeón de Exámenes
        const examItem = createAccordionItem(curso.titulo, renderExamList(curso, scores), index === 0);
        examsContainer.appendChild(examItem);

        // Acordeón de Resúmenes
        const summaryItem = createAccordionItem(curso.titulo, curso.resumen_html, index === 0);
        summaryContainer.appendChild(summaryItem);
    });
}

function createAccordionItem(title, content, isActive) {
    const div = document.createElement('div');
    div.className = `accordion-item ${isActive ? 'active' : ''}`;
    div.innerHTML = `
        <div class="accordion-header">
            <span>${title}</span>
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M7 10l5 5 5-5z"/></svg>
        </div>
        <div class="accordion-content">${content}</div>
    `;
    div.querySelector('.accordion-header').onclick = () => div.classList.toggle('active');
    return div;
}

function renderExamList(curso, scores) {
    if (curso.modulos.length === 0) return '<p class="text-muted">Próximamente...</p>';
    let html = '';
    curso.modulos.forEach(mod => {
        html += `<p style="font-size:0.7rem; font-weight:800; color:var(--text-muted); margin-top:10px;">${mod.titulo.toUpperCase()}</p>`;
        mod.examenes.forEach(ex => {
            const score = scores[ex.id] || 0;
            html += `
                <div class="exam-btn" onclick="startExam('${curso.id_curso}', '${ex.id}')" 
                     style="padding:12px; background:var(--surface); border:1px solid var(--border); border-radius:8px; margin-top:5px; cursor:pointer;">
                    <div style="display:flex; justify-content:space-between;">
                        <span style="font-size:0.9rem; font-weight:600;">${ex.titulo}</span>
                        ${score >= 80 ? `<span style="color:var(--success); font-weight:700;">${score}%</span>` : ''}
                    </div>
                </div>`;
        });
    });
    return html;
}

function startExam(cursoId, examId) {
    const curso = courseraDB.find(c => c.id_curso === cursoId);
    let examObj;
    curso.modulos.forEach(m => {
        const found = m.examenes.find(e => e.id === examId);
        if(found) examObj = found;
    });

    examIdGlobal = examId;
    currentExam = [...examObj.preguntas].sort(() => Math.random() - 0.5);
    qIndex = 0;
    answers = Array(currentExam.length).fill(null);

    showView('view-quiz');
    renderQuestion();
}

function renderQuestion() {
    const q = currentExam[qIndex];
    document.getElementById('q-counter').innerText = `${qIndex + 1} de ${currentExam.length}`;
    document.getElementById('progress-fill').style.width = `${((qIndex) / currentExam.length) * 100}%`;
    document.getElementById('q-text').innerText = q.pregunta;

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.opciones.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = `option-item ${answers[qIndex] === opt ? 'selected' : ''}`;
        btn.innerText = opt.texto;
        btn.onclick = () => { answers[qIndex] = opt; renderQuestion(); };
        container.appendChild(btn);
    });
}

document.getElementById('btn-next').onclick = () => {
    if (!answers[qIndex]) return;
    if (qIndex < currentExam.length - 1) {
        qIndex++;
        renderQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    showView('view-results');
    let correctas = 0;
    const fb = document.getElementById('feedback-container');
    fb.innerHTML = '';

    currentExam.forEach((q, i) => {
        const isOk = answers[i].esCorrecta;
        if (isOk) correctas++;
        fb.innerHTML += `
            <div class="feedback-card ${isOk ? 'correct' : 'incorrect'}">
                <p><strong>${i+1}. ${q.pregunta}</strong></p>
                <p style="color:${isOk?'var(--success)':'var(--error)'}">${isOk?'✓':'✗'} ${answers[i].texto}</p>
                <div class="hint-box">${q.explicacion}</div>
            </div>`;
    });

    const score = Math.round((correctas / currentExam.length) * 100);
    document.getElementById('result-score').innerText = score + '%';
    document.getElementById('result-status').innerText = score >= 80 ? '¡APROBADO!' : 'REPROBADO';
    
    if (score >= 80) {
        let scores = JSON.parse(safeStorage.get('analitica_scores') || '{}');
        scores[examIdGlobal] = score;
        safeStorage.set('analitica_scores', JSON.stringify(scores));
    }
}

document.getElementById('btn-finish').onclick = () => {
    location.reload(); // Recarga limpia para actualizar puntajes
};

function showView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}
