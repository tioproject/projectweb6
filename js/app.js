// Respaldo embebido para carga local (file://) o sin servidor
const EMBEDDED_FALLBACK = {
  retos: [
  {
    "tag": "FÍSICA • CINEMÁTICA",
    "question": "Un móvil viaja de Lima a Chosica a $40\\text{ km/h}$ y regresa por la misma ruta a $60\\text{ km/h}$. ¿Cuál fue su rapidez media en todo el viaje?",
    "options": [
      {
        "id": "A",
        "text": "$50\\text{ km/h}$ (el promedio simple)"
      },
      {
        "id": "B",
        "text": "$48\\text{ km/h}$ (media armónica)"
      },
      {
        "id": "C",
        "text": "$0\\text{ km/h}$ (porque volvió al inicio)"
      }
    ],
    "correct": "B",
    "explanation": "La rapidez media es $\\frac{\\text{distancia total}}{\\text{tiempo total}} = \\frac{2d}{\\frac{d}{40} + \\frac{d}{60}} = \\frac{2(40)(60)}{40+60} = 48\\text{ km/h}$. La opción C corresponde a la velocidad media vectorial, no a la rapidez media."
  },
  {
    "tag": "ÁLGEBRA • ECUACIONES",
    "question": "¿Cuántas soluciones reales tiene la ecuación $\\sqrt{x - 2} = -3$?",
    "options": [
      {
        "id": "A",
        "text": "Una solución: $x = 11$"
      },
      {
        "id": "B",
        "text": "Ninguna solución ($\\text{CS} = \\emptyset$)"
      },
      {
        "id": "C",
        "text": "Dos soluciones: $x = 11$ y $x = -7$"
      }
    ],
    "correct": "B",
    "explanation": "Si elevas al cuadrado sin analizar el universo, obtienes $x - 2 = 9 \\Rightarrow x = 11$. Pero la raíz cuadrada principal $\\sqrt{\\cdot}$ en los reales siempre devuelve un valor $\\ge 0$, jamás $-3$. Por tanto, no tiene solución."
  },
  {
    "tag": "FÍSICA • HIDROSTÁTICA",
    "question": "Un cubo de hielo flota en un vaso lleno de agua hasta el borde. Cuando el hielo se derrite por completo (a temperatura constante), ¿qué ocurre con el nivel del agua?",
    "options": [
      {
        "id": "A",
        "text": "El agua se rebalsa del vaso"
      },
      {
        "id": "B",
        "text": "El nivel del agua baja ligeramente"
      },
      {
        "id": "C",
        "text": "El nivel del agua se mantiene exactamente igual"
      }
    ],
    "correct": "C",
    "explanation": "Por el Principio de Arquímedes, el peso del hielo es igual al peso del agua desalojada por su parte sumergida. Al derretirse, el agua líquida formada ocupa exactamente el mismo volumen que estaba sumergido."
  },
  {
    "tag": "ÁLGEBRA • VALOR ABSOLUTO",
    "question": "Si $x < 0$, ¿a qué equivale la expresión $\\sqrt{x^2} + x$?",
    "options": [
      {
        "id": "A",
        "text": "$2x$"
      },
      {
        "id": "B",
        "text": "$0$"
      },
      {
        "id": "C",
        "text": "$-2x$"
      }
    ],
    "correct": "B",
    "explanation": "Por definición, $\\sqrt{x^2} = |x|$. Como $x < 0$, entonces $|x| = -x$. Al reemplazar: $-x + x = 0$. El error clásico es simplificar raíz con exponente sin valor absoluto."
  },
  {
    "tag": "FÍSICA • DINÁMICA",
    "question": "Un bloque de $5\\text{ kg}$ reposa sobre una mesa horizontal ($\\mu_s = 0.4$; $g = 10\\text{ m/s}^2$). Si le aplicas una fuerza horizontal de $12\\text{ N}$, ¿cuánto vale la fuerza de rozamiento?",
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ N}$"
      },
      {
        "id": "B",
        "text": "$12\\text{ N}$"
      },
      {
        "id": "C",
        "text": "$8\\text{ N}$"
      }
    ],
    "correct": "B",
    "explanation": "El rozamiento estático máximo es $f_{s,\\text{máx}} = \\mu_s N = 0.4(50) = 20\\text{ N}$. Como $12\\text{ N} < 20\\text{ N}$, el bloque no se mueve y el rozamiento estático iguala exactamente a la fuerza aplicada: $12\\text{ N}$."
  },
  {
    "tag": "TRIGONOMETRÍA • IDENTIDADES",
    "question": "¿Cuál es el valor mínimo de la expresión $E = 3\\sin x + 4\\cos x$ para $x \\in \\mathbb{R}$?",
    "options": [
      {
        "id": "A",
        "text": "$-7$"
      },
      {
        "id": "B",
        "text": "$-5$"
      },
      {
        "id": "C",
        "text": "$-1$"
      }
    ],
    "correct": "B",
    "explanation": "El seno y el coseno del mismo ángulo no alcanzan $-1$ simultáneamente. Para $a\\sin x + b\\cos x$, el rango es $[-\\sqrt{a^2+b^2}; \\sqrt{a^2+b^2}] = [-5; 5]$, así que el mínimo es $-5$."
  },
  {
    "tag": "ARITMÉTICA • PORCENTAJES",
    "question": "El precio de un libro sube $20\\%$ y luego sobre el nuevo precio le hacen un descuento del $20\\%$. Respecto al precio inicial, el precio final:",
    "options": [
      {
        "id": "A",
        "text": "Queda igual"
      },
      {
        "id": "B",
        "text": "Disminuye en $4\\%$"
      },
      {
        "id": "C",
        "text": "Aumenta en $4\\%$"
      }
    ],
    "correct": "B",
    "explanation": "Si el precio inicial es $100$, al subir $20\\%$ pasa a $120$. Luego descontamos $20\\%$ de $120$ (que es $24$), quedando $120 - 24 = 96$. Bajó en $4\\%$."
  },
  {
    "tag": "GEOMETRÍA • TRIÁNGULOS",
    "question": "En un triángulo isósceles dos de sus lados miden $4\\text{ cm}$ y $9\\text{ cm}$. ¿Cuál es su perímetro?",
    "options": [
      {
        "id": "A",
        "text": "$17\\text{ cm}$ o $22\\text{ cm}$"
      },
      {
        "id": "B",
        "text": "$22\\text{ cm}$"
      },
      {
        "id": "C",
        "text": "$17\\text{ cm}$"
      }
    ],
    "correct": "B",
    "explanation": "Por existencia triangular, si los lados fueran $4, 4, 9$, no cumple $4 + 4 > 9$. El único triángulo válido tiene lados $9, 9, 4$, cuyo perímetro es $22\\text{ cm}$."
  },
  {
    "tag": "QUÍMICA • ESTEQUIOMETRÍA",
    "question": "Si haces reaccionar $4\\text{ g}$ de $\\text{H}_2$ con $16\\text{ g}$ de $\\text{O}_2$ para formar agua ($2\\text{H}_2 + \\text{O}_2 \\to 2\\text{H}_2\\text{O}$), ¿cuántos gramos de $\\text{H}_2\\text{O}$ se producen como máximo?",
    "options": [
      {
        "id": "A",
        "text": "$20\\text{ g}$"
      },
      {
        "id": "B",
        "text": "$18\\text{ g}$"
      },
      {
        "id": "C",
        "text": "$36\\text{ g}$"
      }
    ],
    "correct": "B",
    "explanation": "$4\\text{ g}$ de $\\text{H}_2$ son $2\\text{ mol}$, mientras que $16\\text{ g}$ de $\\text{O}_2$ son $0.5\\text{ mol}$. El reactivo limitante es el $\\text{O}_2$ ($0.5\\text{ mol}$), produciendo $1\\text{ mol}$ de $\\text{H}_2\\text{O} = 18\\text{ g}$ (sobran $2\\text{ g}$ de $\\text{H}_2$)."
  },
  {
    "tag": "FÍSICA • ELECTROSTÁTICA",
    "question": "Dos cargas puntuales se repelen con una fuerza $F$. Si duplicas ambas cargas y también duplicas la distancia entre ellas, la nueva fuerza será:",
    "options": [
      {
        "id": "A",
        "text": "$4F$"
      },
      {
        "id": "B",
        "text": "$F$"
      },
      {
        "id": "C",
        "text": "$F/2$"
      }
    ],
    "correct": "B",
    "explanation": "Por la Ley de Coulomb, $F' = k\\frac{(2q_1)(2q_2)}{(2d)^2} = \\frac{4}{4} k\\frac{q_1 q_2}{d^2} = F$. El factor $4$ del numerador se cancela con $2^2 = 4$ del denominador."
  }
],
  errores: [
  {
    "id": "ERR01",
    "tag": "PROBLEMA #01 • ÁLGEBRA / DESIGUALDADES",
    "statement": "Un alumno intenta hallar el conjunto solución de: $$\\frac{x^2 - 4}{x - 2} > 0$$",
    "lines": [
      {
        "num": 1,
        "text": "Factorizamos el numerador por diferencia de cuadrados: $$\\frac{(x - 2)(x + 2)}{x - 2} > 0$$"
      },
      {
        "num": 2,
        "text": "Simplificamos el factor común $(x - 2)$ en numerador y denominador: $$x + 2 > 0$$"
      },
      {
        "num": 3,
        "text": "Despejamos $x$ y concluimos que el conjunto solución es: $$x \\in \\langle -2; +\\infty \\rangle$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Ojo crítico! Detectaste el error en la Línea 2.",
    "successBody": "Al cancelar $(x - 2)$ sin restringir el dominio, se pierde la condición $x \\neq 2$. En $x = 2$ ocurre una división entre cero ($0/0$). El conjunto solución correcto es $\\langle -2; +\\infty \\rangle - \\{2\\}$.",
    "hintBody": "Cuando cancelas un factor algebraico con variable en el denominador, ¿qué restricción debes garantizar antes de tacharlo?"
  },
  {
    "id": "ERR02",
    "tag": "PROBLEMA #02 • ÁLGEBRA / EXPONENTES Y RAÍCES",
    "statement": "Un alumno demuestra paso a paso que $1 = -1$ de la siguiente manera:",
    "lines": [
      {
        "num": 1,
        "text": "Partimos de la igualdad verdadera: $$1 = \\sqrt{1} = \\sqrt{(-1)(-1)}$$"
      },
      {
        "num": 2,
        "text": "Aplicamos la propiedad de raíz de un producto: $$\\sqrt{(-1)(-1)} = \\sqrt{-1} \\cdot \\sqrt{-1}$$"
      },
      {
        "num": 3,
        "text": "Como $\\sqrt{-1} = i$ e $i^2 = -1$, concluimos que: $$1 = i \\cdot i = -1$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Exacto! El fallo está en la Línea 2.",
    "successBody": "La identidad $\\sqrt{a \\cdot b} = \\sqrt{a}\\sqrt{b}$ solo es válida en los números reales cuando $a \\ge 0$ y $b \\ge 0$. Al aplicarla con radicandos negativos se rompe la rama principal de la raíz.",
    "hintBody": "Revisa bajo qué condiciones del conjunto de los números reales se puede separar una raíz cuadrada de un producto."
  },
  {
    "id": "ERR03",
    "tag": "PROBLEMA #03 • FÍSICA / CINEMÁTICA VERTICAL",
    "statement": "Se lanza una piedra verticalmente hacia arriba con rapidez $v_0 = 20\\text{ m/s}$ ($g = 10\\text{ m/s}^2$). Un alumno calcula el desplazamiento a los $t = 3\\text{ s}$:",
    "lines": [
      {
        "num": 1,
        "text": "Identificamos los datos vectoriales tomando el eje $+y$ hacia arriba: $v_0 = +20\\text{ m/s}$ y $a = -10\\text{ m/s}^2$."
      },
      {
        "num": 2,
        "text": "Usamos la ecuación escalar del MRUV acelerado: $$d = v_0 t + \\frac{1}{2} g t^2$$"
      },
      {
        "num": 3,
        "text": "Reemplazamos los valores numéricos: $$d = 20(3) + \\frac{1}{2}(10)(3)^2 = 105\\text{ m}$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Bien visto! La falla está en la Línea 2.",
    "successBody": "En la Línea 1 definió correctamente $+y$ hacia arriba ($a = -10\\text{ m/s}^2$), pero en la Línea 2 escribió $+\\frac{1}{2}gt^2$ con signo positivo como si la gravedad acelerara hacia arriba. Debe ser $\\Delta y = v_0 t - \\frac{1}{2}gt^2 = 15\\text{ m}$.",
    "hintBody": "Compara la convención de signos establecida en la Línea 1 con el signo usado en la fórmula de la Línea 2."
  },
  {
    "id": "ERR04",
    "tag": "PROBLEMA #04 • TRIGONOMETRÍA / ECUACIONES",
    "statement": "Un alumno resuelve la ecuación trigonométrica $\\sin(2x) = \\sin(x)$ en el intervalo $x \\in [0; \\pi]$:",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la identidad del ángulo doble en el primer miembro: $$2\\sin(x)\\cos(x) = \\sin(x)$$"
      },
      {
        "num": 2,
        "text": "Dividimos ambos miembros entre $\\sin(x)$ para simplificar: $$2\\cos(x) = 1 \\Rightarrow \\cos(x) = \\frac{1}{2}$$"
      },
      {
        "num": 3,
        "text": "Concluimos que la única solución en $[0; \\pi]$ es: $$x = \\frac{\\pi}{3}$$"
      }
    ],
    "errorLine": 2,
    "successTitle": "✓ ¡Excelente! El error está en la Línea 2.",
    "successBody": "Al dividir entre $\\sin(x)$ se eliminan las soluciones donde $\\sin(x) = 0$ (es decir, $x = 0$ y $x = \\pi$). Siempre se debe factorizar: $\\sin(x)(2\\cos x - 1) = 0$.",
    "hintBody": "¿Qué ocurre cuando divides ambos lados de una ecuación por una expresión que puede valer cero?"
  },
  {
    "id": "ERR05",
    "tag": "PROBLEMA #05 • ÁLGEBRA / LOGARITMOS",
    "statement": "Un estudiante resuelve la ecuación $\\log_2(x - 1) + \\log_2(x + 1) = 3$:",
    "lines": [
      {
        "num": 1,
        "text": "Aplicamos la propiedad de suma de logaritmos: $$\\log_2[(x - 1)(x + 1)] = 3$$"
      },
      {
        "num": 2,
        "text": "Pasamos a forma exponencial: $$(x - 1)(x + 1) = 2^3 \\Rightarrow x^2 - 1 = 8 \\Rightarrow x^2 = 9$$"
      },
      {
        "num": 3,
        "text": "Extraemos raíz cuadrada y afirmamos que el conjunto solución es: $$\\text{CS} = \\{-3; 3\\}$$"
      }
    ],
    "errorLine": 3,
    "successTitle": "✓ ¡Cazado! El error está en la Línea 3.",
    "successBody": "Antes de resolver, el Conjunto de Valores Admisibles (CVA) exige $x - 1 > 0$ y $x + 1 > 0 \\Rightarrow x > 1$. Por tanto, $x = -3$ no pertenece al dominio del logaritmo original; la única solución es $x = 3$.",
    "hintBody": "Verifica si ambas raíces obtenidas en la Línea 3 existen dentro de los logaritmos de la ecuación inicial."
  }
],
  dudas: [
  {
    "curso": "Física • Dinámica",
    "alumno": "Consulta en grupo",
    "pregunta": "Si un bloque sube por un plano inclinado rugoso con velocidad constante, ¿la fuerza neta es cero o existe fuerza resultante hacia abajo?",
    "explicacion": "Si avanza con velocidad constante (MRU/traslación uniforme), su aceleración es cero ($a = 0$), por lo que por Segunda Ley de Newton $\\sum \\vec{F} = 0$. El rozamiento cinético se opone al deslizamiento (va hacia abajo), sumándose a la componente del peso paralela al plano, y ambas son equilibradas por la fuerza que impulsa el ascenso."
  },
  {
    "curso": "Álgebra • Funciones",
    "alumno": "Duda de práctica",
    "pregunta": "¿Para hallar el rango de $f(x) = \\frac{x^2 + 1}{x^2 + 2}$ basta despejar $x$ y analizar el discriminante?",
    "explicacion": "Sí, siempre que respetes que $x \\in \\text{Dom}(f)$. Como $x^2 \\ge 0$, el denominador $x^2 + 2 \\ge 2 > 0$, así que el dominio es todo $\\mathbb{R}$. Escribiendo $f(x) = 1 - \\frac{1}{x^2 + 2}$, al variar $x^2 \\in [0, +\\infty\\rangle$ se obtiene $f(x) \\in [\\frac{1}{2}, 1\\rangle$."
  }
],
  materiales: [
  {
    "titulo": "Solucionarios CEPRE-Villarreal (UNFV)",
    "curso": "Todos los cursos",
    "nivel": "Solucionarios",
    "universidad": "UNFV • CEPREVI",
    "descripcion": "Carpeta oficial con solucionarios del Libro Ceprevi y ciclos Ceprevi 2023 A / 2023 B.",
    "url": "https://drive.google.com/drive/folders/1km7dlbYKDLAQtcy-km9bVmYAvgLQHowx"
  },
  {
    "titulo": "Repositorio UNI (CEPREUNI + Boletines Vallejo)",
    "curso": "Todos los cursos",
    "nivel": "Tipo UNI",
    "universidad": "UNI",
    "descripcion": "Acceso directo a CepreUNI 2027-I, Vallejo 2026-2, Vallejo Antaño, libros y material virtual de práctica.",
    "url": "https://drive.google.com/drive/folders/167S3641bfG6OpE5ap5q5dDmmHnlIF4DZ"
  },
  {
    "titulo": "Repositorio San Marcos (PreSM 2026-II / 2026-I + DECO)",
    "curso": "Todos los cursos",
    "nivel": "DECO (UNMSM)",
    "universidad": "UNMSM",
    "descripcion": "Solucionarios PreSM 2026-II, 2026-I, Cepre-San Marcos y banco de problemas para practicar.",
    "url": "https://drive.google.com/drive/folders/1Ty7rl_24eN2UC1SeWdQmkIRheJQ1cGr0"
  }
]
};

/**
 * TioProject — Project Physics Pre
 * Arquitectura Serverless (GitHub Pages + JSON / Google Apps Script)
 */

// ==========================================
// 1. CONFIGURACIÓN GENERAL (Edita tus enlaces aquí)
// ==========================================
const CONFIG = {
  whatsappNumber: "51912138703",
  facebookUrl: "https://www.facebook.com/projectphysicspre/?locale=es_LA",
  youtubeUrl: "https://www.youtube.com/@johanprojectpre",
  // Pega aquí tu enlace exacto de TikTok cuando lo tengas:
  tiktokUrl: "https://www.tiktok.com/",

  // Carpetas de Google Drive
  driveFolders: {
    cepreuni2027I: "https://drive.google.com/drive/u/0/folders/1RKJBuVx7MuGxI5gec14qZ5EKNclPPibm",
    preSanMarcos2026II: "https://drive.google.com/drive/u/0/folders/1RQvCYoIfRmMTdJCiHnFtxDP8oRVAhM3l",
    cepreVillarreal: "https://drive.google.com/drive/folders/1km7dlbYKDLAQtcy-km9bVmYAvgLQHowx",
    escritosDeProject: "https://drive.google.com/drive/u/0/folders/1tmkMRWUrau6S8K9vbPQDmPHvncbUigza"
  },

  // Opcional: Pega aquí la URL de tu Google Apps Script publicado como Web App
  // para listar automáticamente los archivos nuevos que subas a tus carpetas de Drive:
  googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycbxd1r667FmNMLkjYe7jqGcsBahZZQHvQTpn9SLJ-MDJmU8uh-MOIvdzj-CP58K8f7RK/exec",
  editorPin: "2026" // Clave para el editor independiente de preguntas
};

// ==========================================
// 2. MICRO-RETOS INTERACTIVOS
// ==========================================
const MICRO_CHALLENGES = [
  {
    tag: "FÍSICA • CINEMÁTICA",
    question: "Un móvil viaja de Lima a Chosica a $40\\text{ km/h}$ y regresa por la misma ruta a $60\\text{ km/h}$. ¿Cuál fue su rapidez media en todo el viaje?",
    options: [
      { id: "A", text: "$50\\text{ km/h}$ (el promedio simple)" },
      { id: "B", text: "$48\\text{ km/h}$ (media armónica)" },
      { id: "C", text: "$0\\text{ km/h}$ (porque volvió al inicio)" }
    ],
    correct: "B",
    explanation: "¡Clásica trampa de admisión! La rapidez media es $\\frac{\\text{distancia total}}{\\text{tiempo total}} = \\frac{2d}{\\frac{d}{40} + \\frac{d}{60}} = \\frac{2(40)(60)}{40+60} = 48\\text{ km/h}$. La opción C corresponde a la velocidad media vectorial, no a la rapidez media."
  },
  {
    tag: "ÁLGEBRA • ECUACIONES",
    question: "¿Cuántas soluciones reales tiene la ecuación $\\sqrt{x - 2} = -3$?",
    options: [
      { id: "A", text: "Una solución: $x = 11$" },
      { id: "B", text: "Ninguna solución ($\\text{CS} = \\emptyset$)" },
      { id: "C", text: "Dos soluciones: $x = 11$ y $x = -7$" }
    ],
    correct: "B",
    explanation: "Si elevas al cuadrado sin analizar el universo, obtienes $x - 2 = 9 \\Rightarrow x = 11$. Pero la raíz cuadrada principal $\\sqrt{\\cdot}$ en los reales siempre devuelve un valor $\\ge 0$, jamás $-3$. Por tanto, no tiene solución."
  },
  {
    tag: "FÍSICA • MECÁNICA DE FLUIDOS",
    question: "Un cubo de hielo flota en un vaso lleno de agua hasta el borde. Cuando el hielo se derrite por completo (a temperatura constante), ¿qué ocurre con el nivel del agua?",
    options: [
      { id: "A", text: "El agua se rebalsa del vaso" },
      { id: "B", text: "El nivel del agua baja ligeramente" },
      { id: "C", text: "El nivel del agua se mantiene exactamente igual" }
    ],
    correct: "C",
    explanation: "Por el Principio de Arquímedes, el peso del hielo es igual al peso del agua desalojada por su parte sumergida. Al derretirse, el agua líquida formada ocupa exactamente el mismo volumen que estaba sumergido. ¡No se rebalsa!"
  }
];

// ==========================================
// 3. CURSOS INDEPENDIENTES (Temario Ordenado)
// ==========================================
function buildCourseTopics(prefix, list) {
  const nodes = {};
  list.forEach((title, idx) => {
    const id = `${prefix}${idx + 1}`;
    const numStr = String(idx + 1).padStart(2, "0");
    nodes[id] = {
      id,
      title: `${numStr}. ${title}`,
      badge: idx === 0 ? "FUNDAMENTO" : idx < 4 ? "BASE DEL CURSO" : "TEMA DE EXAMEN",
      weight: idx % 2 === 0 ? "Frecuente en UNI / UNMSM" : "Enfoque DECO y Admisión",
      prereq: idx === 0 ? "Base previa del nivel" : `${String(idx).padStart(2, "0")}. ${list[idx - 1]}`,
      desc: `Tema independiente #${idx + 1} del sílabo de ${title}. Domina la teoría esencial, deducciones clave y práctica graduada antes de avanzar al siguiente eslabón.`,
      escritosLabel: "Buscar en Los Escritos de Project",
      solucionarioLabel: "Ver Solucionarios CEPREUNI / PRE SM"
    };
  });
  return nodes;
}

function buildLinearMermaid(prefix, list) {
  const total = list.length;
  const numPhases = 4;
  const chunkSize = Math.ceil(total / numPhases);
  const phaseNames = ["Bloque I: Base", "Bloque II: Desarrollo", "Bloque III: Intermedio", "Bloque IV: Avanzado"];
  const lines = [
    "flowchart LR",
    "  classDef phase fill:#131317,stroke:#71717A,stroke-width:1.5px,color:#F4F4F6,rx:8,ry:8;"
  ];

  const phases = [];
  for (let p = 0; p < numPhases; p++) {
    const startIdx = p * chunkSize;
    if (startIdx >= total) break;
    const endIdx = Math.min(total - 1, (p + 1) * chunkSize - 1);
    const sNum = String(startIdx + 1).padStart(2, "0");
    const eNum = String(endIdx + 1).padStart(2, "0");
    const firstTopic = list[startIdx].split(":")[0].split("-")[0].trim();
    const phaseId = `${prefix}_B${p + 1}`;
    const label = `${phaseNames[p]}<br/>Temas ${sNum} al ${eNum}<br/>(${firstTopic}...)`;
    lines.push(`  ${phaseId}["${label}"]:::phase`);
    phases.push({ id: phaseId, firstTopicId: `${prefix}${startIdx + 1}` });
  }

  for (let j = 0; j < phases.length - 1; j++) {
    lines.push(`  ${phases[j].id} --> ${phases[j + 1].id}`);
  }
  return { graph: lines.join("\n"), phases };
}

const ALGEBRA_LIST = [
  "Potenciación y Radicación",
  "El Polinomio",
  "Productos Notables",
  "División de Polinomios",
  "Divisibilidad entre Polinomios",
  "Factorización de Polinomios",
  "Máximo Común Divisor - Mínimo Común Múltiplo",
  "Factorial - Análisis Combinatorio",
  "Racionalización",
  "Conjunto de los Números Complejos",
  "Teoría Elemental de las Ecuaciones",
  "Matrices y Determinantes",
  "Sistemas de Ecuaciones",
  "Desigualdades e Inecuaciones",
  "Programación Lineal",
  "Relaciones y Funciones",
  "Logaritmación",
  "Sucesiones y Series",
  "Progresiones"
];

const ARITMETICA_LIST = [
  "Razones - Proporciones",
  "Regla del Tanto por Ciento",
  "Magnitudes Proporcionales",
  "Regla de Tres",
  "Promedios o Medias",
  "Regla de Mezcla",
  "Regla de Interés",
  "Lógica Proposicional",
  "Teoría de Conjuntos",
  "Teoría de la Numeración",
  "Cuatro Operaciones en los Naturales",
  "Sucesiones - Series",
  "Teoría de la Divisibilidad",
  "Estudio de los Divisores Positivos de un Número",
  "Máximo Común Divisor - Mínimo Común Múltiplo",
  "El Conjunto de los Números Racionales",
  "Estadística",
  "Análisis Combinatorio",
  "Teoría de Probabilidades"
];

const TRIGONOMETRIA_LIST = [
  "Ángulo Trigonométrico - Sistema de Medición Angular",
  "Longitud de Arco de Circunferencia",
  "Razones Trigonométricas de Ángulos Agudos",
  "Ángulos Verticales - Horizontales",
  "Ángulos en Posición Estándar",
  "Reducción al Primer Cuadrante",
  "Circunferencia Trigonométrica",
  "Identidades Trigonométricas",
  "Identidades de los Arcos Compuestos",
  "Identidades de los Arcos Múltiples",
  "Identidades para Transformaciones Trigonométricas",
  "Funciones Trigonométricas",
  "Funciones Trigonométricas Inversas",
  "Ecuaciones Trigonométricas",
  "Resolución de Figuras Geométricas",
  "Geometría Analítica",
  "La Recta - Circunferencia - Parábola",
  "Elipse - Hipérbola"
];

const GEOMETRIA_PLANA_LIST = [
  "Representación Geométrica: Segmentos - Ángulos",
  "Triángulo",
  "Líneas Notables asociadas al Triángulo",
  "Congruencia de Triángulos",
  "Criterios para hacer trazos auxiliares en Triángulos",
  "Polígono",
  "Cuadrilátero",
  "Circunferencia",
  "Posiciones Relativas entre dos Circunferencias",
  "Posiciones Relativas entre un Polígono y una Circunferencia",
  "Puntos Notables",
  "Proporcionalidad de Segmentos",
  "Semejanza de Triángulos",
  "Relaciones Métricas en la Circunferencia",
  "Relaciones Métricas en el Triángulo Rectángulo",
  "Relaciones Métricas en Triángulos Oblicuángulos",
  "Relaciones Métricas en Cuadriláteros",
  "Áreas de Regiones Triangulares",
  "Áreas de Regiones Cuadrangulares",
  "Área del Círculo y sus Partes"
];

const GEOMETRIA_ESPACIO_LIST = [
  "Estereometría: Rectas y Planos",
  "Ángulo Diedro",
  "Ángulo Triedro",
  "Poliedros",
  "Poliedros Regulares",
  "Prisma",
  "Pirámide",
  "Cilindro Circular Recto",
  "Cono Circular Recto",
  "Esfera, Superficie Esférica y sus Partes"
];

const FISICA_LIST = [
  "Análisis Dimensional",
  "Análisis Vectorial",
  "Cinemática",
  "Estática",
  "Dinámica",
  "Trabajo Mecánico - Potencia",
  "Energía Mecánica",
  "Cantidad de Movimiento",
  "Gravitación Universal",
  "Movimiento Armónico Simple",
  "Mecánica de Fluidos",
  "Temperatura - Dilatación - Calorimetría",
  "Electrostática - Capacitancia Eléctrica",
  "Electrodinámica - Circuitos Eléctricos",
  "Magnetismo - Electromagnetismo",
  "Ondas Mecánicas - Sonido",
  "Ondas Electromagnéticas",
  "Óptica - Óptica Física",
  "Física Moderna - Relatividad"
];

const QUIMICA_LIST = [
  "Materia y Energía",
  "Estructura Atómica Actual",
  "Química Nuclear",
  "Teorías y Modelos Atómicos",
  "Números Cuánticos - Configuración Electrónica",
  "Tabla Periódica",
  "Enlaces Químicos",
  "Geometría y Fuerzas Intermoleculares",
  "Formulación y Nomenclatura Inorgánica",
  "Unidades Químicas de Masa",
  "Densidad, Presión y Temperatura",
  "Estados Sólido y Líquido",
  "Fundamentos Básicos del Comportamiento de los Gases",
  "Mezclas de Gases",
  "Reacciones Químicas",
  "Estequiometría de las Reacciones Químicas",
  "Sistemas Dispersos",
  "Cinética y Equilibrio Químico",
  "Ácidos y Bases",
  "Electroquímica",
  "Petróleo y los Hidrocarburos",
  "Compuestos Orgánicos Oxigenados",
  "Compuestos Orgánicos Nitrogenados",
  "Contaminación Ambiental"
];

const COURSES = {
  algebra: {
    name: "Álgebra",
    prefix: "ALG",
    mermaidData: buildLinearMermaid("ALG", ALGEBRA_LIST),
    nodes: buildCourseTopics("ALG", ALGEBRA_LIST)
  },
  aritmetica: {
    name: "Aritmética",
    prefix: "ARI",
    mermaidData: buildLinearMermaid("ARI", ARITMETICA_LIST),
    nodes: buildCourseTopics("ARI", ARITMETICA_LIST)
  },
  trigonometria: {
    name: "Trigonometría",
    prefix: "TRI",
    mermaidData: buildLinearMermaid("TRI", TRIGONOMETRIA_LIST),
    nodes: buildCourseTopics("TRI", TRIGONOMETRIA_LIST)
  },
  geometria_plana: {
    name: "Geometría Plana",
    prefix: "GPL",
    mermaidData: buildLinearMermaid("GPL", GEOMETRIA_PLANA_LIST),
    nodes: buildCourseTopics("GPL", GEOMETRIA_PLANA_LIST)
  },
  geometria_espacio: {
    name: "Geometría del Espacio",
    prefix: "GES",
    mermaidData: buildLinearMermaid("GES", GEOMETRIA_ESPACIO_LIST),
    nodes: buildCourseTopics("GES", GEOMETRIA_ESPACIO_LIST)
  },
  fisica: {
    name: "Física",
    prefix: "FIS",
    mermaidData: buildLinearMermaid("FIS", FISICA_LIST),
    nodes: buildCourseTopics("FIS", FISICA_LIST)
  },
  quimica: {
    name: "Química",
    prefix: "QUI",
    mermaidData: buildLinearMermaid("QUI", QUIMICA_LIST),
    nodes: buildCourseTopics("QUI", QUIMICA_LIST)
  }
};

// ==========================================
// 4. INICIALIZACIÓN DE LA APP
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) lucide.createIcons();

  setupLinks();

  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  initMicroChallenges();
  initCourseExplorer();
  initSolucionariosAndVault();
  initErrorHunt();
  initSolvedDoubts();
  renderMath();
});

