const baseMeals = {
    ON: [
        { pasto: "Colazione", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592 },
        { pasto: "Spuntino", alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223 },
        { pasto: "Pre-workout", alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232 },
        { pasto: "Spuntino", alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241 }
    ],
    OFF: [
        { pasto: "Colazione", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563 },
        { pasto: "Spuntino", alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216 },
        { pasto: "Spuntino", alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250 },
        { pasto: "Extra", alimenti: "Kiwi 150 g", kcal: 92 }
    ]
};

const variantiON = [
    { id: "on_v1", nome: "1- Riso Pollo / Salmone", pranzo: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 724, cena: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal_c: 591 },
    { id: "on_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal_p: 755, cena: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal_c: 643 },
    { id: "on_v3", nome: "3- Pasta Pollo / Merluzzo", pranzo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal_p: 754, cena: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal_c: 660 },
    { id: "on_v4", nome: "4- Riso Tonno / Bresaola", pranzo: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 704, cena: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal_c: 640 },
    { id: "on_v5", nome: "5- Pasta Tonno / Pollo", pranzo: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 701, cena: "pollo 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal_c: 633 },
    { id: "on_v6", nome: "6- Riso Ceci Pollo / Pollo", pranzo: "Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 871, cena: "pollo 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal_c: 600 },
    { id: "on_v7", nome: "7- Pasta Pollo / Manzo", pranzo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal_p: 754, cena: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal_c: 556 }
];

const variantiOFF = [
    { id: "off_v1", nome: "1- Pasta Tonno / Pollo", pranzo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 592, cena: "pollo 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal_c: 597 },
    { id: "off_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal_p: 755, cena: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal_c: 643 },
    { id: "off_v3", nome: "3- Riso Ceci Pollo / Pollo", pranzo: "Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 766, cena: "pollo 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal_c: 525 },
    { id: "off_v4", nome: "4- Pasta Tonno / Pollo", pranzo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 592, cena: "pollo 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal_c: 545 },
    { id: "off_v5", nome: "5- Riso Ceci Pollo / Merluzzo", pranzo: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g cudo; zucchine 250 g; olio EVO 10 g", kcal_p: 694, cena: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 560 },
    { id: "off_v6", nome: "6- Riso Pollo / Bresaola", pranzo: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal_p: 631, cena: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 510 }
];

const GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];

let appState = JSON.parse(localStorage.getItem("fitTrackerStateV2")) || {
    struttura: { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" },
    sceltePasti: { "lunedì": "on_v1", "martedì": "off_v1", "mercoledì": "on_v2", "giovedì": "off_v3", "venerdì": "on_v7" },
    pesi: []
};

let currentOggiIndex = 0;
let weightChart = null;

function saveState() { localStorage.setItem("fitTrackerStateV2", JSON.stringify(appState)); }

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".nav-btn").forEach(b => {
            b.classList.remove("text-emerald-600", "border-t-2", "border-emerald-600", "font-bold");
            b.classList.add("text-gray-500", "font-medium");
        });
        e.target.classList.add("text-emerald-600", "border-t-2", "border-emerald-600", "font-bold");
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        document.getElementById(e.target.dataset.target).classList.add("active");
        
        if(e.target.dataset.target === "tab-oggi") renderOggi();
        if(e.target.dataset.target === "tab-struttura") renderStruttura();
        if(e.target.dataset.target === "tab-pasti") renderScegliPasti();
        if(e.target.dataset.target === "tab-peso") renderPeso();
    });
});

function renderOggi() {
    const giorno = GIORNI[currentOggiIndex];
    document.getElementById("current-day-title").innerText = giorno;
    const type = appState.struttura[giorno];
    document.getElementById("oggi-day-type").innerText = `Giorno ${type}`;
    document.getElementById("oggi-day-type").className = `text-xs font-bold mt-1 uppercase tracking-wide ${type === 'ON' ? 'text-emerald-600' : 'text-amber-600'}`;

    const container = document.getElementById("oggi-meals-container");
    container.innerHTML = "";
    let totalKcal = 0;
    const baseList = baseMeals[type];
    
    baseList.forEach(m => {
        if(["Colazione", "Spuntino", "Pre-workout"].includes(m.pasto)) {
            createMealCard(container, m.pasto, m.alimenti, m.kcal);
            totalKcal += m.kcal;
        }
    });

    const varianteId = appState.sceltePasti[giorno];
    const variante = (type === "ON" ? variantiON : variantiOFF).find(v => v.id === varianteId);

    if(variante) {
        createMealCard(container, "Pranzo", variante.pranzo, variante.kcal_p);
        totalKcal += variante.kcal_p;
    }

    baseList.forEach(m => {
        if(!["Colazione", "Spuntino", "Pre-workout", "Extra"].includes(m.pasto)) {
            createMealCard(container, m.pasto, m.alimenti, m.kcal);
            totalKcal += m.kcal;
        }
    });

    if(variante) {
        createMealCard(container, "Cena", variante.cena, variante.kcal_c);
        totalKcal += variante.kcal_c;
    }

    baseList.forEach(m => {
        if(m.pasto === "Extra") {
            createMealCard(container, m.pasto, m.alimenti, m.kcal);
            totalKcal += m.kcal;
        }
    });
    document.getElementById("oggi-total-kcal").innerText = totalKcal;
}

function createMealCard(container, name, food, kcal) {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-xl border border-gray-200 shadow-xs flex flex-col space-y-1";
    card.innerHTML = `<div class="flex justify-between items-center border-b border-gray-100 pb-1"><span class="font-bold text-gray-900">${name}</span><span class="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">${kcal} Kcal</span></div><p class="text-sm text-gray-600 pt-1 leading-relaxed">${food}</p>`;
    container.appendChild(card);
}

document.getElementById("prev-day").addEventListener("click", () => { currentOggiIndex = (currentOggiIndex - 1 + GIORNI.length) % GIORNI.length; renderOggi(); });
document.getElementById("next-day").addEventListener("click", () => { currentOggiIndex = (currentOggiIndex + 1) % GIORNI.length; renderOggi(); });

function renderStruttura() {
    const container = document.getElementById("struttura-giorni-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const row = document.createElement("div");
        row.className = "flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg";
        row.innerHTML = `<span class="font-bold capitalize text-gray-800">${g}</span><select id="select-struct-${g}" class="bg-white border border-gray-300 rounded-md p-1.5 font-bold text-sm"><option value="ON" ${appState.struttura[g] === 'ON' ? 'selected' : ''}>ON</option><option value="OFF" ${appState.struttura[g] === 'OFF' ? 'selected' : ''}>OFF</option></select>`;
        container.appendChild(row);
    });
}

