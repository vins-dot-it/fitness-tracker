// Full Diet and Meal Plan Database extracted rigidly from documents (Without Protein attributes)
const BASE_DIET_PLAN = {
    "ON": {
        "Colazione": { cibo: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592 },
        "Spuntino": { cibo: "Skyr 170 g; mandorle 20 g", kcal: 223 },
        "Pre-workout": { cibo: "Pane integrale 50 g; banana 120 g", kcal: 232 },
        "Pranzo": { cibo: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724 },
        "Spuntino 2": { cibo: "Fiocchi di latte 150 g; mela 180 g", kcal: 241 },
        "Cena": { cibo: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591 }
    },
    "OFF": {
        "Colazione": { cibo: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563 },
        "Spuntino": { cibo: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216 },
        "Pranzo": { cibo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592 },
        "Spuntino 2": { cibo: "Fiocchi di latte 150 g; pera 180 g", kcal: 250 },
        "Cena": { cibo: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597 },
        "Extra": { cibo: "Kiwi 150 g", kcal: 92 }
    }
};

// Precise Mapped Variants for Selection (Matched Dinner & Lunch Rigorously)
const VARIANTI_ON = [
    { id: "on_base", nome: "Piano Base ON (Pollo / Salmone)", pranzo: { cibo: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724 }, cena: { cibo: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591 } },
    { id: "on_v1", nome: "1- Riso Pollo / Salmone", pranzo: { cibo: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724 }, cena: { cibo: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591 } },
    { id: "on_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: { cibo: "Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal: 755 }, cena: { cibo: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal: 643 } },
    { id: "on_v3", nome: "3- Pasta Pollo / Merluzzo", pranzo: { cibo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; verdure 200 g; olio EVO 10 g", kcal: 735 }, cena: { cibo: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal: 660 } },
    { id: "on_v4", nome: "4- Riso Tonno / Bresaola", pranzo: { cibo: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 704 }, cena: { cibo: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal: 640 } },
    { id: "on_v5", nome: "5- Pasta Tonno / Pollo", pranzo: { cibo: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 701 }, cena: { cibo: "pollo 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal: 633 } },
    { id: "on_v6", nome: "6- Riso Ceci Pollo / Pollo", pranzo: { cibo: "Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 871 }, cena: { cibo: "pollo 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal: 600 } },
    { id: "on_v7", nome: "7- Pasta Pollo / Manzo", pranzo: { cibo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal: 754 }, cena: { cibo: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal: 556 } }
];

const VARIANTI_OFF = [
    { id: "off_base", nome: "Piano Base OFF (Tonno / Tacchino)", pranzo: { cibo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592 }, cena: { cibo: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597 } },
    { id: "off_v1", nome: "1- Pasta Tonno / Pollo", pranzo: { cibo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592 }, cena: { cibo: "pollo 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597 } },
    { id: "off_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: { cibo: "Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal: 755 }, cena: { cibo: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal: 643 } },
    { id: "off_v3", nome: "3- Riso Ceci Pollo / Pollo", pranzo: { cibo: "Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 766 }, cena: { cibo: "pollo 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal: 525 } },
    { id: "off_v4", nome: "4- Pasta Tonno / Pollo", pranzo: { cibo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592 }, cena: { cibo: "pollo 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal: 545 } },
    { id: "off_v5", nome: "5- Riso Ceci Pollo / Merluzzo", pranzo: { cibo: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 694 }, cena: { cibo: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 560 } },
    { id: "off_v6", nome: "6- Riso Pollo / Bresaola", pranzo: { cibo: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal: 631 }, cena: { cibo: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 510 } }
];

const GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];

// Global State Object
let state = {
    currentDayIdx: 0,
    struttura: { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" },
    sceltePasti: { "lunedì": "on_base", "martedì": "off_base", "mercoledì": "on_base", "giovedì": "off_base", "venerdì": "on_base" },
    pesoLog: []
};

// Initialize Application Local Storage Configuration
function loadState() {
    const saved = localStorage.getItem("ft_v2_state");
    if (saved) {
        try {
            state = JSON.parse(saved);
        } catch(e) { console.error(e); }
    } else {
        localStorage.setItem("ft_v2_state", JSON.stringify(state));
    }
}

function saveState() {
    localStorage.setItem("ft_v2_state", JSON.stringify(state));
}

// Tab Switching Event Dispatcher
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        const targetTab = this.getAttribute("data-tab");
        
        document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
        document.getElementById(targetTab).classList.add("active");

        document.querySelectorAll(".nav-btn").forEach(nb => {
            nb.classList.remove("text-blue-600", "font-bold", "border-t-2", "border-blue-600", "bg-blue-50/30");
            nb.classList.add("text-gray-500", "font-medium");
        });

        this.classList.remove("text-gray-500", "font-medium");
        this.classList.add("text-blue-600", "font-bold", "border-t-2", "border-blue-600", "bg-blue-50/30");

        if (targetTab === 'tab-oggi') renderOggi();
        if (targetTab === 'tab-struttura') renderStruttura();
        if (targetTab === 'tab-pasti') renderPastiTabs();
        if (targetTab === 'tab-peso') { renderPeso(); initChart(); }
    });
});

// Render 1: OGGI View
function renderOggi() {
    const giorno = GIORNI[state.currentDayIdx];
    document.getElementById("current-day-display").innerText = giorno;

    const status = state.struttura[giorno] || "OFF";
    const sceltaId = state.sceltePasti[giorno];
    
    let pranzoSostituto = null;
    let cenaSostituto = null;

    if (status === "ON") {
        const found = VARIANTI_ON.find(v => v.id === sceltaId);
        if (found) { pranzoSostituto = found.pranzo; cenaSostituto = found.cena; }
    } else {
        const found = VARIANTI_OFF.find(v => v.id === sceltaId);
        if (found) { pranzoSostituto = found.pranzo; cenaSostituto = found.cena; }
    }

    const baseTemplate = BASE_DIET_PLAN[status];
    const container = document.getElementById("oggi-meals-container");
    container.innerHTML = "";

    let totalKcal = 0;

    Object.keys(baseTemplate).forEach(pastoNome => {
        let details = baseTemplate[pastoNome];
        if (pastoNome === "Pranzo" && pranzoSostituto) details = pranzoSostituto;
        if (pastoNome === "Cena" && cenaSostituto) details = cenaSostituto;

        totalKcal += details.kcal;

        const row = document.createElement("div");
        row.className = "bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-start space-x-3";
        row.innerHTML = `
            <div class="flex-1">
                <span class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm uppercase tracking-wider">${pastoNome}</span>
                <p class="text-sm font-medium text-gray-800 mt-1 leading-snug">${details.cibo}</p>
            </div>
            <div class="text-right shrink-0">
                <span class="text-sm font-extrabold text-gray-900">${details.kcal}</span>
                <span class="text-xxs text-gray-400 block uppercase font-bold">Kcal</span>
            </div>
        `;
        container.appendChild(row);
    });

    const targetKcal = status === "ON" ? 2600 : 2300;
    document.getElementById("oggi-total-kcal").innerText = totalKcal;
    document.getElementById("oggi-target-kcal").innerText = targetKcal;
    document.getElementById("oggi-day-type").innerText = `REGIME: ${status} (${sceltaId ? "VARIANTE" : "BASE"})`;
    document.getElementById("global-kcal-badge").innerText = `${totalKcal} kcal`;

    const pct = Math.min(100, Math.round((totalKcal / targetKcal) * 100));
    document.getElementById("oggi-progress-bar").style.width = `${pct}%`;
    document.getElementById("oggi-progress-pct").innerText = `${pct}% consumato`;
}

// Day Slider Events
document.getElementById("btn-prev-day").addEventListener("click", () => {
    state.currentDayIdx = (state.currentDayIdx === 0) ? GIORNI.length - 1 : state.currentDayIdx - 1;
    renderOggi();
});
document.getElementById("btn-next-day").addEventListener("click", () => {
    state.currentDayIdx = (state.currentDayIdx === GIORNI.length - 1) ? 0 : state.currentDayIdx + 1;
    renderOggi();
});

// Render 2: STRUTTURA View
function renderStruttura() {
    const container = document.getElementById("struttura-giorni-container");
    container.innerHTML = "";

    GIORNI.forEach(giorno => {
        const currentStatus = state.struttura[giorno] || "OFF";
        
        const row = document.createElement("div");
        row.className = "flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200";
        row.innerHTML = `
            <span class="text-sm font-bold text-gray-700 capitalize">${giorno}</span>
            <div class="flex space-x-1">
                <button data-day="${giorno}" data-val="ON" class="toggle-on-off px-4 py-1.5 rounded-lg text-xs font-black transition-colors ${currentStatus === "ON" ? "bg-emerald-600 text-white" : "bg-white text-gray-400 border border-gray-200"}">ON</button>
                <button data-day="${giorno}" data-val="OFF" class="toggle-on-off px-4 py-1.5 rounded-lg text-xs font-black transition-colors ${currentStatus === "OFF" ? "bg-amber-500 text-white" : "bg-white text-gray-400 border border-gray-200"}">OFF</button>
            </div>
        `;
        container.appendChild(row);
    });

    document.querySelectorAll(".toggle-on-off").forEach(btn => {
        btn.addEventListener("click", function() {
            const day = this.getAttribute("data-day");
            const val = this.getAttribute("data-val");
            state.struttura[day] = val;
            
            // Auto-align meal options to default base variant to avoid structure mismatch
            state.sceltePasti[day] = val === "ON" ? "on_base" : "off_base";
            
            saveState();
            renderStruttura();
        });
    });
}

document.getElementById("btn-load-3gg").addEventListener("click", () => {
    state.struttura = { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" };
    GIORNI.forEach(d => { state.sceltePasti[d] = state.struttura[d] === "ON" ? "on_base" : "off_base"; });
    saveState(); renderStruttura();
});

document.getElementById("btn-load-4gg").addEventListener("click", () => {
    state.struttura = { "lunedì": "ON", "martedì": "ON", "mercoledì": "OFF", "giovedì": "ON", "venerdì": "ON" };
    GIORNI.forEach(d => { state.sceltePasti[d] = state.struttura[d] === "ON" ? "on_base" : "off_base"; });
    saveState(); renderStruttura();
});

// Render 3: SCEGLI PASTI (Conditioned Dynamic Selectors)
function renderPastiTabs() {
    const container = document.getElementById("pasti-giorni-container");
    container.innerHTML = "";

    GIORNI.forEach(giorno => {
        const isON = state.struttura[giorno] === "ON";
        const currentScelta = state.sceltePasti[giorno];
        const pool = isON ? VARIANTI_ON : VARIANTI_OFF;

        let optionsHtml = "";
        pool.forEach(item => {
            optionsHtml += `<option value="${item.id}" ${currentScelta === item.id ? "selected" : ""}>${item.nome}</option>`;
        });

        const card = document.createElement("div");
        card.className = `p-4 rounded-xl border ${isON ? "bg-emerald-50/40 border-emerald-100" : "bg-amber-50/30 border-amber-100"} space-y-2`;
        card.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-sm font-bold text-gray-800 capitalize">${giorno}</span>
                <span class="text-xxs font-extrabold uppercase px-2 py-0.5 rounded-md ${isON ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}">${state.struttura[giorno]}</span>
            </div>
            <div>
                <label class="block text-xxs font-bold text-gray-400 uppercase tracking-wider mb-1">Seleziona Variante Bilanciata</label>
                <select data-day="${giorno}" class="pasti-selector w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-blue-500">
                    ${optionsHtml}
                </select>
            </div>
        `;
        container.appendChild(card);
    });

    document.querySelectorAll(".pasti-selector").forEach(select => {
        select.addEventListener("change", function() {
            const day = this.getAttribute("data-day");
            state.sceltePasti[day] = this.value;
            saveState();
        });
    });
}

// Render 4: PESO Logics & Graphing
let weightChartInstance = null;

function renderPeso() {
    const container = document.getElementById("peso-history-container");
    container.innerHTML = "";
    
    // Sort items reverse chronological
    const sorted = [...state.pesoLog].sort((a,b) => new Date(b.data) - new Date(a.data));
    
    if (sorted.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 text-center py-4">Nessun record inserito.</p>`;
    }

    sorted.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "flex items-center justify-between py-2 text-sm";
        div.innerHTML = `
            <span class="font-medium text-gray-600">${item.data}</span>
            <span class="font-extrabold text-gray-800">${item.peso} kg</span>
            <button data-id="${item.id}" class="btn-del-peso text-xs font-bold text-red-500 hover:text-red-700 bg-red-50 px-2 py-1 rounded-md">Elimina</button>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll(".btn-del-peso").forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            state.pesoLog = state.pesoLog.filter(p => p.id !== id);
            saveState();
            renderPeso();
            initChart();
        });
    });

    // Compute Moving 7-Day Average
    if (state.pesoLog.length > 0) {
        const total = state.pesoLog.reduce((acc, curr) => acc + parseFloat(curr.peso), 0);
        const avg = (total / state.pesoLog.length).toFixed(1);
        document.getElementById("peso-media-7gg").innerText = `${avg} kg`;

        // Predictive Target Formula Estimation
        if (state.pesoLog.length >= 2) {
            const cronoLog = [...state.pesoLog].sort((a,b) => new Date(a.data) - new Date(b.data));
            const first = cronoLog[0];
            const last = cronoLog[cronoLog.length - 1];
            
            const diffPeso = parseFloat(last.peso) - parseFloat(first.peso);
            const diffTempo = (new Date(last.data) - new Date(first.data)) / (1000 * 60 * 60 * 24);

            if (diffTempo > 0 && diffPeso < 0) {
                const kgAlGiorno = Math.abs(diffPeso / diffTempo);
                const kgMancanti = parseFloat(last.peso) - 72.0;
                
                if (kgMancanti > 0) {
                    const giorniMancanti = Math.ceil(kgMancanti / kgAlGiorno);
                    const targetData = new Date();
                    targetData.setDate(targetData.getDate() + giorniMancanti);
                    document.getElementById("peso-previsione").innerText = `Target 72kg stimato in circa ${giorniMancanti} giorni (${targetData.toLocaleDateString('it-IT')})`;
                } else {
                    document.getElementById("peso-previsione").innerText = "Obiettivo target di 72 kg già raggiunto! Grande lavoro!";
                }
            } else {
                document.getElementById("peso-previsione").innerText = "Trend stabile o in crescita. Continua a tracciare per aggiornare la stima.";
            }
        } else {
            document.getElementById("peso-previsione").innerText = "Inserisci almeno 2 misurazioni in date diverse per abilitare la stima.";
        }
    } else {
        document.getElementById("peso-media-7gg").innerText = "-- kg";
        document.getElementById("peso-previsione").innerText = "Inserisci più dati storici per visualizzare la stima.";
    }
}

document.getElementById("btn-salva-peso").addEventListener("click", () => {
    const dataInput = document.getElementById("peso-data").value;
    const pesoInput = document.getElementById("peso-valore").value;

    if (!dataInput || !pesoInput) { alert("Compila entrambi i campi!"); return; }

    const newRecord = {
        id: "_" + Math.random().toString(36).substr(2, 9),
        data: dataInput,
        peso: parseFloat(pesoInput).toFixed(1)
    };

    // Replace if date exists (Advanced retrospective update logic)
    state.pesoLog = state.pesoLog.filter(p => p.data !== dataInput);
    state.pesoLog.push(newRecord);
    
    saveState();
    renderPeso();
    initChart();

    document.getElementById("peso-valore").value = "";
});

function initChart() {
    const ctx = document.getElementById("chartPeso").getContext("2d");
    const sorted = [...state.pesoLog].sort((a,b) => new Date(a.data) - new Date(b.data));

    const labels = sorted.map(item => item.data);
    const dataPoints = sorted.map(item => parseFloat(item.peso));

    if (weightChartInstance) weightChartInstance.destroy();

    weightChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peso Corporeo (kg)',
                data: dataPoints,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderWidth: 3,
                tension: 0.2,
                fill: true,
                pointBackgroundColor: '#3b82f6',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { grid: { color: '#f3f4f6' }, ticks: { font: { size: 11 } } },
                x: { grid: { display: false }, ticks: { font: { size: 11 } } }
            }
        }
    });
}

// Global bootstrap sequence
window.addEventListener("load", () => {
    const oggi = new Date().toISOString().split('T')[0];
    document.getElementById("peso-data").value = oggi;
    loadState();
    renderOggi();
});