function renderMath(target = document.body) {
  if (window.renderMathInElement) {
    renderMathInElement(target, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}

function setupLinks() {
  if (CONFIG.tiktokUrl && CONFIG.tiktokUrl.trim() !== "") {
    document.querySelectorAll("[data-tiktok-link]").forEach(el => el.setAttribute("href", CONFIG.tiktokUrl));
  }
  if (CONFIG.youtubeUrl) {
    document.querySelectorAll("[data-youtube-link]").forEach(el => el.setAttribute("href", CONFIG.youtubeUrl));
  }
  if (CONFIG.facebookUrl) {
    document.querySelectorAll("[data-facebook-link]").forEach(el => el.setAttribute("href", CONFIG.facebookUrl));
  }
  if (CONFIG.driveFolders.escritosDeProject) {
    document.querySelectorAll("[data-escritos-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.escritosDeProject));
  }
  if (CONFIG.driveFolders.cepreuni2027I) {
    document.querySelectorAll("[data-cepreuni-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.cepreuni2027I));
  }
  if (CONFIG.driveFolders.preSanMarcos2026II) {
    document.querySelectorAll("[data-presm-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.preSanMarcos2026II));
  }
  if (CONFIG.driveFolders.cepreVillarreal) {
    document.querySelectorAll("[data-ceprevi-link]").forEach(el => el.setAttribute("href", CONFIG.driveFolders.cepreVillarreal));
  }
}

// ==========================================
// MÓDULO: MICRO-RETOS
// ==========================================
let currentChallengeIdx = 0;
let activeChallenges = [...MICRO_CHALLENGES];
const CUSTOM_CHALLENGES_KEY = "tioproject_custom_retos_v1";

async function initMicroChallenges() {
  try {
    const saved = localStorage.getItem(CUSTOM_CHALLENGES_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeChallenges = parsed;
      }
    } else {
      const res = await fetch("data/retos.json");
      if (res.ok) {
        const jsonRetos = await res.json();
        if (Array.isArray(jsonRetos) && jsonRetos.length > 0) {
          activeChallenges = jsonRetos;
        }
      }
    }
  } catch (e) {
    console.warn("Usando retos por defecto:", e);
  }

  const prevBtn = document.getElementById("prev-challenge-btn");
  const nextBtn = document.getElementById("next-challenge-btn");

  prevBtn?.addEventListener("click", () => {
    currentChallengeIdx = (currentChallengeIdx - 1 + activeChallenges.length) % activeChallenges.length;
    renderChallenge();
  });

  nextBtn?.addEventListener("click", () => {
    currentChallengeIdx = (currentChallengeIdx + 1) % activeChallenges.length;
    renderChallenge();
  });

  initChallengeEditor();
  if (!Array.isArray(activeChallenges) || activeChallenges.length === 0) activeChallenges = EMBEDDED_FALLBACK.retos;
  renderChallenge();
}

function initChallengeEditor() {
  const modal = document.getElementById("challenge-editor-modal");
  const openBtn = document.getElementById("open-editor-btn");
  const closeBtn = document.getElementById("close-editor-btn");
  const authBox = document.getElementById("editor-auth-box");
  const formBox = document.getElementById("editor-form-box");
  const pinInput = document.getElementById("editor-pin-input");
  const loginBtn = document.getElementById("editor-login-btn");
  const authError = document.getElementById("editor-auth-error");
  const selectEl = document.getElementById("editor-question-select");
  const addBtn = document.getElementById("editor-add-question-btn");
  const saveBtn = document.getElementById("editor-save-btn");
  const exportBtn = document.getElementById("editor-export-json-btn");
  const resetBtn = document.getElementById("editor-reset-btn");

  if (!modal || !openBtn) return;

  let editingIdx = 0;

  const populateSelect = () => {
    if (!selectEl) return;
    selectEl.innerHTML = activeChallenges.map((c, i) => `<option value="${i}">Reto ${i + 1}: ${c.tag}</option>`).join("");
    selectEl.value = String(Math.min(editingIdx, activeChallenges.length - 1));
  };

  const loadFormFromIndex = (idx) => {
    editingIdx = Math.max(0, Math.min(idx, activeChallenges.length - 1));
    const item = activeChallenges[editingIdx];
    document.getElementById("edit-tag").value = item.tag || "";
    document.getElementById("edit-question").value = item.question || "";
    document.getElementById("edit-opt-a").value = item.options?.[0]?.text || "";
    document.getElementById("edit-opt-b").value = item.options?.[1]?.text || "";
    document.getElementById("edit-opt-c").value = item.options?.[2]?.text || "";
    document.getElementById("edit-correct").value = item.correct || "A";
    document.getElementById("edit-explanation").value = item.explanation || "";
  };

  openBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    authError?.classList.add("hidden");
    populateSelect();
    loadFormFromIndex(currentChallengeIdx);
  });

  closeBtn?.addEventListener("click", () => modal.classList.add("hidden"));

  loginBtn?.addEventListener("click", () => {
    if ((pinInput?.value || "").trim() === CONFIG.editorPin) {
      authBox?.classList.add("hidden");
      formBox?.classList.remove("hidden");
      authError?.classList.add("hidden");
    } else {
      authError?.classList.remove("hidden");
    }
  });

  selectEl?.addEventListener("change", (e) => {
    loadFormFromIndex(parseInt(e.target.value, 10) || 0);
  });

  addBtn?.addEventListener("click", () => {
    activeChallenges.push({
      tag: "NUEVO RETO • CIENCIAS",
      question: "Escribe aquí tu nueva pregunta con LaTeX ($...$)",
      options: [
        { id: "A", text: "Alternativa A" },
        { id: "B", text: "Alternativa B" },
        { id: "C", text: "Alternativa C" }
      ],
      correct: "A",
      explanation: "Escribe aquí la explicación paso a paso."
    });
    editingIdx = activeChallenges.length - 1;
    populateSelect();
    loadFormFromIndex(editingIdx);
  });

  saveBtn?.addEventListener("click", () => {
    activeChallenges[editingIdx] = {
      tag: document.getElementById("edit-tag").value.trim() || "RETO",
      question: document.getElementById("edit-question").value.trim(),
      options: [
        { id: "A", text: document.getElementById("edit-opt-a").value.trim() },
        { id: "B", text: document.getElementById("edit-opt-b").value.trim() },
        { id: "C", text: document.getElementById("edit-opt-c").value.trim() }
      ],
      correct: document.getElementById("edit-correct").value,
      explanation: document.getElementById("edit-explanation").value.trim()
    };
    localStorage.setItem(CUSTOM_CHALLENGES_KEY, JSON.stringify(activeChallenges));
    currentChallengeIdx = editingIdx;
    renderChallenge();
    modal.classList.add("hidden");
  });

  exportBtn?.addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(activeChallenges, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "retos.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  resetBtn?.addEventListener("click", () => {
    localStorage.removeItem(CUSTOM_CHALLENGES_KEY);
    activeChallenges = [...MICRO_CHALLENGES];
    currentChallengeIdx = 0;
    populateSelect();
    loadFormFromIndex(0);
    renderChallenge();
  });
}

function renderChallenge() {
  const container = document.getElementById("challenge-container");
  const counter = document.getElementById("challenge-counter");
  if (!container) return;

  const ch = activeChallenges[currentChallengeIdx];
  if (counter) counter.textContent = `${currentChallengeIdx + 1} / ${activeChallenges.length}`;

  container.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-4">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-xs text-silver-300">${ch.tag}</span>
      <span class="font-mono text-xs text-silver-500">Elige una alternativa</span>
    </div>
    <p class="text-base sm:text-lg font-medium text-white leading-relaxed mb-6">${ch.question}</p>
    <div class="space-y-3" id="challenge-options">
      ${ch.options.map(opt => `
        <button data-opt="${opt.id}" class="challenge-opt w-full text-left p-4 rounded-xl border border-obsidian-700 bg-obsidian-950/70 hover:border-silver-400 transition flex items-center gap-3.5">
          <span class="w-7 h-7 rounded-lg bg-obsidian-800 border border-obsidian-700 flex items-center justify-center font-mono text-xs font-bold text-silver-200 shrink-0">${opt.id}</span>
          <span class="text-sm text-silver-200">${opt.text}</span>
        </button>
      `).join("")}
    </div>
    <div id="challenge-feedback" class="hidden mt-6 p-4 rounded-xl border text-sm leading-relaxed"></div>
  `;

  renderMath(container);

  const buttons = container.querySelectorAll(".challenge-opt");
  const feedbackEl = document.getElementById("challenge-feedback");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-opt");
      const isCorrect = chosen === ch.correct;

      buttons.forEach(b => {
        b.disabled = true;
        const optId = b.getAttribute("data-opt");
        b.classList.remove("hover:border-silver-400");
        if (optId === ch.correct) {
          b.classList.add("border-emerald-500", "bg-emerald-950/30");
        } else if (optId === chosen && !isCorrect) {
          b.classList.add("border-rose-500", "bg-rose-950/30");
        } else {
          b.classList.add("opacity-50");
        }
      });

      feedbackEl.classList.remove("hidden");
      if (isCorrect) {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-emerald-300 mb-1">✓ ¡Excelente criterio! No caíste en la trampa.</p><p>${ch.explanation}</p>`;
      } else {
        feedbackEl.className = "mt-6 p-4 rounded-xl border border-rose-500/40 bg-rose-950/25 text-rose-100 text-sm leading-relaxed";
        feedbackEl.innerHTML = `<p class="font-bold text-rose-300 mb-1">✕ ¡Cuidado! Caíste en la trampa clásica.</p><p>${ch.explanation}</p>`;
      }
      renderMath(feedbackEl);
    });
  });
}

