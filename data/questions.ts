import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 27,
    category: "Álgebra - Ecuaciones",
    label: "27 (versión modificada)",
    text: "Resuelva la ecuación:",
    equation: `
3x + 5         x - 1
------  =  2 + -----
   2             3
`,
    options: [
      { id: 'a', text: "x = 1" },
      { id: 'b', text: "x = -5/7" },
      { id: 'c', text: "x = 5/7" },
      { id: 'd', text: "x = -7/5" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 31,
    category: "Álgebra - Ecuaciones",
    label: "31 (versión modificada)",
    text: "Resuelva la ecuación:",
    equation: `
1             1         3
- (2y + 3) +  - y  =  - (1 - 2y) - 5
4             2         2
`,
    options: [
      { id: 'a', text: "y = -17/16" },
      { id: 'b', text: "y = 17/16" },
      { id: 'c', text: "y = -15/16" },
      { id: 'd', text: "y = 3/4" }
    ],
    correctAnswer: 'a'
  },
  {
    id: 14,
    category: "Matemática Financiera",
    label: "14 (versión modificada – inversiones)",
    text: "Un hombre invierte cierta cantidad en dos cuentas: una parte al 9 % anual y el resto al 6 % anual. La cantidad invertida al 9 % es 3000 dólares mayor que la cantidad invertida al 6 %. El interés total ganado en un año es de 1470 dólares. ¿Cuánto invierte a cada tasa?",
    options: [
      { id: 'a', text: "9000 $ al 9 %; 6000 $ al 6 %" },
      { id: 'b', text: "11 000 $ al 9 %; 8000 $ al 6 %" },
      { id: 'c', text: "8000 $ al 9 %; 11 000 $ al 6 %" },
      { id: 'd', text: "10 000 $ al 9 %; 9000 $ al 6 %" }
    ],
    correctAnswer: 'a'
  },
  {
    id: 19,
    category: "Aplicaciones - Decisión de Precio",
    label: "19 (versión modificada – decisión de precio)",
    text: "Un editor fija el precio de un libro en 22 dólares y vende 18 000 copias. Por cada aumento de 1 dólar en el precio, vende 600 copias menos. El costo de producir cada libro es de 7 dólares. ¿Qué precio debe fijar para obtener una ganancia total de 420 000 dólares?",
    options: [
      { id: 'a', text: "Existe un único precio que produce exactamente 420 000 $ de ganancia." },
      { id: 'b', text: "Existen dos precios distintos que producen 420 000 $ de ganancia." },
      { id: 'c', text: "No existe precio que produzca 420 000 $ de ganancia." },
      { id: 'd', text: "Cualquier precio entre 20 $ y 40 $ produce exactamente 420 000 $." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 170,
    category: "Funciones - Composición",
    label: "17 (versión modificada)",
    text: "Dadas las funciones:",
    equation: `
f(x) = x² + 2

g(x) = 3x - 2

Calcule: f(g(1))
`,
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2" },
      { id: 'c', text: "3" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 250,
    category: "Funciones - Dominio",
    label: "25 (versión modificada)",
    text: "Determine el dominio de:",
    equation: `
          1
f(x) = -------
        x - 4
`,
    options: [
      { id: 'a', text: "(-∞, ∞)" },
      { id: 'b', text: "(0, ∞)" },
      { id: 'c', text: "(-∞, 4) ∪ (4, ∞)" },
      { id: 'd', text: "(4, ∞)" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 110,
    category: "Logaritmos",
    label: "11 (versión modificada)",
    text: "Calcule:",
    equation: `
log  243
   3
`,
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "4" },
      { id: 'c', text: "5" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 171,
    category: "Cálculo - Límites",
    label: "17 (versión modificada)",
    text: "Evalúe el límite:",
    equation: `
         16 - x
lim    ----------
x→16     √x - 4
`,
    options: [
      { id: 'a', text: "-4" },
      { id: 'b', text: "-8" },
      { id: 'c', text: "0" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 9,
    category: "Sistemas de Ecuaciones",
    label: "9 (versión modificada)",
    text: "Resuelva:",
    equation: `
⎧      1
⎪ x + --- y  =  4
⎪      3
⎨
⎪ 1      1
⎪--- x + --- y  =  3
⎩ 4      2
`,
    options: [
      { id: 'a', text: "(2, 4)" },
      { id: 'b', text: "(12/5, 24/5)" },
      { id: 'c', text: "(3, -2)" },
      { id: 'd', text: "(0, 0)" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 15,
    category: "Aplicaciones - Ingreso Máximo",
    label: "15 (versión modificada – ingreso máximo)",
    text: "La función de ingreso viene dada por:",
    equation: `
R(x) = 10x - 0.008x²
`,
    subText: "Determine el número de unidades que maximiza el ingreso.",
    options: [
      { id: 'a', text: "x = 250" },
      { id: 'b', text: "x = 500" },
      { id: 'c', text: "x = 625" },
      { id: 'd', text: "x = 800" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 11,
    category: "Matemática Financiera",
    label: "11 (versión modificada)",
    text: "Encuentre la tasa efectiva anual equivalente a una tasa nominal del 10 % con capitalización mensual.",
    options: [
      { id: 'a', text: "10.0 %" },
      { id: 'b', text: "10.25 %" },
      { id: 'c', text: "10.47 %" },
      { id: 'd', text: "11.0 %" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 35,
    category: "Matemática Financiera - Continua",
    label: "35 (versión modificada – composición continua)",
    text: "Calcule el valor futuro de 1200 dólares invertidos durante 5 años a una tasa nominal de 9 %, con capitalización continua.",
    options: [
      { id: 'a', text: "1600 $" },
      { id: 'b', text: "1800 $" },
      { id: 'c', text: "1885 $" },
      { id: 'd', text: "2000 $" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 90,
    category: "Exponentes",
    label: "9 (versión modificada)",
    text: "Verifique el valor de:",
    equation: `
      -2/3
(64)        =  ?
`,
    options: [
      { id: 'a', text: "1/8" },
      { id: 'b', text: "1/16" },
      { id: 'c', text: "1/64" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 5,
    category: "Cálculo - Tasa de Cambio",
    label: "5 (versión modificada)",
    text: "Dada la función:",
    equation: `
               600
p(t) = 2500 + ------ ,   t = 1,  Δt = 2
               1 + t²
`,
    subText: "Calcule Δp = p(t + Δt) - p(t).",
    options: [
      { id: 'a', text: "+240" },
      { id: 'b', text: "-120" },
      { id: 'c', text: "-240" },
      { id: 'd', text: "+120" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 25,
    category: "Aplicaciones - Inventario",
    label: "25 (versión modificada – inventario)",
    text: "Una tienda tiene inicialmente 700 unidades del artículo X y vende 30 unidades al día. ¿Cuántos días pasarán hasta que el inventario sea de 160 unidades?",
    options: [
      { id: 'a', text: "t = 12" },
      { id: 'b', text: "t = 15" },
      { id: 'c', text: "t = 18" },
      { id: 'd', text: "t = 20" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 150,
    category: "Geometría Analítica - Lugar Geométrico",
    label: "15 (versión modificada – lugar geométrico)",
    text: "La suma de los cuadrados de las distancias desde P(x,y) a los puntos A(1,0) y B(0,-1) es igual a 4. Obtenga la ecuación que satisface P.",
    options: [
      { id: 'a', text: "x² + y² = 4" },
      { id: 'b', text: "x² - x + y² + y - 1 = 0" },
      { id: 'c', text: "(x - 1)² + (y + 1)² = 4" },
      { id: 'd', text: "x² + y² - x - y + 1 = 0" }
    ],
    correctAnswer: 'b'
  }
];