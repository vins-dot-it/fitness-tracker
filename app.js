const baseMeals = {
    ON: [
        { pasto: "Colazione", icona: "🥞", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592, ordine: 1 },
        { pasto: "Spuntino", icona: "🍎", alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, ordine: 2 },
        { pasto: "Pre-workout", icona: "💪", alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, ordine: 3 },
        { pasto: "Spuntino", icona: "🍇", alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, ordine: 5 }
    ],
    OFF: [
        { pasto: "Colazione", icona: "🥞", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563, ordine: 1 },
        { pasto: "Spuntino", icona: "🍎", alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, ordine: 2 },
        { pasto: "Spuntino", icona: "🍇", alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, ordine: 5 },
        { pasto: "Extra", icona: "🥝", alimenti: "Kiwi 150 g", kcal: 92, ordine: 7 }
    ]
};

const variantiON = [
    { id: "on_v1", nome: "1- Riso Pollo / Salmone", pranzo: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 724, cena: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal_c: 591 },
    { id: "on_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g crudo; tacchino 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal_p: 755, cena: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal_c: 643 },
    { id: "on_v3", nome: "3- Pasta Pollo / Merluzzo", pranzo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal_p: 754, cena: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal_c: 660 },
    { id: "on_v4", nome: "4- Riso Tonno / Bresaola", pranzo: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 704, cena: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal_c: 640 },
    { id: "on_v5", nome: "5- Pasta Tonno / Pollo", pranzo: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 701, cena: "Tacchino 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal_c: 633 },
    { id: "on_v6", nome: "6- Riso Ceci Pollo / Pollo", pranzo: "Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 871, cena: "Tacchino 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal_c: 600 },
    { id: "on_v7", nome: "7- Pasta Pollo / Manzo", pranzo: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal_p: 754, cena: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal_c: 556 }
];

const variantiOFF = [
    { id: "off_v1", nome: "1- Pasta Tonno / Tacchino", pranzo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 592, cena: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal_c: 597 },
    { id: "off_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g crudo; tacchino 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal_p: 755, cena: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal_c: 643 },
    { id: "off_v3", nome: "3- Tacchino / Tacchino", pranzo: "Tacchino 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal_p: 525, cena: "Tacchino 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal_c: 525 },
    { id: "off_v4", nome: "4- Pasta Tonno / Tacchino v2", pranzo: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 592, cena: "Tacchino 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal_c: 545 },
    { id: "off_v5", nome: "5- Riso Ceci Pollo / Merluzzo", pranzo: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal_p: 694, cena: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 560 },
    { id: "off_v6", nome: "6- Riso Pollo / Bresaola", pranzo: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal_p: 631, cena: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 510 }
];

const GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];

let appState = JSON.parse(localStorage.getItem("fitTrackerStateV2_Azzurro")) || {
    struttura: { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" },
    sceltePasti: { "lunedì": "on_v1", "martedì": "off_v1", "mercoledì": "on_v2", "giovedì": "off_v3", "venerdì": "on_v7" },
    pesi: []
};

let currentOggiIndex = 0;
let weightChart = null;

function saveState() { localStorage.setItem("fitTrackerStateV2_Azzurro", JSON.stringify(appState)); }

document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const targetBtn = e.currentTarget;
        document.querySelectorAll(".nav-btn").forEach(b => {
            b.classList.remove("text-sky-600", "border-t-4", "border-sky-600", "font-black");
            b.classList.add("text-slate-500", "font-bold");
        });
        targetBtn.classList.add("text-sky-600", "border-t-4", "border-sky-600", "font-black");
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        document.getElementById(targetBtn.dataset.target).classList.add("active");
        
        if(targetBtn.dataset.target === "tab-oggi") renderOggi();
        if(targetBtn.dataset.target === "tab-struttura") renderStruttura();
        if(targetBtn.dataset.target === "tab-pasti") renderScegliPasti();
        if(targetBtn.dataset.target === "tab-peso") renderPeso();
    });
});