// ==========================================
// MÓDULO: CURSOS INDEPENDIENTES Y TEMARIO
// ==========================================
let currentCourse = "algebra";
let selectedNodeId = "ALG1";

function getCompletedNodes() {
  try {
    return JSON.parse(localStorage.getItem("tioproject_completed_topics_v3") || "[]");
  } catch {
    return [];
  }
}

function toggleNodeComplete(nodeId) {
  const completed = getCompletedNodes();
  const idx = completed.indexOf(nodeId);
  if (idx >= 0) {
    completed.splice(idx, 1);
  } else {
    completed.push(nodeId);
  }
  localStorage.setItem("tioproject_completed_topics_v3", JSON.stringify(completed));
  updateProgressUI();
  renderTopicList(currentCourse);
  renderNodeInspector(currentCourse, nodeId);
  renderMermaidCourse(currentCourse);
}

function updateProgressUI() {
  const completed = getCompletedNodes();
  const allNodeIds = Object.values(COURSES).flatMap(c => Object.keys(c.nodes));
  const total = allNodeIds.length;
  const count = completed.filter(id => allNodeIds.includes(id)).length;
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  const textEl = document.getElementById("roadmap-progress-text");
  const barEl = document.getElementById("roadmap-progress-bar");
  if (textEl) textEl.textContent = `${count} de ${total} temas dominados`;
  if (barEl) barEl.style.width = `${pct}%`;
}

