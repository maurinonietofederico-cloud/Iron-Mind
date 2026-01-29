/* ==========================================================
   1. BASE DE DATOS DE EJERCICIOS (60 EJERCICIOS CON GIFS)
   ========================================================== */
const ejerciciosDB = {
    pecho: [
        { id: 1, nombre: "Press de Banca", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif", seguridad: "⚠️ ESCÁPULAS: Mantén retracción máxima.", tecnica: "Baja al esternón y empuja explosivo.", musculo: "Pectoral Mayor" },
        { id: 2, nombre: "Press Inclinado", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Barbell-Bench-Press.gif", seguridad: "⚠️ ÁNGULO: Banco a 30°. Evita dolor hombro.", tecnica: "Enfoque en la zona clavicular.", musculo: "Pectoral Superior" },
        { id: 3, nombre: "Aperturas Manc.", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif", seguridad: "⚠️ ESTIRAMIENTO: No bajes más allá del torso.", tecnica: "Movimiento semicircular controlado.", musculo: "Pectoral Externo" },
        { id: 4, nombre: "Cruces Polea", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Crossover.gif", seguridad: "⚠️ CODOS: Siempre semiflexionados.", tecnica: "Contracción máxima en el centro.", musculo: "Pectoral Medio" },
        { id: 5, nombre: "Fondos Pecho", img: "https://fitnessprogramer.com/wp-content/uploads/2021/05/Chest-Dip.gif", seguridad: "⚠️ INCLINACIÓN: Torso adelante.", tecnica: "Baja profundo para activar el pecho.", musculo: "Pectoral Inferior" },
        { id: 6, nombre: "Press Mancuernas", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif", seguridad: "⚠️ CONTROL: No choques las pesas arriba.", tecnica: "Mayor rango de movimiento que la barra.", musculo: "Pectoral Mayor" },
        { id: 7, nombre: "Flexiones Diamante", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif", seguridad: "⚠️ MUÑECAS: Abre manos si hay molestia.", tecnica: "Manos juntas formando un diamante.", musculo: "Tríceps y Pecho" },
        { id: 8, nombre: "Pullover", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Pullover.gif", seguridad: "⚠️ LUMBAR: No arquees la espalda baja.", tecnica: "Siente el estiramiento del serrato.", musculo: "Serrato y Pecho" },
        { id: 9, nombre: "Peck Deck", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pec-Deck-Fly.gif", seguridad: "⚠️ AJUSTE: Codos alineados al hombro.", tecnica: "Aprieta 1 segundo al cerrar.", musculo: "Pectoral" },
        { id: 10, nombre: "Press Declinado", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Decline-Barbell-Bench-Press.gif", seguridad: "⚠️ PRESIÓN: No te quedes mucho tiempo abajo.", tecnica: "Enfoque en el pectoral inferior.", musculo: "Pectoral Inferior" }
    ],
    espalda: [
        { id: 11, nombre: "Dominadas", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif", seguridad: "⚠️ SIN BALANCEO: Tira desde los codos.", tecnica: "Pecho a la barra, baja lento.", musculo: "Dorsal Ancho" },
        { id: 12, nombre: "Remo con Barra", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif", seguridad: "⚠️ LUMBAR: Espalda plana como una mesa.", tecnica: "Lleva la barra hacia el ombligo.", musculo: "Dorsal Medio" },
        { id: 13, nombre: "Jalón al Pecho", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif", seguridad: "⚠️ POSTURA: No tires tras la nuca.", tecnica: "Tira hacia la parte alta del pecho.", musculo: "Dorsales" },
        { id: 14, nombre: "Peso Muerto", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif", seguridad: "⚠️ CRÍTICO: Espalda neutra o lesión.", tecnica: "Barra pegada a espinillas. Empuja el suelo.", musculo: "Erectores Espinales" },
        { id: 15, nombre: "Remo Gironda", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif", seguridad: "⚠️ TRACCIÓN: No balancees el torso.", tecnica: "Lleva el agarre al abdomen bajo.", musculo: "Espesor Espalda" },
        { id: 16, nombre: "Remo Mancuerna", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Row.gif", seguridad: "⚠️ GIRO: No rotes el tronco.", tecnica: "Tira de la mancuerna hacia la cadera.", musculo: "Dorsal" },
        { id: 17, nombre: "Pull-over Polea", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Straight-Arm-Pulldown.gif", seguridad: "⚠️ BRAZOS: Bloquea codos casi rectos.", tecnica: "Arco desde arriba hasta los muslos.", musculo: "Dorsal Inferior" },
        { id: 18, nombre: "Facepull", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", seguridad: "⚠️ CARA: Controla el regreso.", tecnica: "Tira a la frente separando manos.", musculo: "Deltoide Posterior" },
        { id: 19, nombre: "Remo en T", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/T-Bar-Row.gif", seguridad: "⚠️ PECHO: Pegado al soporte.", tecnica: "Tira explosivo, aprieta escápulas.", musculo: "Espalda Media" },
        { id: 20, nombre: "Hiperextensiones", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Back-Extension.gif", seguridad: "⚠️ RANGO: No hiperextiendas hacia atrás.", tecnica: "Baja lento, sube hasta alinear torso.", musculo: "Lumbares" }
    ],
    piernas: [
        { id: 21, nombre: "Sentadilla", img: "https://fitnessprogramer.com/wp-content/uploads/2021/01/Barbell-Squat.gif", seguridad: "⚠️ RODILLAS: Que no colapsen adentro.", tecnica: "Baja rompiendo el paralelo.", musculo: "Cuádriceps y Glúteo" },
        { id: 22, nombre: "Prensa 45°", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Press.gif", seguridad: "⚠️ BLOQUEO: Nunca estires al 100%.", tecnica: "Baja lento y profundo.", musculo: "Cuádriceps" },
        { id: 23, nombre: "PM Rumano", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif", seguridad: "⚠️ ISQUIOS: Siente el estiramiento.", tecnica: "Cadera atrás, barra pegada a piernas.", musculo: "Isquiotibiales" },
        { id: 24, nombre: "Zancadas", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lunge.gif", seguridad: "⚠️ EQUILIBRIO: Paso largo.", tecnica: "Rodilla trasera casi al suelo.", musculo: "Glúteo" },
        { id: 25, nombre: "Extensiones", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Extension.gif", seguridad: "⚠️ CONTROL: No des patadas.", tecnica: "Aprieta 1 seg arriba.", musculo: "Cuádriceps" },
        { id: 26, nombre: "Curl Femoral", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Curl.gif", seguridad: "⚠️ PELVIS: No la separes del banco.", tecnica: "Talones a glúteos.", musculo: "Isquiotibiales" },
        { id: 27, nombre: "Hip Thrust", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hip-Thrust.gif", seguridad: "⚠️ BARRA: Usa almohadilla.", tecnica: "Empuje de cadera potente.", musculo: "Glúteo Mayor" },
        { id: 28, nombre: "Gemelos Pie", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Standing-Calf-Raise.gif", seguridad: "⚠️ RANGO: Estira bien abajo.", tecnica: "Sube a puntas máximo.", musculo: "Gemelos" },
        { id: 29, nombre: "Sent. Búlgara", img: "https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Bulgarian-Split-Squat.gif", seguridad: "⚠️ ESTABILIDAD: Cuidado al bajar.", tecnica: "Un pie atrás elevado.", musculo: "Cuádriceps" },
        { id: 30, nombre: "Zancada Lateral", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Lunge.gif", seguridad: "⚠️ CADERA: Tírala hacia atrás.", tecnica: "Desplazamiento lateral.", musculo: "Aductores" }
    ],
    hombros: [
        { id: 31, nombre: "Press Militar", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Shoulder-Press.gif", seguridad: "⚠️ ESPALDA: No arquees lumbar.", tecnica: "Barra sobre cabeza, bloquea codos.", musculo: "Deltoide Frontal" },
        { id: 32, nombre: "Lat. Mancuernas", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Lateral-Raise.gif", seguridad: "⚠️ ALTURA: No pases del hombro.", tecnica: "Sube pesas a los lados, codos altos.", musculo: "Deltoide Lateral" },
        { id: 33, nombre: "Press Arnold", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Arnold-Press.gif", seguridad: "⚠️ GIRO: Hazlo fluido.", tecnica: "Rota muñecas mientras subes.", musculo: "Deltoide Completo" },
        { id: 34, nombre: "Pájaros", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Rear-Lateral-Raise.gif", seguridad: "⚠️ CUELLO: Mira al suelo.", tecnica: "Inclinado, abre brazos como alas.", musculo: "Deltoide Posterior" },
        { id: 35, nombre: "Elev. Frontal", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Front-Raise.gif", seguridad: "⚠️ BALANCEO: Cuerpo quieto.", tecnica: "Sube mancuerna frente a ti.", musculo: "Deltoide Frontal" },
        { id: 36, nombre: "Press Mancuernas", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif", seguridad: "⚠️ RANGO: Baja hasta las orejas.", tecnica: "Empuje vertical sentado.", musculo: "Deltoide Medio" },
        { id: 37, nombre: "Encogimientos", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shrug.gif", seguridad: "⚠️ ROTACIÓN: No rotes hombros.", tecnica: "Sube hombros hacia orejas.", musculo: "Trapecio" },
        { id: 38, nombre: "Remo al Mentón", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Upright-Row.gif", seguridad: "⚠️ MUÑECAS: Bajo los codos.", tecnica: "Tira barra cerca del cuerpo.", musculo: "Trapecio" },
        { id: 39, nombre: "Facepull Polea", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Face-Pull.gif", seguridad: "⚠️ PULGARES: Hacia atrás.", tecnica: "Tira cuerda hacia tus ojos.", musculo: "Deltoide Posterior" },
        { id: 40, nombre: "Posterior Polea", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Rear-Delt-Fly.gif", seguridad: "⚠️ CONTROL: No sueltes rápido.", tecnica: "Cruza poleas para hombro post.", musculo: "Hombro Posterior" }
    ],
    brazos: [
        { id: 41, nombre: "Curl Barra", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif", seguridad: "⚠️ CODOS: Pegados al cuerpo.", tecnica: "Flexiona sin mover hombros.", musculo: "Bíceps" },
        { id: 42, nombre: "Press Francés", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/EZ-Bar-Skullcrusher.gif", seguridad: "⚠️ FRENTE: Baja con cuidado.", tecnica: "Extensión tríceps tumbado.", musculo: "Tríceps" },
        { id: 43, nombre: "Curl Martillo", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Hammer-Curl.gif", seguridad: "⚠️ AGARRE: Neutro.", tecnica: "Sube mancuernas alternas.", musculo: "Braquial" },
        { id: 44, nombre: "Polea Tríceps", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif", seguridad: "⚠️ BLOQUEO: Aprieta abajo.", tecnica: "Extiende brazos hacia el suelo.", musculo: "Tríceps" },
        { id: 45, nombre: "Curl Scott", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Preacher-Curl.gif", seguridad: "⚠️ EXTENSIÓN: No estires 100%.", tecnica: "Aisla bíceps en el banco.", musculo: "Bíceps" },
        { id: 46, nombre: "Fondos Tríceps", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Bench-Dip.gif", seguridad: "⚠️ HOMBROS: No bajes demasiado.", tecnica: "Cuerpo vertical entre bancos.", musculo: "Tríceps" },
        { id: 47, nombre: "Curl Concentrado", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Concentration-Curl.gif", seguridad: "⚠️ APOYO: Brazo contra muslo.", tecnica: "Flexión lenta, máxima contracción.", musculo: "Bíceps" },
        { id: 48, nombre: "Cuerda tras Nuca", img: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Cable-Overhead-Triceps-Extension.gif", seguridad: "⚠️ CODOS: Cerrados.", tecnica: "Extensión sobre la cabeza.", musculo: "Tríceps" },
        { id: 49, nombre: "Curl Polea Baja", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Cable-Curl.gif", seguridad: "⚠️ TENSIÓN: No sueltes abajo.", tecnica: "Tensión constante al subir.", musculo: "Bíceps" },
        { id: 50, nombre: "Patada Tríceps", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Triceps-Kickback.gif", seguridad: "⚠️ BRAZO: Paralelo al suelo.", tecnica: "Extiende mancuerna atrás.", musculo: "Tríceps" }
    ],
    core: [
        { id: 51, nombre: "Plancha", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Plank.gif", seguridad: "⚠️ CADERA: Ni arriba ni abajo.", tecnica: "Cuerpo recto, aprieta abdomen.", musculo: "Core" },
        { id: 52, nombre: "Crunch", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Crunch.gif", seguridad: "⚠️ CUELLO: No tires de la nuca.", tecnica: "Eleva escápulas del suelo.", musculo: "Abdomen" },
        { id: 53, nombre: "Leg Raises", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Leg-Raise.gif", seguridad: "⚠️ LUMBAR: Pegada al suelo.", tecnica: "Sube piernas estiradas a 90°.", musculo: "Abdomen Inferior" },
        { id: 54, nombre: "Rueda Abdominal", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Ab-Wheel-Rollout.gif", seguridad: "⚠️ RANGO: No hiperextiendas lumbar.", tecnica: "Desliza al frente y regresa.", musculo: "Core Completo" },
        { id: 55, nombre: "Giros Rusos", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif", seguridad: "⚠️ TORSIÓN: Controlada.", tecnica: "Gira el tronco de lado a lado.", musculo: "Oblicuos" },
        { id: 56, nombre: "Escaladores", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-Climber.gif", seguridad: "⚠️ VELOCIDAD: Mantén técnica.", tecnica: "Rodillas al pecho rápido.", musculo: "Abdomen y Cardio" },
        { id: 57, nombre: "Plancha Lateral", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Side-Plank.gif", seguridad: "⚠️ HOMBRO: Alineado con codo.", tecnica: "Aguanta el peso de lado.", musculo: "Oblicuos" },
        { id: 58, nombre: "Bicho Muerto", img: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dead-Bug.gif", seguridad: "⚠️ COORDINACIÓN: Lento.", tecnica: "Brazo y pierna opuesta bajan.", musculo: "Estabilidad" },
        { id: 59, nombre: "V-Ups", img: "https://fitnessprogramer.com/wp-content/uploads/2021/05/V-up.gif", seguridad: "⚠️ EXPLOSIVO: Pero controlado.", tecnica: "Toca pies con manos en aire.", musculo: "Abdomen Completo" },
        { id: 60, nombre: "Toque Talones", img: "https://fitnessprogramer.com/wp-content/uploads/2021/07/Heel-Touch.gif", seguridad: "⚠️ CUELLO: Mira al techo.", tecnica: "Tumbado, oscila lateralmente.", musculo: "Oblicuos" }
    ]
};

/* ==========================================================
   2. RECOMENDACIONES DE SALUD
   ========================================================== */
const recomendacionesSalud = [
    "⚠️ CODERAS: En el Press de Banca, mantén los codos a 45 grados; abrirlos a 90 grados dañará tus rotadores.",
    "⚠️ PESO MUERTO: Cuello alineado con la columna para evitar pinzamientos cervicales.",
    "⚠️ GRIP: No uses el 'agarre suicida' (pulgar fuera) en press de banca.",
    "⚠️ ZANCADAS: Tu rodilla no debe sobrepasar excesivamente la punta del pie.",
    "⚠️ SENTADILLA: Si los talones se levantan, falta movilidad de tobillo.",
    "⚠️ DOMINADAS: No te dejes caer de golpe; dañas los tendones del bíceps.",
    "⚠️ CINTURÓN: No lo uses para todo; fortalece tu core.",
    "⚠️ MUÑECAS: En press militar, muñecas siempre rectas.",
    "⚠️ CALENTAMIENTO: El cardio no es calentar. Haz series de aproximación.",
    "SOBRECARGA PROGRESIVA: Anota tus pesos. Supera tus marcas anteriores.",
    "RANGO DE MOVIMIENTO: Un rango completo activa más fibras.",
    "TENSIÓN CONSTANTE: No descanses arriba durante la serie.",
    "SODIO: No lo elimines; es vital para la contracción muscular.",
    "AGUA: El músculo es 75% agua. Hidrátate siempre.",
    "PACIENCIA: Los cambios visuales tardan semanas, no días."
];

/* ==========================================================
   3. LÓGICA DE GESTIÓN (PLAN Y CALCULADORA)
   ========================================================== */
let planSemanal = JSON.parse(localStorage.getItem("miPlanGym")) || {
    lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: [], domingo: []
};

let ejercicioTemporal = null;

// Inicialización al cargar la ventana
window.onload = () => {
    mostrarConsejoAleatorio();
    generarMenuMusculos();
    actualizarVistaCronograma();
    inicializarCalculadora();
};

function mostrarConsejoAleatorio() {
    const txt = document.getElementById("consejo-texto");
    if(txt) {
        const azar = Math.floor(Math.random() * recomendacionesSalud.length);
        txt.innerText = recomendacionesSalud[azar];
    }
}

function generarMenuMusculos() {
    const contenedor = document.getElementById("botones-musculos");
    const grupos = Object.keys(ejerciciosDB);
    contenedor.innerHTML = "";
    grupos.forEach(grupo => {
        const btn = document.createElement("button");
        btn.innerText = grupo.toUpperCase();
        btn.onclick = () => {
            document.querySelectorAll(".grid-filtros button").forEach(b => b.classList.remove("activo"));
            btn.classList.add("activo");
            mostrarEjercicios(grupo);
        };
        contenedor.appendChild(btn);
    });
}

function mostrarEjercicios(grupo) {
    const grid = document.getElementById("grid-ejercicios");
    const titulo = document.getElementById("titulo-categoria");
    
    grid.innerHTML = "";
    titulo.innerText = `ENTRENAMIENTO DE ${grupo.toUpperCase()}`;

    ejerciciosDB[grupo].forEach(ex => {
        const card = document.createElement("div");
        card.className = "card-ejercicio";
        
        card.innerHTML = `
            <div class="ejercicio-img-container">
                <img src="${ex.img}" 
                     alt="${ex.nombre}" 
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x300/1a1a1a/FFAC00?text=IRON+MIND+PRO'">
            </div>
            <div class="info-ejer">
                <div class="meta">${ex.musculo || grupo}</div>
                <h3>${ex.nombre}</h3>
                <div class="seguridad-alerta">${ex.seguridad}</div>
                <p class="tecnica-texto"><strong>Técnica:</strong> ${ex.tecnica}</p>
                <button class="btn-add-plan" onclick="abrirModal(${ex.id}, '${grupo}')">
                    <i class="fas fa-plus"></i> AÑADIR AL PLAN
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    document.getElementById("biblioteca-ejercicios").scrollIntoView({ behavior: 'smooth' });
}

function abrirModal(id, grupo) {
    ejercicioTemporal = ejerciciosDB[grupo].find(e => e.id === id);
    document.getElementById("ejercicio-seleccionado-nombre").innerText = ejercicioTemporal.nombre;
    document.getElementById("modal-planner").classList.remove("oculto");
}

document.getElementById("cancelar-add").onclick = () => document.getElementById("modal-planner").classList.add("oculto");

document.getElementById("confirmar-add").onclick = () => {
    const dia = document.getElementById("select-dia").value;
    planSemanal[dia].push(ejercicioTemporal.nombre);
    localStorage.setItem("miPlanGym", JSON.stringify(planSemanal));
    actualizarVistaCronograma();
    document.getElementById("modal-planner").classList.add("oculto");
};

function actualizarVistaCronograma() {
    Object.keys(planSemanal).forEach(dia => {
        const listaUI = document.querySelector(`.dia-box[data-dia="${dia}"] .lista-rutina`);
        if(listaUI) {
            listaUI.innerHTML = "";
            planSemanal[dia].forEach((ejer, index) => {
                const li = document.createElement("li");
                li.className = "item-rutina";
                li.innerHTML = `${ejer} <span onclick="eliminarDelPlan('${dia}', ${index})" style="cursor:pointer; color:#ff4444">❌</span>`;
                listaUI.appendChild(li);
            });
        }
    });
}

function eliminarDelPlan(dia, index) {
    planSemanal[dia].splice(index, 1);
    localStorage.setItem("miPlanGym", JSON.stringify(planSemanal));
    actualizarVistaCronograma();
}

document.getElementById("btn-reset").onclick = () => {
    if(confirm("¿Borrar toda tu semana?")) {
        planSemanal = { lunes: [], martes: [], miercoles: [], jueves: [], viernes: [], sabado: [], domingo: [] };
        localStorage.setItem("miPlanGym", JSON.stringify(planSemanal));
        actualizarVistaCronograma();
    }
};

function inicializarCalculadora() {
    const btn = document.getElementById("btn-calcular-calorias");
    if(btn) {
        btn.onclick = () => {
            const peso = parseFloat(document.getElementById("peso").value);
            const altura = parseFloat(document.getElementById("altura").value);
            const edad = parseInt(document.getElementById("edad").value);
            const genero = document.getElementById("genero").value;
            const actividad = parseFloat(document.getElementById("actividad").value);
            
            if (!peso || !altura || !edad) return alert("Completa todos los campos.");
            
            let bmr = (genero === "hombre") ? (10 * peso) + (6.25 * altura) - (5 * edad) + 5 : (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
            const tdee = Math.round(bmr * actividad);
            
            const resBox = document.getElementById("resultado-calorias");
            resBox.classList.remove("oculto");
            resBox.innerHTML = `
                <h3>Tu Gasto Diario: <span>${tdee} kcal</span></h3>
                <p>Mantenimiento: <strong>${tdee} kcal</strong></p>
                <p>Déficit: <strong>${Math.round(tdee * 0.85)} kcal</strong></p>
                <p>Superávit: <strong>${Math.round(tdee * 1.15)} kcal</strong></p>`;
        };
    }
}