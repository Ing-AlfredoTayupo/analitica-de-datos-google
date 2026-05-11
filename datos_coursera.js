const courseraDB = [
       {
        "id_curso": "c1",
        "titulo": "Curso 1: Datos en todas partes",
        "resumen_html": `
            <div class='theory-content'>
                <h3>1. Ecosistema de Datos vs. Análisis</h3>
                <p><b>Ecosistema:</b> Elementos que interactúan para crear, gestionar y compartir datos.<br>
                <b>Análisis de Datos:</b> La recolección, transformación y organización de datos para sacar conclusiones, hacer predicciones y fundamentar la toma de decisiones.</p>
                
                <h3>2. Habilidades Analíticas Clave</h3>
                <ul>
                    <li><b>Curiosidad:</b> Querer aprender algo.</li>
                    <li><b>Comprensión del contexto:</b> Entender la condición en la que algo existe.</li>
                    <li><b>Tener mentalidad técnica:</b> Desglosar las cosas en pasos más pequeños.</li>
                    <li><b>Diseño de datos:</b> Organizar la información.</li>
                    <li><b>Estrategia de datos:</b> Gestión de personas, procesos y herramientas.</li>
                </ul>

                <h3>3. Las 6 Fases del Análisis (Modelo de Google)</h3>
                <ol>
                    <li><b>Preguntar (Ask):</b> Definir el problema y entender expectativas.</li>
                    <li><b>Preparar (Prepare):</b> Recopilar y almacenar datos.</li>
                    <li><b>Procesar (Process):</b> Limpiar y verificar los datos.</li>
                    <li><b>Analizar (Analyze):</b> Encontrar patrones, relaciones y tendencias.</li>
                    <li><b>Compartir (Share):</b> Comunicar hallazgos visualmente.</li>
                    <li><b>Actuar (Act):</b> Poner en práctica los conocimientos.</li>
                </ol>

                <h3>4. El Ciclo de Vida de los Datos</h3>
                <p>Planificar (Plan) ➔ Capturar (Capture) ➔ Gestionar (Manage) ➔ Analizar (Analyze) ➔ Archivar (Archive) ➔ Destruir (Destroy).</p>
            </div>`,
        "modulos": [
            {
                "titulo": "Módulo 1: Fundamentos de los datos",
                "examenes": [
                    {
                        "id": "c1_m1_ex1",
                        "titulo": "Prueba de Conocimiento 1",
                        "preguntas": [
                            {
                                "pregunta": "¿Qué es un ecosistema de datos?",
                                "opciones": [
                                    { "texto": "Los diversos elementos que interactúan entre sí para producir, gestionar, almacenar, organizar, analizar y compartir datos.", "esCorrecta": true },
                                    { "texto": "Un grupo de bases de datos basadas en la nube.", "esCorrecta": false },
                                    { "texto": "La recolección y transformación de datos para sacar conclusiones.", "esCorrecta": false }
                                ],
                                "explicacion": "El ecosistema abarca todo el entorno (hardware, software, personas y procesos), no solo la acción de analizar o una base de datos específica."
                            },
                            {
                                "pregunta": "En el análisis de datos, ¿qué significa entender el contexto?",
                                "opciones": [
                                    { "texto": "Entender la condición en la que algo existe o sucede.", "esCorrecta": true },
                                    { "texto": "Agrupar la información en hojas de cálculo.", "esCorrecta": false },
                                    { "texto": "Identificar patrones mediante gráficos.", "esCorrecta": false }
                                ],
                                "explicacion": "El contexto te da la perspectiva necesaria para saber por qué los datos importan y cómo se relacionan con el problema real."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo": "Módulo 2: Pensamiento analítico",
                "examenes": [
                    {
                        "id": "c1_m2_ex1",
                        "titulo": "Prueba de Conocimiento 2",
                        "preguntas": [
                            {
                                "pregunta": "¿Cuál es el proceso de reconocer el problema actual y organizar la información disponible para revelar lagunas y oportunidades?",
                                "opciones": [
                                    { "texto": "Pensamiento estructurado", "esCorrecta": true },
                                    { "texto": "Curiosidad analítica", "esCorrecta": false },
                                    { "texto": "Diseño de datos", "esCorrecta": false }
                                ],
                                "explicacion": "Esta es la definición exacta de Google para el Pensamiento Estructurado: mapear la situación lógica y sistemáticamente."
                            },
                            {
                                "pregunta": "Un analista de datos utiliza hechos históricos para predecir si un producto tendrá éxito o no. ¿Qué concepto clave describe mejor esto?",
                                "opciones": [
                                    { "texto": "Tomar decisiones basadas en datos", "esCorrecta": true },
                                    { "texto": "Instinto y experiencia", "esCorrecta": false },
                                    { "texto": "Diseño de estrategias operativas", "esCorrecta": false }
                                ],
                                "explicacion": "Confiar en métricas y datos históricos por encima de la intuición para guiar la estrategia empresarial."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo": "Módulo 3: Procesos y Ciclo de Vida",
                "examenes": [
                    {
                        "id": "c1_m3_ex1",
                        "titulo": "Prueba de Conocimiento 3",
                        "preguntas": [
                            {
                                "pregunta": "En las 6 fases del análisis de datos, ¿qué ocurre durante la fase 'Procesar'?",
                                "opciones": [
                                    { "texto": "Los datos se limpian y se verifican para asegurar que sean correctos y relevantes.", "esCorrecta": true },
                                    { "texto": "Se comunican los hallazgos a los interesados.", "esCorrecta": false },
                                    { "texto": "Se recopilan los datos de las fuentes originales.", "esCorrecta": false }
                                ],
                                "explicacion": "El Procesamiento (Process) es estrictamente la etapa de limpieza de datos (Data Cleaning) antes de aplicar fórmulas complejas."
                            },
                            {
                                "pregunta": "En el ciclo de vida de los datos, ¿cuál es la fase final, diseñada para proteger la información confidencial de la empresa una vez que ya no se necesita?",
                                "opciones": [
                                    { "texto": "Destruir (Destroy)", "esCorrecta": true },
                                    { "texto": "Archivar (Archive)", "esCorrecta": false },
                                    { "texto": "Borrar en caché", "esCorrecta": false }
                                ],
                                "explicacion": "La destrucción segura garantiza que los datos sensibles (como información de tarjetas de crédito o datos personales) no caigan en manos equivocadas mediante trituración digital o física."
                            }
                        ]
                    }
                ]
            }
        ]
    },
 
    
    
    
    
    { "id_curso": "c2", "titulo": "Curso 2: Formular preguntas", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c3", "titulo": "Curso 3: Preparación de datos", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c4", "titulo": "Curso 4: De sucios a limpios", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c5", "titulo": "Curso 5: Analizar para responder", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c6", "titulo": "Curso 6: Visualización de datos", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c7", "titulo": "Curso 7: Programación en R", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] },
    { "id_curso": "c8", "titulo": "Curso 8: Proyecto Final", "resumen_html": "<p>Contenido en construcción...</p>", "modulos": [] }
];