function initCourseExplorer() {
  if (window.mermaid) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "loose",
      flowchart: { curve: "basis", padding: 12 }
    });
  }

  const tabs = document.querySelectorAll(".roadmap-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCourse = tab.getAttribute("data-course");
      const firstNode = Object.keys(COURSES[currentCourse].nodes)[0];
      selectedNodeId = firstNode;

      const labelEl = document.getElementById("current-course-label");
      if (labelEl) labelEl.textContent = `CURSO: ${COURSES[currentCourse].name.toUpperCase()} • RUTA POR BLOQUES`;

      renderTopicList(currentCourse);
      renderMermaidCourse(currentCourse);
      renderNodeInspector(currentCourse, firstNode);
    });
  });

  updateProgressUI();
  renderTopicList(currentCourse);
  renderMermaidCourse(currentCourse);
  renderNodeInspector(currentCourse, selectedNodeId);
}

function renderTopicList(courseKey) {
  const listEl = document.getElementById("course-topic-list");
  const countEl = document.getElementById("course-topic-count");
  if (!listEl) return;

  const course = COURSES[courseKey];
  const entries = Object.values(course.nodes);
  const completed = getCompletedNodes();

  if (countEl) countEl.textContent = `${entries.length} temas`;

  listEl.innerHTML = entries.map(item => {
    const isSelected = item.id === selectedNodeId;
    const isDone = completed.includes(item.id);
    return `
      <button data-topic-id="${item.id}" class="topic-item-btn text-left px-3 py-2 rounded-lg border text-xs transition flex items-center justify-between gap-2 ${
        isSelected
          ? "bg-white text-obsidian-950 border-white font-bold"
          : isDone
          ? "bg-emerald-950/30 border-emerald-700/60 text-emerald-200 hover:border-emerald-400"
          : "bg-obsidian-950/70 border-obsidian-800 text-silver-300 hover:border-silver-500 hover:text-white"
      }">
        <span class="truncate">${item.title}</span>
        ${isDone ? `<span class="shrink-0 font-mono text-[10px]">✓</span>` : ""}
      </button>
    `;
  }).join("");

  listEl.querySelectorAll(".topic-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedNodeId = btn.getAttribute("data-topic-id");
      renderTopicList(courseKey);
      renderNodeInspector(courseKey, selectedNodeId);
      renderMermaidCourse(courseKey);
    });
  });
}