function renderOggi() {
    const giorno = GIORNI[currentOggiIndex];
    document.getElementById("current-day-title").innerText = giorno;
    const type = appState.struttura[giorno];
    
    const badge = document.getElementById("oggi-day-type");
    badge.innerText = type === "ON" ? "⚡ GIORNO DI ALLENAMENTO (ON)" : "💤 GIORNO DI RIPOSO (OFF)";
    badge.className = `text-xs font-black mt-2 inline-block px-3 py-1 rounded-full uppercase tracking-wider ${type === 'ON' ? 'bg-sky-100 text-sky-800' : 'bg-slate-100 text-slate-700'}`;

    const container = document.getElementById("oggi-meals-container");
    container.innerHTML = "";
    let totalKcal = 0;

    let cronoList = [...baseMeals[type]];
    const varianteId = appState.sceltePasti[giorno];
    const variante = (type === "ON" ? variantiON : variantiOFF).find(v => v.id === varianteId);

    if(variante) {
        cronoList.push({ pasto: "Pranzo", icona: "🍽️", alimenti: variante.pranzo, kcal: variante.kcal_p, ordine: 4 });
        cronoList.push({ pasto: "Cena", icona: "🌙", alimenti: variante.cena, kcal: variante.kcal_c, ordine: 6 });
    }

    // Ordina i pasti rigidamente per orario/cronologia
    cronoList.sort((a, b) => a.ordine - b.ordine);

    cronoList.forEach(m => {
        createMealCard(container, m.pasto, m.icona, m.alimenti, m.kcal);
        totalKcal += m.kcal;
    });

    document.getElementById("oggi-total-kcal").innerText = totalKcal;
}

function createMealCard(container, name, icona, food, kcal) {
    const card = document.createElement("div");
    card.className = "bg-white p-4 rounded-2xl border border-slate-100 shadow-xs flex flex-col space-y-1 hover:border-sky-200 transition";
    card.innerHTML = `
        <div class="flex justify-between items-center border-b border-slate-100 pb-1.5">
            <span class="font-extrabold text-slate-900 flex items-center gap-1.5"><span>${icona}</span> ${name}</span>
            <span class="text-xs font-black text-sky-700 bg-sky-50/80 px-2 py-0.5 rounded-lg border border-sky-100">${kcal} Kcal</span>
        </div>
        <p class="text-sm text-slate-600 pt-1.5 leading-relaxed font-medium">${food}</p>
    `;
    container.appendChild(card);
}

document.getElementById("prev-day").addEventListener("click", () => { currentOggiIndex = (currentOggiIndex - 1 + GIORNI.length) % GIORNI.length; renderOggi(); });
document.getElementById("next-day").addEventListener("click", () => { currentOggiIndex = (currentOggiIndex + 1) % GIORNI.length; renderOggi(); });

function renderStruttura() {
    const container = document.getElementById("struttura-giorni-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const row = document.createElement("div");
        row.className = "flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-xl";
        row.innerHTML = `<span class="font-bold capitalize text-slate-800">${g}</span><select id="select-struct-${g}" class="bg-white border border-slate-300 rounded-lg p-1.5 font-extrabold text-sm text-sky-700"><option value="ON" ${appState.struttura[g] === 'ON' ? 'selected' : ''}>⚡ ON</option><option value="OFF" ${appState.struttura[g] === 'OFF' ? 'selected' : ''}>💤 OFF</option></select>`;
        container.appendChild(row);
    });
}