document.getElementById("btn-plan-3").addEventListener("click", () => {
    appState.struttura = { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" };
    GIORNI.forEach(g => { appState.sceltePasti[g] = appState.struttura[g] === "ON" ? "on_v1" : "off_v1"; });
    saveState(); renderStruttura();
});

document.getElementById("btn-plan-4").addEventListener("click", () => {
    appState.struttura = { "lunedì": "ON", "martedì": "ON", "mercoledì": "OFF", "giovedì": "ON", "venerdì": "ON" };
    GIORNI.forEach(g => { appState.sceltePasti[g] = appState.struttura[g] === "ON" ? "on_v1" : "off_v1"; });
    saveState(); renderStruttura();
});

document.getElementById("save-struttura").addEventListener("click", () => {
    GIORNI.forEach(g => {
        const val = document.getElementById(`select-struct-${g}`).value;
        if(appState.struttura[g] !== val) {
            appState.struttura[g] = val;
            appState.sceltePasti[g] = val === "ON" ? "on_v1" : "off_v1";
        }
    });
    saveState(); alert("Struttura salvata!");
});

function renderScegliPasti() {
    const container = document.getElementById("scegli-pasti-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const type = appState.struttura[g];
        const variantiDisponibili = type === "ON" ? variantiON : variantiOFF;
        const currentSelection = appState.sceltePasti[g];
        const block = document.createElement("div");
        block.className = "p-4 border border-gray-200 rounded-xl space-y-3 bg-gray-50/50";
        
        let optionsHtml = "";
        variantiDisponibili.forEach(v => { optionsHtml += `<option value="${v.id}" ${v.id === currentSelection ? 'selected' : ''}>${v.nome}</option>`; });

        block.innerHTML = `<div class="flex justify-between items-center"><span class="font-extrabold capitalize text-gray-900 text-lg">${g} <span class="text-xs px-2 py-0.5 rounded font-bold ${type==='ON'?'bg-emerald-100 text-emerald-800':'bg-amber-100 text-amber-800'}">${type}</span></span></div><select id="select-pasto-${g}" class="w-full bg-white border border-gray-300 rounded-lg p-2 font-semibold text-sm shadow-xs">${optionsHtml}</select><div id="preview-${g}" class="bg-white p-3 rounded-lg border border-gray-150 text-sm space-y-2 shadow-2xs"></div>`;
        container.appendChild(block);
        updateLivePreview(g, currentSelection, type);
        
        document.getElementById(`select-pasto-${g}`).addEventListener("change", (e) => {
            appState.sceltePasti[g] = e.target.value; saveState(); updateLivePreview(g, e.target.value, type);
        });
    });
}