async function renderMermaidCourse(courseKey) {
  const wrapper = document.getElementById("mermaid-diagram-wrapper");
  if (!wrapper || !window.mermaid) return;

  const courseData = COURSES[courseKey];
  const { graph, phases } = courseData.mermaidData;
  const selectedNum = parseInt(selectedNodeId.replace(courseData.prefix, ""), 10) || 1;
  const totalTopics = Object.keys(courseData.nodes).length;
  const chunkSize = Math.ceil(totalTopics / phases.length);
  const activePhaseIdx = Math.min(phases.length - 1, Math.floor((selectedNum - 1) / chunkSize));

  let extraStyles = "";
  phases.forEach((ph, idx) => {
    if (idx === activePhaseIdx) {
      extraStyles += `\nstyle ${ph.id} fill:#38BDF8,stroke:#7DD3FC,stroke-width:2px,color:#080A0F`;
    }
  });

  const graphDefinition = graph + extraStyles;
  const uniqueId = `mermaid-${courseKey}-${Date.now()}`;

  try {
    const { svg } = await mermaid.render(uniqueId, graphDefinition);
    wrapper.innerHTML = svg;

    phases.forEach((ph) => {
      const nodeEl = wrapper.querySelector(`[id*="flowchart-${ph.id}-"]`);
      if (nodeEl) {
        nodeEl.style.cursor = "pointer";
        nodeEl.addEventListener("click", () => {
          selectedNodeId = ph.firstTopicId;
          renderTopicList(courseKey);
          renderNodeInspector(courseKey, ph.firstTopicId);
          renderMermaidCourse(courseKey);
          const targetBtn = document.querySelector(`[data-topic-id="${ph.firstTopicId}"]`);
          targetBtn?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      }
    });
  } catch (err) {
    console.error("Error rendering Mermaid diagram:", err);
  }
}

function renderNodeInspector(courseKey, nodeId) {
  const inspector = document.getElementById("node-inspector");
  if (!inspector) return;

  const course = COURSES[courseKey];
  const node = course.nodes[nodeId];
  if (!node) return;

  const isDone = getCompletedNodes().includes(nodeId);
  const waMsg = encodeURIComponent(`Hola TioProject, quisiera orientación o material sobre "${course.name} - ${node.title}".`);

  inspector.innerHTML = `
    <div class="flex items-center justify-between gap-2 mb-3">
      <span class="px-2.5 py-1 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] text-silver-300">${course.name.toUpperCase()} • ${node.badge}</span>
      <span class="font-mono text-xs text-silver-400">${node.weight}</span>
    </div>
    <h3 class="text-xl font-bold text-white leading-snug">${node.title}</h3>
    <p class="text-xs font-mono text-silver-400 mt-2">Eslabón previo: <span class="text-silver-200">${node.prereq}</span></p>
    <p class="text-sm text-silver-300 mt-4 leading-relaxed">${node.desc}</p>

    <div class="mt-6 space-y-2.5">
      <a href="${CONFIG.driveFolders.escritosDeProject}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="book-marked" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">LOS ESCRITOS DE PROJECT</p>
            <p class="text-sm font-semibold text-white">Abrir Biblioteca General (Drive)</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>

      <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-700 hover:border-white transition group">
        <div class="flex items-center gap-3">
          <i data-lucide="message-circle" class="w-4 h-4 text-silver-300"></i>
          <div>
            <p class="text-xs font-mono text-silver-400">CONSULTA DIRECTA</p>
            <p class="text-sm font-semibold text-white">Pedir guía o clase de este tema</p>
          </div>
        </div>
        <i data-lucide="arrow-up-right" class="w-4 h-4 text-silver-400 group-hover:text-white"></i>
      </a>
    </div>

    <div class="mt-6 pt-5 border-t border-obsidian-800">
      <button id="toggle-complete-btn" class="w-full py-3 px-4 rounded-xl font-semibold text-xs font-mono uppercase tracking-wider transition flex items-center justify-center gap-2 ${
        isDone
          ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 hover:bg-emerald-500/30"
          : "bg-white text-obsidian-950 hover:bg-silver-200"
      }">
        <i data-lucide="${isDone ? "check-circle-2" : "circle"}" class="w-4 h-4"></i>
        <span>${isDone ? "Tema Dominado (Clic para desmarcar)" : "Marcar tema como dominado"}</span>
      </button>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  document.getElementById("toggle-complete-btn")?.addEventListener("click", () => toggleNodeComplete(nodeId));
}

// ==========================================
// MÓDULO: SOLUCIONARIOS EN VIVO + BÓVEDA
// ==========================================
let allMaterials = [];

async function initSolucionariosAndVault() {
  // Si el usuario configura googleAppsScriptUrl, intenta cargar archivos recientes en vivo
  if (CONFIG.googleAppsScriptUrl && CONFIG.googleAppsScriptUrl.trim() !== "") {
    try {
      const liveRes = await fetch(CONFIG.googleAppsScriptUrl);
      const liveData = await liveRes.json();
      if (liveData.cepreuni && Array.isArray(liveData.cepreuni)) {
        renderFolderFeed("cepreuni-feed", liveData.cepreuni);
      }
      if (liveData.presm && Array.isArray(liveData.presm)) {
        renderFolderFeed("presm-feed", liveData.presm);
      }
      if (liveData.escritos && Array.isArray(liveData.escritos)) {
        allMaterials = liveData.escritos;
        if (!Array.isArray(allMaterials) || allMaterials.length === 0) allMaterials = EMBEDDED_FALLBACK.materiales;
  renderVault(allMaterials);
      }
      const badge = document.getElementById("solucionarios-sync-badge");
      if (badge) {
        badge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>Conectado en vivo a Google Drive</span>`;
      }
    } catch (err) {
      console.warn("No se pudo leer Google Apps Script aún, usando catálogo local:", err);
    }
  }

  // Catálogo local de respaldo
  if (allMaterials.length === 0) {
    try {
      const res = await fetch("data/materiales.json");
      allMaterials = await res.json();
    } catch (err) {
      console.error("Error cargando data/materiales.json:", err);
    }
  }

  if (!Array.isArray(allMaterials) || allMaterials.length === 0) allMaterials = EMBEDDED_FALLBACK.materiales;
  renderVault(allMaterials);

  const searchInput = document.getElementById("vault-search");
  const courseSelect = document.getElementById("vault-course-filter");
  const levelSelect = document.getElementById("vault-level-filter");

  const applyFilters = () => {
    const q = (searchInput?.value || "").toLowerCase().trim();
    const course = courseSelect?.value || "ALL";
    const level = levelSelect?.value || "ALL";

    const filtered = allMaterials.filter(item => {
      const matchesQuery =
        item.titulo.toLowerCase().includes(q) ||
        item.descripcion.toLowerCase().includes(q) ||
        item.curso.toLowerCase().includes(q);
      const matchesCourse = course === "ALL" || item.curso === course;
      const matchesLevel = level === "ALL" || item.nivel === level;
      return matchesQuery && matchesCourse && matchesLevel;
    });

    renderVault(filtered);
  };

  searchInput?.addEventListener("input", applyFilters);
  courseSelect?.addEventListener("change", applyFilters);
  levelSelect?.addEventListener("change", applyFilters);
}

