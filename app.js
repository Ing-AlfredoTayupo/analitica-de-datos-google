let memoryFallback = {};
const safeStorage = {
    get: (key) => { try { return localStorage.getItem(key); } catch(e) { return memoryFallback[key] || null; } },
    set: (key, val) => { try { localStorage.setItem(key, val); } catch(e) { memoryFallback[key] = val; } },
    remove: (key) => { try { localStorage.removeItem(key); } catch(e) { delete memoryFallback[key]; } }
};

// ESTADO INICIAL: Ahora apunta a Teoría
let activeCourseId = courseraDB[0].id_curso;
let activeTab = 'view-summary'; 
let currentExamData = [], examIdGlobal = "", qIndex = 0, answers = [];

document.addEventListener('DOMContentLoaded', () => {
    // Forzamos el tema de teoría al cargar
    document.body.classList.add('theme-theory');
    
    initSettings();
    initBottomNav();
    renderCourseNav();
    renderWorkspace();
});


/* --- CONFIGURACIÓN Y MODAL --- */
function initSettings() {
    const modal = document.getElementById('settings-modal');
    const btnOpen = document.getElementById('btn-settings');
    const btnClose = document.getElementById('btn-close-settings');
    const themeToggle = document.getElementById('theme-toggle');
    const btnReset = document.getElementById('btn-reset');

    if (safeStorage.get('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    btnOpen.onclick = () => modal.classList.remove('hidden');
    btnClose.onclick = () => modal.classList.add('hidden');
    
    themeToggle.onchange = () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            safeStorage.set('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            safeStorage.set('theme', 'light');
        }
    };

    btnReset.onclick = () => {
        if(confirm('¿Eliminar todos los registros de exámenes locales?')) {
            safeStorage.remove('analitica_scores');
            modal.classList.add('hidden');
            renderWorkspace();
        }
    };
}

/* --- NAVEGACIÓN INFERIOR Y SINCRONIZACIÓN DE TEMAS --- */
function initBottomNav() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            activeTab = btn.getAttribute('data-view');
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            btn.classList.add('active');

            // Cambio de color temático dinámico
            if (activeTab === 'view-summary') {
                document.body.classList.add('theme-theory');
            } else {
                document.body.classList.remove('theme-theory');
            }

            renderWorkspace();

            setTimeout(() => {
                const activeChip = document.querySelector('.course-chip.active');
                if (activeChip) activeChip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }, 50);
        });
    });
}