function updateLivePreview(giorno, varianteId, type) {
    const previewDiv = document.getElementById(`preview-${giorno}`);
    const variantiList = type === "ON" ? variantiON : variantiOFF;
    const v = variantiList.find(item => item.id === varianteId);
    if(v) {
        previewDiv.innerHTML = `<div><p class="font-bold text-emerald-700 flex justify-between"><span>🍽️ Pranzo:</span> <span class="bg-emerald-50 px-1.5 py-0.2 rounded font-extrabold text-xs">${v.kcal_p} Kcal</span></p><p class="text-gray-600 text-xs mt-0.5">${v.pranzo}</p></div><div class="border-t border-gray-100 pt-2"><p class="font-bold text-emerald-700 flex justify-between"><span>🌙 Cena:</span> <span class="bg-emerald-50 px-1.5 py-0.2 rounded font-extrabold text-xs">${v.kcal_c} Kcal</span></p><p class="text-gray-600 text-xs mt-0.5">${v.cena}</p></div>`;
    }
}

function renderPeso() {
    document.getElementById("peso-date").value = new Date().toISOString().split('T')[0];
    const pesoMediaEl = document.getElementById("peso-media");
    const sortedPesi = [...appState.pesi].sort((a,b) => new Date(b.date) - new Date(a.date));
    
    if(appState.pesi.length > 0) {
        const recentPesi = sortedPesi.slice(0, 7);
        pesoMediaEl.innerText = `${(recentPesi.reduce((acc, p) => acc + p.value, 0) / recentPesi.length).toFixed(1)} kg`;
    } else { pesoMediaEl.innerText = "--"; }

    calculatePrediction();
    const logContainer = document.getElementById("peso-log");
    logContainer.innerHTML = "";
    sortedPesi.forEach(p => {
        const item = document.createElement("div");
        item.className = "flex justify-between items-center py-2";
        item.innerHTML = `<span class="font-medium">${p.date}</span><span class="font-bold">${p.value} kg</span><button onclick="deleteWeightRecord('${p.date}')" class="text-red-500 text-xs font-bold">Elimina</button>`;
        logContainer.appendChild(item);
    });
    renderWeightChart();
}

document.getElementById("peso-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const dateInput = document.getElementById("peso-date").value;
    const valInput = parseFloat(document.getElementById("peso-val").value);
    const existingIdx = appState.pesi.findIndex(p => p.date === dateInput);
    if(existingIdx > -1) { appState.pesi[existingIdx].value = valInput; }
    else { appState.pesi.push({ date: dateInput, value: valInput }); }
    saveState(); document.getElementById("peso-val").value = ""; renderPeso();
});

window.deleteWeightRecord = function(dateStr) {
    if(confirm("Eliminare?")) { appState.pesi = appState.pesi.filter(p => p.date !== dateStr); saveState(); renderPeso(); }
};

function calculatePrediction() {
    const el = document.getElementById("peso-previsione");
    if(appState.pesi.length < 3) { el.innerText = "Inserisci almeno 3 record."; return; }
    const sorted = [...appState.pesi].sort((a,b) => new Date(a.date) - new Date(b.date));
    const daysDiff = (new Date(sorted[sorted.length-1].date) - new Date(sorted[0].date)) / (1000*60*60*24);
    const weightDiff = sorted[sorted.length-1].value - sorted[0].value;
    if(daysDiff <= 0 || weightDiff === 0) { el.innerText = "Stabile."; return; }
    const rate = weightDiff / daysDiff;
    const remaining = 72.0 - sorted[sorted.length-1].value;
    if((remaining < 0 && rate < 0) || (remaining > 0 && rate > 0)) {
        el.innerText = `Raggiungimento stimato in ~${Math.ceil(remaining / rate)} giorni`;
    } else { el.innerText = "Andamento opposto al target."; }
}

function renderWeightChart() {
    const ctx = document.getElementById('weightChart').getContext('2d');
    const sorted = [...appState.pesi].sort((a,b) => new Date(a.date) - new Date(b.date));
    if(weightChart) weightChart.destroy();
    weightChart = new Chart(ctx, {
        type: 'line',
        data: { labels: sorted.map(p => p.date), datasets: [{ label: 'Peso (kg)', data: sorted.map(p => p.value), borderColor: '#10b981', tension: 0.2 }] },
        options: { responsive: true, maintainAspectRatio: false }
    });
}
renderOggi();