function renderFolderFeed(containerId, files) {
  const el = document.getElementById(containerId);
  if (!el || !files.length) return;
  el.innerHTML = files.slice(0, 5).map(f => `
    <a href="${f.url}" target="_blank" rel="noopener noreferrer" class="p-3 rounded-xl bg-obsidian-950 border border-obsidian-800 hover:border-silver-400 flex items-center justify-between gap-2 transition">
      <span class="truncate text-silver-200">${f.name}</span>
      <span class="shrink-0 text-[11px] text-silver-400">Abrir →</span>
    </a>
  `).join("");
}

function renderVault(items) {
  const grid = document.getElementById("vault-grid");
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12 rounded-2xl border border-obsidian-700 bg-obsidian-900">
        <p class="text-silver-300 font-medium">No se encontraron separatas con ese filtro.</p>
        <p class="text-xs text-silver-500 mt-1">Revisa también la carpeta completa de Los Escritos de Project en Drive.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => `
    <article class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 flex flex-col justify-between hover:border-silver-400 transition group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded bg-obsidian-800 border border-obsidian-700 font-mono text-[11px] font-semibold text-white">${item.curso}</span>
          <span class="font-mono text-[11px] text-silver-400">${item.nivel}</span>
        </div>
        <h4 class="text-base font-bold text-white group-hover:text-silver-200 transition">${item.titulo}</h4>
        <p class="text-xs text-silver-400 mt-2 leading-relaxed">${item.descripcion}</p>
      </div>

      <div class="mt-5 pt-4 border-t border-obsidian-800 flex items-center justify-between gap-3">
        <span class="font-mono text-[11px] text-silver-500">${item.universidad}</span>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white text-obsidian-950 font-bold text-xs hover:bg-silver-200 transition">
          <i data-lucide="folder-open" class="w-3.5 h-3.5"></i>
          <span>Abrir en Drive</span>
        </a>
      </div>
    </article>
  `).join("");

  if (window.lucide) lucide.createIcons();
}

