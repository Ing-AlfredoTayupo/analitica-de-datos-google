const courseraDB = [
    {
        "id_curso": "c1",
        "titulo": "Curso 1: Datos en todas partes",
        "resumen_html": `
            <div class='summary-box'>
                <h3>1. El Ciclo de Vida de los Datos</h3>
                <p>Planificar, Capturar, Gestionar, Analizar, Archivar y Destruir. Es la estructura fundamental que todo analista debe conocer.</p>
                <h3>2. Pensamiento Estructurado</h3>
                <p>Es la capacidad de desglosar problemas complejos en piezas pequeñas y manejables antes de escribir código o buscar datos.</p>
            </div>`,
        "modulos": [
            {
                "titulo": "Módulo 1: Fundamentos",
                "examenes": [
                    {
                        "id": "c1_m1_ex1",
                        "titulo": "Prueba de Conocimiento",
                        "preguntas": [
                            {
                                "pregunta": "¿Qué es el pensamiento estructurado?",
                                "opciones": [
                                    { "texto": "Enfocarse en objetivos y mapear variables lógicamente", "esCorrecta": true },
                                    { "texto": "Escribir código SQL a alta velocidad", "esCorrecta": false },
                                    { "texto": "Diseñar dashboards estéticos", "esCorrecta": false }
                                ],
                                "explicacion": "El pensamiento estructurado te exige mapear el problema lógicamente para no perder el foco del negocio."
                            },
                            {
                                "pregunta": "La fase 'Analizar' es la encargada de recolectar los datos brutos.",
                                "opciones": [
                                    { "texto": "Falso", "esCorrecta": true },
                                    { "texto": "Verdadero", "esCorrecta": false }
                                ],
                                "explicacion": "La recolección ocurre en la fase de Preparación. En el Análisis ya se trabaja con los datos limpios."
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
