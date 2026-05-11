const courseraDB = [
           {
        "id_curso": "c1",
        "titulo": "Curso 1: Datos en todas partes",
        "resumen_html": `
            <div class='theory-content'>
                <h3>1. Ecosistema y Análisis</h3>
                <p><b>Ecosistema de Datos:</b> Elementos que interactúan (hardware, software, personas) para gestionar datos.<br>
                <b>Análisis de Datos:</b> Recolección, transformación y organización de datos para sacar conclusiones y tomar decisiones.</p>
                
                <h3>2. Fases del Análisis (Google) vs Ciclo de Vida</h3>
                <p><b>Las 6 fases del análisis:</b> Preguntar, Preparar, Procesar, Analizar, Compartir, Actuar.<br>
                <b>Ciclo de vida del dato:</b> Planificar, Capturar, Gestionar, Analizar, Archivar, Destruir.</p>

                <h3>3. Pensamiento Analítico</h3>
                <ul>
                    <li><b>Pensamiento estructurado:</b> Reconocer el problema y organizar la información lógicamente.</li>
                    <li><b>Los 5 porqués:</b> Técnica para encontrar la causa raíz de un problema.</li>
                    <li><b>Contexto:</b> La condición en la que algo existe o sucede.</li>
                </ul>

                <h3>4. La Caja de Herramientas</h3>
                <p><b>Hojas de cálculo:</b> Ideales para conjuntos de datos pequeños y análisis rápido.<br>
                <b>SQL:</b> Lenguaje para interactuar con bases de datos relacionales y manejar conjuntos de datos masivos.<br>
                <b>Visualización:</b> Herramientas como Tableau para representar datos gráficamente.</p>
            </div>`,
        "modulos": [
            {
                "titulo": "Módulo 1: Fundamentos de los datos",
                "examenes": [
                    {
                        "id": "c1_m1_ex1",
                        "titulo": "Evaluación: El ecosistema de datos",
                        "preguntas": [
                            {
                                "pregunta": "¿Qué es un ecosistema de datos?",
                                "opciones": [
                                    { "texto": "Los diversos elementos que interactúan entre sí para producir, gestionar, almacenar, organizar, analizar y compartir datos.", "esCorrecta": true },
                                    { "texto": "Un grupo de bases de datos basadas en la nube.", "esCorrecta": false },
                                    { "texto": "La recolección y transformación de datos para sacar conclusiones.", "esCorrecta": false }
                                ],
                                "explicacion": "El ecosistema abarca todo el entorno (hardware, software, personas y procesos), no solo la acción de analizar."
                            },
                            {
                                "pregunta": "Un analista de datos investiga cómo un aumento en el precio afecta las ventas. ¿Qué habilidad analítica está utilizando principalmente?",
                                "opciones": [
                                    { "texto": "Diseño de datos", "esCorrecta": false },
                                    { "texto": "Descubrimiento de relaciones", "esCorrecta": true },
                                    { "texto": "Tener mentalidad técnica", "esCorrecta": false }
                                ],
                                "explicacion": "Identificar cómo una variable (precio) impacta a otra (ventas) es la definición exacta de descubrir relaciones."
                            },
                            {
                                "pregunta": "¿Cuál es el primer paso en el proceso de análisis de datos de 6 fases de Google?",
                                "opciones": [
                                    { "texto": "Preparar", "esCorrecta": false },
                                    { "texto": "Preguntar", "esCorrecta": true },
                                    { "texto": "Procesar", "esCorrecta": false }
                                ],
                                "explicacion": "El ciclo siempre comienza con 'Preguntar' para definir el problema con los stakeholders."
                            },
                            {
                                "pregunta": "¿Qué término describe la gestión de personas, procesos y herramientas utilizadas en el análisis de datos?",
                                "opciones": [
                                    { "texto": "Estrategia de datos", "esCorrecta": true },
                                    { "texto": "Diseño de datos", "esCorrecta": false },
                                    { "texto": "Visualización de datos", "esCorrecta": false }
                                ],
                                "explicacion": "La estrategia de datos es la visión macro que asegura que las personas y las herramientas trabajen juntas eficientemente."
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
                        "titulo": "Evaluación: Pensamiento estructurado",
                        "preguntas": [
                            {
                                "pregunta": "¿Cuál es el proceso de reconocer el problema actual y organizar la información disponible para revelar lagunas y oportunidades?",
                                "opciones": [
                                    { "texto": "Pensamiento estructurado", "esCorrecta": true },
                                    { "texto": "Curiosidad analítica", "esCorrecta": false },
                                    { "texto": "Diseño de datos", "esCorrecta": false }
                                ],
                                "explicacion": "El Pensamiento Estructurado significa mapear la situación lógica y sistemáticamente antes de actuar."
                            },
                            {
                                "pregunta": "¿Para qué utilizan los analistas de datos la técnica de los 'Cinco porqués'?",
                                "opciones": [
                                    { "texto": "Para justificar su salario ante los gerentes.", "esCorrecta": false },
                                    { "texto": "Para encontrar la causa raíz de un problema.", "esCorrecta": true },
                                    { "texto": "Para diseñar mejores bases de datos.", "esCorrecta": false }
                                ],
                                "explicacion": "Preguntar '¿Por qué?' cinco veces seguidas ayuda a profundizar más allá de los síntomas superficiales hasta llegar a la verdadera causa (Root Cause)."
                            },
                            {
                                "pregunta": "Un analista utiliza hechos históricos para predecir si un producto tendrá éxito. ¿Qué concepto describe mejor esto?",
                                "opciones": [
                                    { "texto": "Tomar decisiones basadas en datos", "esCorrecta": true },
                                    { "texto": "Instinto y experiencia", "esCorrecta": false },
                                    { "texto": "Diseño de estrategias operativas", "esCorrecta": false }
                                ],
                                "explicacion": "Significa confiar en métricas y datos históricos por encima de la intuición o las 'corazonadas'."
                            },
                            {
                                "pregunta": "Tener mentalidad técnica implica...",
                                "opciones": [
                                    { "texto": "Saber programar en al menos 3 lenguajes.", "esCorrecta": false },
                                    { "texto": "Desglosar las cosas en pasos más pequeños y manejables.", "esCorrecta": true },
                                    { "texto": "Reparar el hardware de los servidores de datos.", "esCorrecta": false }
                                ],
                                "explicacion": "En analítica, la mentalidad técnica es la capacidad de dividir un problema grande en partes pequeñas que se pueden abordar ordenadamente."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo": "Módulo 3: Ciclo de vida de los datos",
                "examenes": [
                    {
                        "id": "c1_m3_ex1",
                        "titulo": "Evaluación: Fases y Ciclos",
                        "preguntas": [
                            {
                                "pregunta": "En el ciclo de vida de los datos, ¿cuál es la fase diseñada para proteger la información confidencial una vez que ya no se necesita?",
                                "opciones": [
                                    { "texto": "Destruir (Destroy)", "esCorrecta": true },
                                    { "texto": "Archivar (Archive)", "esCorrecta": false },
                                    { "texto": "Ocultar (Hide)", "esCorrecta": false }
                                ],
                                "explicacion": "La destrucción segura garantiza que los datos sensibles no caigan en manos equivocadas mediante trituración digital."
                            },
                            {
                                "pregunta": "En las 6 fases del análisis de datos de Google, ¿qué ocurre durante la fase 'Procesar'?",
                                "opciones": [
                                    { "texto": "Los datos se limpian y se verifican para asegurar que sean correctos y relevantes.", "esCorrecta": true },
                                    { "texto": "Se comunican los hallazgos a los interesados.", "esCorrecta": false },
                                    { "texto": "Se recopilan los datos originales.", "esCorrecta": false }
                                ],
                                "explicacion": "El Procesamiento (Process) es estrictamente la etapa de limpieza de datos (Data Cleaning) antes de analizar."
                            },
                            {
                                "pregunta": "¿Cuál es la principal diferencia entre las fases del análisis de datos y el ciclo de vida de los datos?",
                                "opciones": [
                                    { "texto": "El análisis es para bases de datos; el ciclo de vida es para hojas de cálculo.", "esCorrecta": false },
                                    { "texto": "El ciclo de vida abarca desde la creación hasta la destrucción del dato; el proceso de análisis se centra en extraer información útil de ese dato.", "esCorrecta": true },
                                    { "texto": "No hay diferencia, son dos formas de llamar a lo mismo.", "esCorrecta": false }
                                ],
                                "explicacion": "El ciclo de vida trata al dato como un objeto físico (nace, se almacena, muere). El análisis trata al dato como información para resolver un problema."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo": "Módulo 4: Caja de herramientas",
                "examenes": [
                    {
                        "id": "c1_m4_ex1",
                        "titulo": "Evaluación: SQL y Hojas de cálculo",
                        "preguntas": [
                            {
                                "pregunta": "¿Qué es una consulta (query) en el contexto de bases de datos?",
                                "opciones": [
                                    { "texto": "Una solicitud de datos o información de una base de datos.", "esCorrecta": true },
                                    { "texto": "Un error en el código fuente.", "esCorrecta": false },
                                    { "texto": "Una fórmula en una hoja de cálculo.", "esCorrecta": false }
                                ],
                                "explicacion": "Una query (consulta) es la instrucción que le damos a la base de datos mediante SQL para que nos devuelva información específica."
                            },
                            {
                                "pregunta": "¿Por qué un analista de datos elegiría usar SQL en lugar de una hoja de cálculo?",
                                "opciones": [
                                    { "texto": "Porque el conjunto de datos es demasiado grande para que una hoja de cálculo lo maneje sin fallar.", "esCorrecta": true },
                                    { "texto": "Porque SQL crea gráficos más bonitos.", "esCorrecta": false },
                                    { "texto": "Porque las hojas de cálculo no permiten sumar números.", "esCorrecta": false }
                                ],
                                "explicacion": "Las hojas de cálculo colapsan con millones de filas. SQL está diseñado específicamente para manejar volúmenes masivos de datos."
                            },
                            {
                                "pregunta": "En una hoja de cálculo, ¿qué es un atributo?",
                                "opciones": [
                                    { "texto": "Una característica o cualidad de los datos (generalmente representada como el encabezado de una columna).", "esCorrecta": true },
                                    { "texto": "El archivo completo donde se guardan los datos.", "esCorrecta": false },
                                    { "texto": "Un tipo de gráfico de barras.", "esCorrecta": false }
                                ],
                                "explicacion": "En las tablas, las columnas representan los atributos (ej. Nombre, Edad) y las filas representan las observaciones."
                            }
                        ]
                    }
                ]
            },
            {
                "titulo": "Módulo 5: Oportunidades infinitas",
                "examenes": [
                    {
                        "id": "c1_m5_ex1",
                        "titulo": "Evaluación: Equidad y Carrera",
                        "preguntas": [
                            {
                                "pregunta": "¿Qué significa la equidad (fairness) de los datos?",
                                "opciones": [
                                    { "texto": "Asegurar que el análisis no cree ni refuerce prejuicios o sesgos (bias).", "esCorrecta": true },
                                    { "texto": "Asegurar que todos los analistas cobren el mismo salario.", "esCorrecta": false },
                                    { "texto": "Compartir la base de datos de la empresa en internet de forma pública.", "esCorrecta": false }
                                ],
                                "explicacion": "La equidad garantiza que los datos y los algoritmos traten a todos los grupos de manera objetiva, sin discriminación ni sesgos ocultos."
                            },
                            {
                                "pregunta": "¿Cuál es la principal diferencia entre un Analista de Datos y un Científico de Datos?",
                                "opciones": [
                                    { "texto": "El analista responde preguntas usando datos existentes; el científico crea nuevas formas de modelar y predecir lo desconocido usando machine learning.", "esCorrecta": true },
                                    { "texto": "El analista usa computadoras; el científico solo usa matemáticas en papel.", "esCorrecta": false },
                                    { "texto": "No hay diferencia, son el mismo puesto con distintos nombres.", "esCorrecta": false }
                                ],
                                "explicacion": "El analista se enfoca en el 'qué pasó' y 'por qué'. El científico se enfoca en crear algoritmos complejos para predecir 'qué pasará'."
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