// ==========================================
// MÓDULO: CLUB CAZA-ERRORES (Rotación por Conexión / IP)
// ==========================================
const DEFAULT_ERROR_CASES = [
  {
    tag: "PROBLEMA #01 • ÁLGEBRA / DESIGUALDADES",
    statement: "Un alumno intenta hallar el conjunto solución de: $$\\frac{x^2 - 4}{x - 2} > 0$$",
    lines: [
      { num: 1, text: "Factorizamos el numerador por diferencia de cuadrados: $$\\frac{(x - 2)(x + 2)}{x - 2} > 0$$" },
      { num: 2, text: "Simplificamos el factor común $(x - 2)$ en numerador y denominador: $$x + 2 > 0$$" },
      { num: 3, text: "Despejamos $x$ y concluimos que el conjunto solución es: $$x \\in \\langle -2; +\\infty \\rangle$$" }
    ],
    errorLine: 2,
    successTitle: "✓ ¡Ojo crítico! Detectaste el error en la Línea 2.",
    successBody: "Al cancelar $(x - 2)$ sin restringir el dominio, se pierde la condición $x \\neq 2$. En $x = 2$ ocurre una división entre cero ($0/0$). El conjunto solución correcto es $\\langle -2; +\\infty \\rangle - \\{2\\}$.",
    hintBody: "Cuando cancelas un factor algebraico con variable en el denominador, ¿qué restricción debes garantizar antes de tacharlo?"
  }
];

