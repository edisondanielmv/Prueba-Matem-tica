
import { Question } from '../types';

export const questions: Question[] = [
  // --- PÁGINA 67 ---
  {
    id: 6727,
    category: "Álgebra - Ecuaciones",
    label: "Ej. 27 (Pág. 67)",
    text: "Resuelva la siguiente ecuación racional para x:",
    equation: "\\frac{3x + 5}{2} = 2 + \\frac{x - 1}{3}",
    options: [
      { id: 'a', text: "x = 1" },
      { id: 'b', text: "x = -5/7" },
      { id: 'c', text: "x = 5/7" },
      { id: 'd', text: "x = -7/5" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 6731,
    category: "Álgebra - Ecuaciones",
    label: "Ej. 31 (Pág. 67)",
    text: "Encuentre el valor de y que satisface la ecuación:",
    equation: "\\frac{1}{4}(2y + 3) + \\frac{1}{2}y = \\frac{3}{2}(1 - 2y) - 5",
    options: [
      { id: 'a', text: "y = -17/16" },
      { id: 'b', text: "y = 17/16" },
      { id: 'c', text: "y = -15/16" },
      { id: 'd', text: "y = 3/4" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 72 ---
  {
    id: 7214,
    category: "Matemática Financiera",
    label: "Ej. 14 (Pág. 72)",
    text: "Un hombre invierte cierta cantidad en dos cuentas: una parte al 9% anual y el resto al 6% anual. La cantidad invertida al 9% es $3000 mayor que la cantidad invertida al 6%. El interés total ganado en un año es de $1470.",
    subText: "¿Cuánto invierte a cada tasa?",
    options: [
      { id: 'a', text: "$9000 al 9%; $6000 al 6%" },
      { id: 'b', text: "$11 000 al 9%; $8000 al 6%" },
      { id: 'c', text: "$8000 al 9%; $11 000 al 6%" },
      { id: 'd', text: "$10 000 al 9%; $9000 al 6%" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 86-87 ---
  {
    id: 8619,
    category: "Aplicaciones - Precios",
    label: "Ej. 19 (Págs. 86-87)",
    text: "Un editor fija el precio de un libro en $22 y vende 18,000 copias. Por cada aumento de $1 en el precio, vende 600 copias menos. El costo de producir cada libro es de $7.",
    subText: "¿Qué precio debe fijar para obtener una ganancia total de $420,000?",
    options: [
      { id: 'a', text: "Existe un único precio que produce exactamente esa ganancia." },
      { id: 'b', text: "Existen dos precios distintos que producen esa ganancia." },
      { id: 'c', text: "No existe precio que produzca esa ganancia." },
      { id: 'd', text: "Cualquier precio entre $20 y $40 funciona." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 8621,
    category: "Matemática Financiera",
    label: "Ej. 21 (Págs. 86-87)",
    text: "Un inversionista coloca $30,000 en dos cuentas: parte al 5% anual y el resto al 8% anual (compuesto). Después del primer año retira $1000 de la cuenta al 5% y los transfiere a la del 8%. Al final del segundo año desea tener al menos $32,000 en total.",
    subText: "¿Cuánto debía tener originalmente en la cuenta al 8%?",
    options: [
      { id: 'a', text: "Solo si se invierte todo al 8%." },
      { id: 'b', text: "Solo si se invierte todo al 5%." },
      { id: 'c', text: "Cualquier distribución funciona." },
      { id: 'd', text: "Es imposible alcanzar $32,000 con estas tasas." }
    ],
    correctAnswer: 'd'
  },
  {
    id: 8623,
    category: "Funciones - Demanda",
    label: "Ej. 23 (Págs. 86-87)",
    text: "Sea la función de demanda p = 560 - 4x. ¿Para qué cantidades (x) se obtiene un ingreso de $19,200?",
    equation: "R(x) = p \\cdot x = 19200",
    options: [
      { id: 'a', text: "x = 60 ó x = 80" },
      { id: 'b', text: "x ≈ 43.54" },
      { id: 'c', text: "x ≈ 36.91" },
      { id: 'd', text: "Ninguna cantidad" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 104 ---
  {
    id: 10421,
    category: "Desigualdades",
    label: "Ej. 21 (Pág. 104)",
    text: "Una persona invierte dinero al 4% y al 7%. Quiere ganar al menos $1200 en intereses. La cantidad al 7% es al menos $1500 menor que la del 4%. ¿Cuál sistema de desigualdades modela correctamente el problema? (x = cantidad al 4%, y = cantidad al 7%)",
    equation: "\\begin{cases} 0.04x + 0.07y \\ge 1200 \\\\ x - y \\ge 1500 \\\\ x,y \\ge 0 \\end{cases}",
    options: [
      { id: 'a', text: "Sistema A (mostrado arriba)" },
      { id: 'b', text: "El sistema con x - y ≤ 1500" },
      { id: 'c', text: "El sistema con y - x ≥ 1500" },
      { id: 'd', text: "El sistema con ≤ 1200" }
    ],
    correctAnswer: 'c' 
  },
  {
    id: 10425,
    category: "Desigualdades",
    label: "Ej. 25 (Pág. 104)",
    text: "Un hombre tiene $8000. Parte al 7% y el resto al 10%. ¿Cuál es el MÁXIMO que puede invertir al 7% si desea un ingreso anual de al menos $650?",
    options: [
      { id: 'a', text: "$3000" },
      { id: 'b', text: "$4000" },
      { id: 'c', text: "$5000" },
      { id: 'd', text: "$6500" }
    ],
    correctAnswer: 'c'
  },

  // --- PÁGINA 110 ---
  {
    id: 11015,
    category: "Funciones Lineales",
    label: "Ej. 15 (Pág. 110)",
    text: "Una empresa vende 350 unidades si el precio es $32, y 420 unidades si es $29. Asumiendo linealidad, determine la función de demanda p(q) y el precio para ingreso máximo.",
    options: [
      { id: 'a', text: "p(q) = -3/70 q + 47; Precio óptimo ≈ $23.50" },
      { id: 'b', text: "p(q) = -1/20 q + 40; Precio óptimo ≈ $30" },
      { id: 'c', text: "p(q) = -3/70 q + 32; Precio óptimo ≈ $29" },
      { id: 'd', text: "p(q) = -1/10 q + 47; Precio óptimo ≈ $25" }
    ],
    correctAnswer: 'a'
  },
  {
    id: 11025,
    category: "Funciones - Optimización",
    label: "Ej. 25 (Pág. 110)",
    text: "Un edificio tiene 50 departamentos a $200. Por cada aumento de $10, se desocupa uno. ¿Cuál es el ingreso máximo posible?",
    options: [
      { id: 'a', text: "$10 000" },
      { id: 'b', text: "$11 250" },
      { id: 'c', text: "$12 000" },
      { id: 'd', text: "$12 250" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 11028,
    category: "Modelado Exponencial",
    label: "Ej. 28 (Pág. 110)",
    text: "Una población sigue el modelo exponencial mostrado abajo. ¿Cuál será la población dentro de 12 años (t=12)?",
    equation: "P(t) = 15000 e^{0.025t}",
    options: [
      { id: 'a', text: "Aprox. 20,248 habitantes" },
      { id: 'b', text: "Aprox. 18,000 habitantes" },
      { id: 'c', text: "Exactamente 20,000 habitantes" },
      { id: 'd', text: "Nunca alcanza los 20,000" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 129-130 ---
  {
    id: 12915,
    category: "Geometría Analítica",
    label: "Ej. 15 (Pág. 129)",
    text: "La suma de los cuadrados de las distancias desde P(x,y) a A(1,0) y B(0,-1) es igual a 4. ¿Cuál es la ecuación simplificada que satisface P?",
    equation: "(x-1)^2 + y^2 + x^2 + (y+1)^2 = 4",
    options: [
      { id: 'a', text: "x² + y² = 4" },
      { id: 'b', text: "x² - x + y² + y - 1 = 0" },
      { id: 'c', text: "(x-1)² + (y+1)² = 4" },
      { id: 'd', text: "x² + y² - x - y + 1 = 0" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 12920,
    category: "Geometría Analítica",
    label: "Ej. 20 (Pág. 129)",
    text: "El punto P(x,y) está a 6 unidades de distancia del punto (3, -2). Escriba la ecuación que describe todos esos puntos P.",
    options: [
      { id: 'a', text: "(x+3)² + (y-2)² = 6" },
      { id: 'b', text: "(x-3)² + (y+2)² = 36" },
      { id: 'c', text: "(x-3)² + (y-2)² = 36" },
      { id: 'd', text: "x² + y² = 36" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 12923,
    category: "Geometría Analítica",
    label: "Ej. 23 (Pág. 129)",
    text: "Grafique la relación p = 30 - q². ¿Qué tipo de curva es esta ecuación en el plano pq?",
    options: [
      { id: 'a', text: "Recta decreciente" },
      { id: 'b', text: "Parábola que abre hacia arriba, vértice (0,30)" },
      { id: 'c', text: "Parábola que abre hacia abajo, vértice (0,30)" },
      { id: 'd', text: "Circunferencia radio 30" }
    ],
    correctAnswer: 'c'
  },

  // --- PÁGINA 139 ---
  {
    id: 13919,
    category: "Rectas",
    label: "Ej. 19 (Pág. 139)",
    text: "Encuentre la ecuación de la recta que pasa por (3, -1) y es perpendicular a la recta x - y = 0.",
    options: [
      { id: 'a', text: "y = x - 2" },
      { id: 'b', text: "y = -x + 2" },
      { id: 'c', text: "y = -x - 2" },
      { id: 'd', text: "y = x + 2" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 13929,
    category: "Rectas",
    label: "Ej. 29 (Pág. 139)",
    text: "Determine la relación entre las siguientes dos rectas:",
    equation: "2x + 3y = 5 \\quad \\text{y} \\quad 3x - y = 7",
    options: [
      { id: 'a', text: "Paralelas" },
      { id: 'b', text: "Perpendiculares" },
      { id: 'c', text: "Ninguna de las dos" },
      { id: 'd', text: "Coincidentes" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 13935,
    category: "Rectas",
    label: "Ej. 35 (Pág. 139)",
    text: "Determine la relación entre las siguientes dos rectas:",
    equation: "4x - y = 2 \\quad \\text{y} \\quad x + 4y = 8",
    options: [
      { id: 'a', text: "Paralelas" },
      { id: 'b', text: "Perpendiculares" },
      { id: 'c', text: "Coincidentes" },
      { id: 'd', text: "Ninguna" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 13939,
    category: "Rectas",
    label: "Ej. 39 (Pág. 139)",
    text: "Una recta pasa por los puntos (0,3) y (3,0). Escriba su ecuación.",
    options: [
      { id: 'a', text: "y = x + 3" },
      { id: 'b', text: "y = -x + 3" },
      { id: 'c', text: "y = -3x + 3" },
      { id: 'd', text: "y = -x - 3" }
    ],
    correctAnswer: 'b'
  },

  // --- PÁGINA 147 ---
  {
    id: 14711,
    category: "Aplicaciones Lineales",
    label: "Ej. 11 (Pág. 147)",
    text: "A un precio de $3.00 se ofrecen 9000 camisetas. A $4.50 se ofrecen 15000. Encuentre la ecuación de oferta, asumiendo una relación lineal.",
    options: [
      { id: 'a', text: "q = 3000p + 4000" },
      { id: 'b', text: "q = 4000p - 3000" },
      { id: 'c', text: "q = -4000p + 3000" },
      { id: 'd', text: "q = 5000p - 6000" }
    ],
    correctAnswer: 'b'
  },

  // --- PÁGINA 157 ---
  {
    id: 15709,
    category: "Sistemas Lineales",
    label: "Ej. 9 (Pág. 157)",
    text: "Resuelva el siguiente sistema de ecuaciones lineales:",
    equation: "\\begin{cases} x + \\frac{1}{3}y = 4 \\\\ \\frac{1}{4}x + \\frac{1}{2}y = 3 \\end{cases}",
    options: [
      { id: 'a', text: "(2, 4)" },
      { id: 'b', text: "(12/5, 24/5)" },
      { id: 'c', text: "(3, -2)" },
      { id: 'd', text: "(0, 0)" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 15721,
    category: "Sistemas Lineales",
    label: "Ej. 21 (Pág. 157)",
    text: "Resuelva el sistema de 3 variables:",
    equation: "\\begin{cases} 2x + y + 3z = 2 \\\\ 3x + 5y - z = -4 \\\\ 4x + 7y + 6z = -1 \\end{cases}",
    options: [
      { id: 'a', text: "(1, -1, 2)" },
      { id: 'b', text: "(6/11, -1, 7/11)" },
      { id: 'c', text: "(-1, 1, 1)" },
      { id: 'd', text: "(2, 0, -1)" }
    ],
    correctAnswer: 'b'
  },

  // --- PÁGINA 166-167 ---
  {
    id: 16605,
    category: "Punto de Equilibrio",
    label: "Ej. 5 (Pág. 166)",
    text: "Dadas las funciones de Costo e Ingreso, determine el punto de equilibrio (donde C = R).",
    equation: "\\text{Costo: } C(x) = 3.2x + 500 \\\\ \\text{Ingreso: } R(x) = 5.5x",
    options: [
      { id: 'a', text: "x ≈ 150" },
      { id: 'b', text: "x ≈ 217.39" },
      { id: 'c', text: "x ≈ 315.79" },
      { id: 'd', text: "No existe equilibrio" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 16615,
    category: "Equilibrio de Mercado",
    label: "Ej. 15 (Pág. 166)",
    text: "Un comerciante vende 180 unidades a $28 y 240 a $25 (siguiendo una Demanda Lineal). La oferta está dada por 5p = x + 60. Halle la ecuación de demanda lineal p(x).",
    options: [
      { id: 'a', text: "p = -1/20 x + 37" },
      { id: 'b', text: "p = -1/20 x + 30" },
      { id: 'c', text: "p = -3/70 x + 37" },
      { id: 'd', text: "p = -1/10 x + 40" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 184-185 ---
  {
    id: 18417,
    category: "Funciones - Composición",
    label: "Ej. 17 (Pág. 184)",
    text: "Si f(x) = x² + 2 y g(x) = 3x - 2, calcule la función compuesta f(g(1)).",
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2" },
      { id: 'c', text: "3" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 18425,
    category: "Funciones - Inventario",
    label: "Ej. 25 (Pág. 184)",
    text: "Una tienda tiene un inventario inicial de 700 unidades y vende 30 al día. ¿Cuántos días pasarán hasta que el inventario sea de 160 unidades?",
    equation: "700 - 30t = 160",
    options: [
      { id: 'a', text: "t = 12" },
      { id: 'b', text: "t = 15" },
      { id: 'c', text: "t = 18" },
      { id: 'd', text: "t = 20" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 18537,
    category: "Dominio de Funciones",
    label: "Ej. 37 (Pág. 185)",
    text: "Determine el dominio de la siguiente función definida a trozos:",
    equation: "f(x) = \\begin{cases} x^2 - 1 & x \\ge 0 \\\\ 2x + 3 & x < 0 \\end{cases}",
    options: [
      { id: 'a', text: "[0, ∞)" },
      { id: 'b', text: "(-∞, 0)" },
      { id: 'c', text: "(-∞, ∞)" },
      { id: 'd', text: "(0, ∞)" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 18555,
    category: "Funciones de Costo",
    label: "Ej. 55 (Pág. 185)",
    text: "Una empresa define su costo semanal como C(x) = 4000 + 8x + 0.001x². Calcule el costo de producir 1000 unidades.",
    options: [
      { id: 'a', text: "10 000" },
      { id: 'b', text: "12 000" },
      { id: 'c', text: "13 000" },
      { id: 'd', text: "14 000" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 18559,
    category: "Funciones Logarítmicas",
    label: "Ej. 59 (Pág. 185)",
    text: "El índice de contaminación viene dado por I(t) = 20 + 5ln(1 + 0.2t), donde t es el tiempo en días. Calcule el índice de contaminación a los 15 días.",
    options: [
      { id: 'a', text: "22.1" },
      { id: 'b', text: "23.5" },
      { id: 'c', text: "25.2" },
      { id: 'd', text: "26.93" }
    ],
    correctAnswer: 'd'
  },

  // --- PÁGINA 192-193 ---
  {
    id: 19215,
    category: "Optimización - Ingreso",
    label: "Ej. 15 (Pág. 192)",
    text: "Dada la función de ingreso R(x) = 10x - 0.008x². Determine el número de unidades (x) que maximiza el ingreso.",
    options: [
      { id: 'a', text: "x = 250" },
      { id: 'b', text: "x = 500" },
      { id: 'c', text: "x = 625" },
      { id: 'd', text: "x = 800" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 19217,
    category: "Optimización - Utilidad",
    label: "Ej. 17 (Pág. 192)",
    text: "Costos: C(x) = 2500 + 30x; Ingreso: R(x) = 55x - 0.009x². Encuentre aproximadamente la producción para Ingreso Máximo (Imax) y Utilidad Máxima (Umax).",
    options: [
      { id: 'a', text: "Imax en x≈3056; Umax en x≈1389" },
      { id: 'b', text: "Imax en x≈2500; Umax en x≈1200" },
      { id: 'c', text: "Imax en x≈3000; Umax en x≈1500" },
      { id: 'd', text: "Ambos en x≈2000" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 229-230 ---
  {
    id: 22911,
    category: "Financiera - Tasa Efectiva",
    label: "Ej. 11 (Pág. 229)",
    text: "Encuentre la tasa efectiva anual equivalente a una tasa nominal del 10% con capitalización mensual.",
    options: [
      { id: 'a', text: "10.0%" },
      { id: 'b', text: "10.25%" },
      { id: 'c', text: "10.47%" },
      { id: 'd', text: "11.0%" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 22923,
    category: "Financiera - Tasas",
    label: "Ej. 23 (Pág. 229)",
    text: "Se invierte 4 años al 4% anual, y luego 5 años a una tasa desconocida R% (anual). Al final de los 9 años el monto es 2.5 veces el capital inicial. Determine R.",
    options: [
      { id: 'a', text: "10.5%" },
      { id: 'b', text: "12.3%" },
      { id: 'c', text: "14.1%" }, 
      { id: 'd', text: "16.4%" }
    ],
    correctAnswer: 'd'
  },
  {
    id: 23025,
    category: "Financiera - Capitalización",
    label: "Ej. 25 (Pág. 230)",
    text: "Una suma invertida vale $30,000 al año 2 y $33,390 al año 3 con una tasa nominal R% capitalizable trimestralmente. Determine R.",
    options: [
      { id: 'a', text: "7%" },
      { id: 'b', text: "9%" },
      { id: 'c', text: "10.92%" },
      { id: 'd', text: "12%" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 23035,
    category: "Financiera - Continua",
    label: "Ej. 35 (Pág. 230)",
    text: "Calcule el valor futuro de $1200 invertidos durante 5 años a una tasa nominal de 9%, con capitalización continua.",
    equation: "VF = 1200 e^{0.09 \\cdot 5}",
    options: [
      { id: 'a', text: "$1600" },
      { id: 'b', text: "$1800" },
      { id: 'c', text: "$1885" },
      { id: 'd', text: "$2000" }
    ],
    correctAnswer: 'c'
  },

  // --- PÁGINA 236-237 ---
  {
    id: 23643,
    category: "Financiera - Tiempo",
    label: "Ej. 43 (Pág. 236)",
    text: "Una inversión se compone continuamente durante 6 años y duplica su valor. Halle la tasa nominal anual.",
    options: [
      { id: 'a', text: "9%" },
      { id: 'b', text: "10%" },
      { id: 'c', text: "11.55%" },
      { id: 'd', text: "14%" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 23617,
    category: "Funciones Exponenciales",
    label: "Ej. 17 (Pág. 236)",
    text: "Grafique y determine el comportamiento de la función exponencial:",
    equation: "y = 4^{-x}",
    options: [
      { id: 'a', text: "Creciente, asíntota y=1" },
      { id: 'b', text: "Creciente, asíntota x=0" },
      { id: 'c', text: "Decreciente, asíntota y=0" },
      { id: 'd', text: "Constante" }
    ],
    correctAnswer: 'c'
  },

  // --- PÁGINA 246-248 ---
  {
    id: 24642,
    category: "Exponenciales",
    label: "Ej. 42 (Pág. 246)",
    text: "Evalúe (o estime con calculadora):",
    equation: "e^{-0.35}",
    options: [
      { id: 'a', text: "0.55" },
      { id: 'b', text: "0.70" },
      { id: 'c', text: "1.41" },
      { id: 'd', text: "2.00" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 24609,
    category: "Exponentes",
    label: "Ej. 9 (Pág. 246)",
    text: "Verifique utilizando logaritmos o propiedades de exponentes:",
    equation: "(64)^{-2/3} = ?",
    options: [
      { id: 'a', text: "1/8" },
      { id: 'b', text: "1/16" },
      { id: 'c', text: "1/64" },
      { id: 'd', text: "16" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 24611,
    category: "Logaritmos",
    label: "Ej. 11 (Pág. 246)",
    text: "Calcule el valor de:",
    equation: "\\log_3 243",
    options: [
      { id: 'a', text: "3" },
      { id: 'b', text: "4" },
      { id: 'c', text: "5" },
      { id: 'd', text: "6" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 24619,
    category: "Logaritmos",
    label: "Ej. 19 (Pág. 246)",
    text: "Simplifique la expresión:",
    equation: "\\log_5(5^{2a-1})",
    options: [
      { id: 'a', text: "2a - 1" },
      { id: 'b', text: "2a + 1" },
      { id: 'c', text: "5^{2a-1}" },
      { id: 'd', text: "ln(5^{2a-1})" }
    ],
    correctAnswer: 'a'
  },
  {
    id: 24627,
    category: "Logaritmos",
    label: "Ej. 27 (Pág. 246)",
    text: "Sabiendo que log 2 = 0.3010 y log 5 = 0.6990, calcule log 40 sin calculadora.",
    options: [
      { id: 'a', text: "1.301" },
      { id: 'b', text: "1.477" },
      { id: 'c', text: "1.602" },
      { id: 'd', text: "1.903" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 24635,
    category: "Propiedades Logaritmos",
    label: "Ej. 35 (Pág. 246)",
    text: "Escriba como un solo logaritmo la siguiente expresión:",
    equation: "2\\log x - \\log y + 1",
    options: [
      { id: 'a', text: "log(x^2 / y)" },
      { id: 'b', text: "log(10x^2 / y)" },
      { id: 'c', text: "log(x^2 / 10y)" },
      { id: 'd', text: "log(y / x^2)" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 24645,
    category: "Ecuaciones Logarítmicas",
    label: "Ej. 45 (Pág. 246)",
    text: "Resuelva la ecuación logarítmica:",
    equation: "\\ln(5x - 4) = \\ln(x + 2) + \\ln 2",
    options: [
      { id: 'a', text: "x = 1" },
      { id: 'b', text: "x = 8/3" },
      { id: 'c', text: "x = 4" },
      { id: 'd', text: "Sin solución" }
    ],
    correctAnswer: 'b' 
  },
  {
    id: 1749, // Pag 17 en PDF, Ej 49
    category: "Ecuaciones Logarítmicas",
    label: "Ej. 49 (Pág. 17 PDF)",
    text: "Resuelva la ecuación:",
    equation: "\\log(x+1) = \\log(4x-5) - \\log(x+1)",
    options: [
      { id: 'a', text: "Tiene dos soluciones" },
      { id: 'b', text: "Tiene una solución" },
      { id: 'c', text: "No tiene solución real" },
      { id: 'd', text: "Su solución es x=2" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 1755,
    category: "Logaritmos Naturales",
    label: "Ej. 55 (Pág. 17 PDF)",
    text: "Evalúe el logaritmo natural:",
    equation: "\\ln 2.75",
    options: [
      { id: 'a', text: "0.75" },
      { id: 'b', text: "1.01" },
      { id: 'c', text: "1.15" },
      { id: 'd', text: "1.39" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 1771,
    category: "Dominio Logarítmico",
    label: "Ej. 71 (Pág. 17 PDF)",
    text: "Determine el dominio de la función:",
    equation: "f(x) = \\frac{1}{1 - \\ln x}",
    options: [
      { id: 'a', text: "(0, ∞)" },
      { id: 'b', text: "(0, e) ∪ (e, ∞)" },
      { id: 'c', text: "(e, ∞)" },
      { id: 'd', text: "(0, e)" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 1781,
    category: "Gráficas Logarítmicas",
    label: "Ej. 81 (Pág. 17 PDF)",
    text: "Indique el dominio de la siguiente función logarítmica:",
    equation: "f(x) = \\ln(x + 2)",
    options: [
      { id: 'a', text: "x > -1" },
      { id: 'b', text: "x > -2" },
      { id: 'c', text: "x > 0" },
      { id: 'd', text: "x > 2" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 1883,
    category: "Aplicaciones Costo",
    label: "Ej. 83 (Pág. 18 PDF)",
    text: "Si la función de costo es C(x) = 10 + 8log(1 + x), calcule el costo C(4).",
    options: [
      { id: 'a', text: "≈ 15.59" },
      { id: 'b', text: "≈ 18.00" },
      { id: 'c', text: "≈ 12.00" },
      { id: 'd', text: "≈ 20.00" }
    ],
    correctAnswer: 'a'
  },

  // --- PÁGINA 257-258 ---
  {
    id: 25716,
    category: "Interés Compuesto",
    label: "Ej. 16 (Pág. 257)",
    text: "Se invierten $1500 al 7% anual compuesto. ¿En cuánto tiempo el monto será $2000?",
    options: [
      { id: 'a', text: "3.0 años" },
      { id: 'b', text: "4.25 años" },
      { id: 'c', text: "5.5 años" },
      { id: 'd', text: "7.0 años" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 25717,
    category: "Interés Compuesto",
    label: "Ej. 17 (Pág. 257)",
    text: "Con la misma inversión anterior ($1500 al 7%), ¿en cuánto tiempo se duplica a $3000?",
    options: [
      { id: 'a', text: "7.5 años" },
      { id: 'b', text: "8.5 años" },
      { id: 'c', text: "10.24 años" },
      { id: 'd', text: "12.00 años" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 25718,
    category: "Regla del 72",
    label: "Ej. 18 (Pág. 257)",
    text: "Para una tasa del 6%, el tiempo exacto para duplicar es aproximadamente:",
    options: [
      { id: 'a', text: "9.2 años" },
      { id: 'b', text: "11.9 años (regla 72 da 12)" },
      { id: 'c', text: "13.5 años" },
      { id: 'd', text: "6 años" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 25728,
    category: "Depreciación",
    label: "Ej. 28 (Pág. 257)",
    text: "Una máquina se compra en $80,000 y se deprecia. A los 5 años vale $48,000. Si el modelo es V(t) = Be^{kt}, exprese V(t).",
    options: [
      { id: 'a', text: "V(t) = 80000 e^{0.1022t}" },
      { id: 'b', text: "V(t) = 80000 e^{-0.1022t}" },
      { id: 'c', text: "V(t) = 48000 e^{-0.1022t}" },
      { id: 'd', text: "V(t) = 80000 (0.6)^t" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 25834,
    category: "Tasas Equivalentes",
    label: "Ej. 34 (Pág. 258)",
    text: "Encuentre la tasa nominal compuesta continuamente equivalente a una tasa efectiva anual del 6%.",
    options: [
      { id: 'a', text: "6.00%" },
      { id: 'b', text: "5.83%" },
      { id: 'c', text: "6.18%" },
      { id: 'd', text: "5.00%" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 25835,
    category: "Tasas Equivalentes",
    label: "Ej. 35 (Pág. 258)",
    text: "Encuentre la tasa nominal compuesta continuamente equivalente a una tasa efectiva anual del 9%.",
    options: [
      { id: 'a', text: "9.00%" },
      { id: 'b', text: "8.00%" },
      { id: 'c', text: "8.62%" },
      { id: 'd', text: "7.90%" }
    ],
    correctAnswer: 'c'
  },

  // --- PÁGINA 448-449 ---
  {
    id: 44805,
    category: "Tasas de Cambio",
    label: "Ej. 5 (Pág. 448)",
    text: "Calcule el cambio Δp para la siguiente función:",
    equation: "p(t) = 2500 + \\frac{600}{1+t^2}, \\quad t=1, \\Delta t=2",
    options: [
      { id: 'a', text: "+240" },
      { id: 'b', text: "-120" },
      { id: 'c', text: "-240" },
      { id: 'd', text: "+120" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 44809,
    category: "Tasas de Cambio",
    label: "Ej. 9 (Pág. 448)",
    text: "Calcule la tasa de cambio promedio en el intervalo [1, 1.25] para f(x) = 5 - 4x.",
    options: [
      { id: 'a', text: "-2" },
      { id: 'b', text: "-4" },
      { id: 'c', text: "1" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 44815,
    category: "Incrementos",
    label: "Ej. 15 (Pág. 448)",
    text: "Dada la función G(t) = 4/t, exprese el incremento G(a + Δt) - G(a).",
    options: [
      { id: 'a', text: "4Δt / [a(a+Δt)]" },
      { id: 'b', text: "-4Δt / [a(a+Δt)]" },
      { id: 'c', text: "4 / (a+Δt) - 4/a²" },
      { id: 'd', text: "4" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 44821,
    category: "Incrementos - Ingreso",
    label: "Ej. 21 (Pág. 448)",
    text: "La demanda es x(p) = 1200 / √(p+2). Si el precio cambia de $5 a $7, calcule el incremento promedio del ingreso por cada dólar de aumento.",
    options: [
      { id: 'a', text: "≈ 150 $/dólar" },
      { id: 'b', text: "≈ 266 $/dólar" },
      { id: 'c', text: "≈ 350 $/dólar" },
      { id: 'd', text: "≈ 500 $/dólar" }
    ],
    correctAnswer: 'b'
  },

  // --- PÁGINA 459 ---
  {
    id: 45917,
    category: "Límites",
    label: "Ej. 17 (Pág. 459)",
    text: "Evalúe el siguiente límite:",
    equation: "\\lim_{x \\to 16} \\frac{16 - x}{\\sqrt{x} - 4}",
    options: [
      { id: 'a', text: "-4" },
      { id: 'b', text: "-8" },
      { id: 'c', text: "0" },
      { id: 'd', text: "8" }
    ],
    correctAnswer: 'b'
  },
  {
    id: 45923,
    category: "Límites",
    label: "Ej. 23 (Pág. 459)",
    text: "Evalúe el siguiente límite:",
    equation: "\\lim_{x \\to 3} \\frac{x - 1}{x - 3}",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "0" },
      { id: 'c', text: "+∞" },
      { id: 'd', text: "No existe límite finito" }
    ],
    correctAnswer: 'd'
  },
  {
    id: 45929,
    category: "Límites",
    label: "Ej. 29 (Pág. 459)",
    text: "Evalúe el siguiente límite con radicales:",
    equation: "\\lim_{x \\to 0} \\frac{\\sqrt{2+x} - \\sqrt{2}}{\\sqrt{9+x} - 3}",
    options: [
      { id: 'a', text: "3/2" }, 
      { id: 'b', text: "3/√2" },
      { id: 'c', text: "3√2/2" },
      { id: 'd', text: "2√2" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 45933,
    category: "Límites (Trozos)",
    label: "Ej. 33 (Pág. 459)",
    text: "Calcule el límite cuando x tiende a 3 de la función:",
    equation: "f(x) = \\begin{cases} \\frac{x^2-9}{x-3} & x \\ne 3 \\\\ 2 & x = 3 \\end{cases}",
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "3" },
      { id: 'c', text: "6" },
      { id: 'd', text: "No existe" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 45935,
    category: "Límites (Trozos)",
    label: "Ej. 35 (Pág. 459)",
    text: "Calcule el límite cuando x tiende a 2 de la función:",
    equation: "f(x) = \\begin{cases} \\frac{x^2-4}{x-2} & x \\ne 2 \\\\ 1 & x = 2 \\end{cases}",
    options: [
      { id: 'a', text: "1" },
      { id: 'b', text: "2" },
      { id: 'c', text: "4" },
      { id: 'd', text: "No existe" }
    ],
    correctAnswer: 'c'
  },
  {
    id: 45939,
    category: "Derivada (Definición)",
    label: "Ej. 39 (Pág. 459)",
    text: "Si f(x) = x² - 2x + 2, calcule el límite del cociente incremental:",
    equation: "\\lim_{h \\to 0} \\frac{f(1+h) - f(1)}{h}",
    options: [
      { id: 'a', text: "-2" },
      { id: 'b', text: "0" },
      { id: 'c', text: "1" },
      { id: 'd', text: "2" }
    ],
    correctAnswer: 'b'
  }
];