document.getElementById("btn-plan-3").addEventListener("click", () => {
    appState.struttura = { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" };
    GIORNI.forEach(g => { appState.sceltePasti[g] = appState.struttura[g] === "ON" ? "on_v1" : "off_v1"; });
    saveState(); renderStruttura(); alert("Piano 3 Allenamenti Caricato!");
});

document.getElementById("btn-plan-4").addEventListener("click", () => {
    appState.struttura = { "lunedì": "ON", "martedì": "ON", "mercoledì": "OFF", "giovedì": "ON", "venerdì": "ON" };
    GIORNI.forEach(g => { appState.sceltePasti[g] = appState.struttura[g] === "ON" ? "on_v1" : "off_v1"; });
    saveState(); renderStruttura(); alert("Piano 4 Allenamenti Caricato!");
});

document.getElementById("save-struttura").addEventListener("click", () => {
    GIORNI.forEach(g => {
        const val = document.getElementById(`select-struct-${g}`).value;
        if(appState.struttura[g] !== val) {
            appState.struttura[g] = val;
            appState.sceltePasti[g] = val === "ON" ? "on_v1" : "off_v1";
        }
    });
    saveState(); alert("Struttura salvata correttamente!");
});

function renderScegliPasti() {
    const container = document.getElementById("scegli-pasti-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const type = appState.struttura[g];
        const variantiDisponibili = type === "ON" ? variantiON : variantiOFF;
        const currentSelection = appState.sceltePasti[g];
        const block = document.createElement("div");
        block.className = "p-4 border border-slate-200 rounded-2xl space-y-3 bg-slate-50/50";
        
        let optionsHtml = "";
        variantiDisponibili.forEach(v => { optionsHtml += `<option value="${v.id}" ${v.id === currentSelection ? 'selected' : ''}>${v.nome}</option>`; });

        block.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="font-extrabold capitalize text-slate-900 text-lg flex items-center gap-2">
                    ${g} 
                    <span class="text-xs px-2.5 py-0.5 rounded-full font-black ${type==='ON'?'bg-sky-100 text-sky-800':'bg-slate-200 text-slate-700'}">${type}</span>
                </span>
            </div>
            <select id="select-pasto-${g}" class="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-bold text-sm text-slate-800 shadow-xs">${optionsHtml}</select>
            <div id="preview-${g}" class="bg-white p-3 rounded-xl border border-slate-150 text-sm space-y-2 shadow-2xs"></div>
        `;
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
    const v = variantiList.find(item => item.id === varianteId) || variantiList;
    if(v) {
        previewDiv.innerHTML = `
            <div>
                <p class="font-extrabold text-sky-700 flex justify-between text-xs"><span>🍽️ Pranzo:</span> <span class="bg-sky-50 px-2 rounded-md font-black">${v.kcal_p} Kcal</span></p>
                <p class="text-slate-600 text-xs mt-1 font-medium leading-relaxed">${v.pranzo}</p>
            </div>
            <div class="border-t border-slate-100 pt-2 mt-2">
                <p class="font-extrabold text-sky-700 flex justify-between text-xs"><span>🌙 Cena:</span> <span class="bg-sky-50 px-2 rounded-md font-black">${v.kcal_c} Kcal</span></p>
                <p class="text-slate-600 text-xs mt-1 font-medium leading-relaxed">${v.cena}</p>
            </div>
        `;
    }
}

function renderPeso() {
    document.getElementById("peso-date").value = new Date().toISOString().split('T');
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
        item.className = "flex justify-between items-center py-2 border-b border-slate-50 last:border-0";
        item.innerHTML = `<span class="font-semibold text-slate-700">${p.date}</span><span class="font-bold text-slate-900">${p.value} kg</span><button onclick="deleteWeightRecord('${p.date}')" class="text-red-500 text-xs font-black hover:underline cursor-pointer">Elimina</button>`;
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
    if(confirm("Vuoi davvero eliminare questa misura?")) { appState.pesi = appState.pesi.filter(p => p.date !== dateStr); saveState(); renderPeso(); }
};

function calculatePrediction() {
    const el = document.getElementById("peso-previsione");
    if(appState.pesi.length < 3) { el.innerText = "Inserisci almeno 3 misure storiche."; return; }
    const sorted = [...appState.pesi].sort((a,b) => new Date(a.date) - new Date(b.date));
    const daysDiff = (new Date(sorted[sorted.length-1].date) - new Date(sorted.date)) / (1000*60*60*24);
    const weightDiff = sorted[sorted.length-1].value - sorted.value;
    if(daysDiff <= 0 || weightDiff === 0) { el.innerText = "Peso stabile nel tempo."; return; }
    const rate = weightDiff / daysDiff;
    const remaining = 72.0 - sorted[sorted.length-1].value;
    if((remaining < 0 && rate < 0) || (remaining > 0 && rate > 0)) {
        el.innerText = `🎯 Target stimato tra circa ~${Math.ceil(remaining / rate)} giorni`;
    } else { el.innerText = "L'andamento attuale si allontana dal target (72 kg)."; }
}

function renderWeightChart() {
    const ctx = document.getElementById('weightChart').getContext('2d');
    const sorted = [...appState.pesi].sort((a,b) => new Date(a.date) - new Date(b.date));
    if(weightChart) weightChart.destroy();
    weightChart = new Chart(ctx, {
        type: 'line',
        data: { 
            labels: sorted.map(p => p.date), 
            datasets: [{ 
                label: 'Peso (kg)', 
                data: sorted.map(p => p.value), 
                borderColor: '#0284c7', 
                backgroundColor: 'rgba(2, 132, 199, 0.05)',
                fill: true,
                tension: 0.3,
                borderWidth: 3
            }] 
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
}
renderOggi();