let activeErrorCases = [...DEFAULT_ERROR_CASES];
let currentErrorIdx = 0;

async function initErrorHunt() {
  const card = document.getElementById("error-hunt-card");
  const nextBtn = document.getElementById("next-error-hunt-btn");
  if (!card) return;

  try {
    const res = await fetch("data/errores.json");
    if (res.ok) {
      const jsonErrors = await res.json();
      if (Array.isArray(jsonErrors) && jsonErrors.length > 0) {
        activeErrorCases = jsonErrors;
      }
    }
    const seed = await getConnectionSeed();
    activeErrorCases = seededShuffle(activeErrorCases, seed ^ 0x9e3779b9);
    currentErrorIdx = 0;
  } catch (e) {
    console.warn("Usando caso por defecto de caza-errores:", e);
  }

  nextBtn?.addEventListener("click", () => {
    currentErrorIdx = (currentErrorIdx + 1) % activeErrorCases.length;
    renderErrorHuntCard();
  });

  if (!Array.isArray(activeErrorCases) || activeErrorCases.length === 0) activeErrorCases = EMBEDDED_FALLBACK.errores;
  renderErrorHuntCard();
}

function renderErrorHuntCard() {
  const card = document.getElementById("error-hunt-card");
  if (!card) return;

  const item = activeErrorCases[currentErrorIdx];
  card.innerHTML = `
    <div class="pb-3 border-b border-obsidian-800 flex items-center justify-between gap-2">
      <div>
        <span class="font-mono text-xs text-silver-400">${item.tag}</span>
        <p class="text-sm text-silver-200 mt-1">${item.statement}</p>
      </div>
      <span class="font-mono text-[11px] text-silver-500 shrink-0">${currentErrorIdx + 1}/${activeErrorCases.length}</span>
    </div>

    <div id="error-hunt-lines" class="space-y-2.5">
      ${item.lines.map(l => `
        <button data-line="${l.num}" type="button" class="error-line w-full text-left p-3 rounded-xl border border-obsidian-700 bg-obsidian-950/60 hover:border-silver-400 transition flex items-start gap-3">
          <span class="font-mono text-xs text-silver-500 mt-0.5">L${l.num}</span>
          <span class="text-sm text-silver-200">${l.text}</span>
        </button>
      `).join("")}
    </div>

    <div id="error-hunt-feedback" class="hidden rounded-xl p-4 text-sm border"></div>
  `;

  renderMath(card);

  const lines = card.querySelectorAll(".error-line");
  const feedback = document.getElementById("error-hunt-feedback");

  lines.forEach(lineBtn => {
    lineBtn.addEventListener("click", () => {
      const lineNum = parseInt(lineBtn.getAttribute("data-line"), 10);
      lines.forEach(b => {
        b.classList.remove("border-emerald-500", "bg-emerald-950/25", "border-rose-500", "bg-rose-950/25");
      });

      feedback.classList.remove("hidden");

      if (lineNum === item.errorLine) {
        lineBtn.classList.add("border-emerald-500", "bg-emerald-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-emerald-500/40 bg-emerald-950/25 text-emerald-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-emerald-300 mb-1">${item.successTitle}</p>
          <p>${item.successBody}</p>
        `;
      } else {
        lineBtn.classList.add("border-rose-500", "bg-rose-950/25");
        feedback.className = "rounded-xl p-4 text-sm border border-rose-500/40 bg-rose-950/25 text-rose-100 leading-relaxed";
        feedback.innerHTML = `
          <p class="font-bold text-rose-300 mb-1">✕ Esa línea es válida. Revisa el razonamiento.</p>
          <p>Pista: ${item.hintBody}</p>
        `;
      }
      renderMath(feedback);
    });
  });
}

// ==========================================
// MÓDULO: MURO DE DUDAS RESUELTAS
// ==========================================
async function initSolvedDoubts() {
  const container = document.getElementById("solved-doubts-list");
  if (!container) return;

  try {
    const res = await fetch("data/dudas.json");
    const doubts = await res.json();

    container.innerHTML = doubts.map(d => `
      <div class="rounded-2xl border border-obsidian-700 bg-obsidian-900 p-5 space-y-3">
        <div class="flex items-center justify-between text-xs font-mono">
          <span class="text-white font-semibold">${d.curso}</span>
          <span class="text-silver-500">${d.alumno}</span>
        </div>
        <p class="text-sm font-medium text-silver-200">"${d.pregunta}"</p>
        <div class="p-3.5 rounded-xl bg-obsidian-950 border border-obsidian-800 text-xs sm:text-sm text-silver-300 leading-relaxed">
          <span class="font-mono text-[11px] uppercase text-silver-400 block mb-1">Respuesta TioProject:</span>
          ${d.explicacion}
        </div>
      </div>
    `).join("");

    renderMath(container);
  } catch (err) {
    console.error("Error cargando dudas:", err);
  }
}