function renderCourseNav() {
    const navContainer = document.getElementById('course-nav');
    navContainer.innerHTML = '';
    
    courseraDB.forEach((curso, index) => {
        const chip = document.createElement('div');
        chip.className = `course-chip ${curso.id_curso === activeCourseId ? 'active' : ''}`;
        chip.innerText = `C${index + 1}: ` + curso.titulo.split(':')[1].trim();
        chip.onclick = () => {
            activeCourseId = curso.id_curso;
            document.querySelectorAll('.course-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            
            chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            renderWorkspace();
        };
        navContainer.appendChild(chip);
    });
}

/* --- RENDERIZADO ÁREA DE TRABAJO --- */
function renderWorkspace() {
    document.querySelectorAll('.workspace .view').forEach(v => v.classList.add('hidden'));
    document.getElementById(activeTab).classList.remove('hidden');
    
    const curso = courseraDB.find(c => c.id_curso === activeCourseId);
    
    const iconTheory = `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>`;
    const iconEval = `<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 13.5l-3.5-3.5 1.41-1.41L10.5 13.67l5.59-5.59L17.5 9.5l-7 7z"/></svg>`;
    
    if (activeTab === 'view-exams') {
        document.getElementById('exams-title').innerHTML = `${iconEval} <span>${curso.titulo}</span>`;
        renderExamsList(curso);
    } else if (activeTab === 'view-summary') {
        document.getElementById('summary-title').innerHTML = `${iconTheory} <span>${curso.titulo}</span>`;
        document.getElementById('summary-container').innerHTML = curso.resumen_html;
    }
}

/* ESTA ES LA FUNCIÓN QUE BORRASTE POR ACCIDENTE */
function renderExamsList(curso) {
    const container = document.getElementById('exams-container');
    container.innerHTML = '';
    let scores = JSON.parse(safeStorage.get('analitica_scores') || '{}');

    if (curso.modulos.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">Módulos en construcción...</p>';
        return;
    }

    curso.modulos.forEach(mod => {
        container.innerHTML += `<div class="module-title">${mod.titulo}</div>`;
        mod.examenes.forEach(ex => {
            const score = scores[ex.id];
            let statusClass = 'status-pending';
            let badgeHtml = `<span class="status-badge badge-pending">Pendiente</span>`;
            
            if (score !== undefined) {
                if (score >= 80) {
                    statusClass = 'status-pass';
                    badgeHtml = `<span class="status-badge badge-pass">${score}% Aprobado</span>`;
                } else {
                    statusClass = 'status-fail';
                    badgeHtml = `<span class="status-badge badge-fail">${score}% Reprobado</span>`;
                }
            }

            container.innerHTML += `
                <div class="exam-card ${statusClass}" onclick="startExam('${curso.id_curso}', '${ex.id}')">
                    <div class="exam-header">
                        <span class="exam-name">${ex.titulo}</span>
                        ${badgeHtml}
                    </div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">
                        ${ex.preguntas.length} Preguntas
                    </div>
                </div>`;
        });
    });
}

/* --- MOTOR DE EXAMEN --- */
function startExam(cursoId, examId) {
    const curso = courseraDB.find(c => c.id_curso === cursoId);
    let examObj;
    curso.modulos.forEach(m => {
        const found = m.examenes.find(e => e.id === examId);
        if(found) examObj = found;
    });

    examIdGlobal = examId;
    currentExamData = [...examObj.preguntas].sort(() => Math.random() - 0.5);
    qIndex = 0;
    answers = Array(currentExamData.length).fill(null);

    document.getElementById('course-nav').classList.add('hidden');
    document.getElementById('bottom-nav').classList.add('hidden');
    
    document.querySelectorAll('.workspace .view').forEach(v => v.classList.add('hidden'));
    document.getElementById('view-quiz').classList.remove('hidden');
    
    renderQuestion();
}

function renderQuestion() {
    const q = currentExamData[qIndex];
    document.getElementById('q-counter').innerText = `${qIndex + 1}/${currentExamData.length}`;
    document.getElementById('progress-fill').style.width = `${((qIndex) / currentExamData.length) * 100}%`;
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
    if (qIndex < currentExamData.length - 1) {
        qIndex++;
        renderQuestion();
    } else {
        showResults();
    }
};

/* BOTÓN ABANDONAR */
document.getElementById('btn-quit').onclick = () => {
    if(confirm('¿Seguro que deseas abandonar la prueba? Tu progreso no se guardará.')) {
        document.getElementById('view-quiz').classList.add('hidden');
        document.getElementById('course-nav').classList.remove('hidden');
        document.getElementById('bottom-nav').classList.remove('hidden');
        renderWorkspace();
    }
};

function showResults() {
    document.getElementById('view-quiz').classList.add('hidden');
    document.getElementById('view-results').classList.remove('hidden');
    
    let correctas = 0;
    const fb = document.getElementById('feedback-container');
    fb.innerHTML = '';

    currentExamData.forEach((q, i) => {
        const isOk = answers[i].esCorrecta;
        if (isOk) correctas++;
        fb.innerHTML += `
            <div class="feedback-card ${isOk ? 'correct' : 'incorrect'}">
                <p style="font-size:0.95rem; font-weight:700; margin-bottom:8px;">${i+1}. ${q.pregunta}</p>
                <p style="font-size:0.85rem; font-weight:600; color: ${isOk ? 'var(--success)' : 'var(--error)'}">
                    ${isOk ? '✓' : '✗'} Tu respuesta: ${answers[i].texto}
                </p>
                <div class="hint-box"><b>Nota Técnica:</b> ${q.explicacion}</div>
            </div>`;
    });

    const score = Math.round((correctas / currentExamData.length) * 100);
    const scoreDiv = document.getElementById('result-score');
    const statusDiv = document.getElementById('result-status');
    
    scoreDiv.innerText = score + '%';
    
    if (score >= 80) {
        scoreDiv.className = 'score-badge pass-text';
        statusDiv.className = 'pass-text';
        statusDiv.innerText = 'APROBADO';
    } else {
        scoreDiv.className = 'score-badge fail-text';
        statusDiv.className = 'fail-text';
        statusDiv.innerText = 'REPROBADO';
    }
    
    let scores = JSON.parse(safeStorage.get('analitica_scores') || '{}');
    if (!scores[examIdGlobal] || score > scores[examIdGlobal] || scores[examIdGlobal] < 80) {
        scores[examIdGlobal] = score;
        safeStorage.set('analitica_scores', JSON.stringify(scores));
    }
}

document.getElementById('btn-finish').onclick = () => {
    document.getElementById('view-results').classList.add('hidden');
    document.getElementById('course-nav').classList.remove('hidden');
    document.getElementById('bottom-nav').classList.remove('hidden');
    renderWorkspace();
};
