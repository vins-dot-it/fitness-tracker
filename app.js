// Database Alimenti e Piani caricati dai dati utente
const PIANO_ON_BASE = [{"ora": "07:00", "pasto": "Colazione", "alimenti": "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", "kcal": 592, "pro": 38.8}, {"ora": "10:00", "pasto": "Spuntino", "alimenti": "Skyr 170 g; mandorle 20 g", "kcal": 223, "pro": 22.2}, {"ora": "12:20", "pasto": "Pre-workout", "alimenti": "Pane integrale 50 g; banana 120 g", "kcal": 232, "pro": 5.8}, {"ora": "14:30", "pasto": "Pranzo", "alimenti": "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", "kcal": 724, "pro": 52.0}, {"ora": "17:30", "pasto": "Spuntino", "alimenti": "Fiocchi di latte 150 g; mela 180 g", "kcal": 241, "pro": 18.5}, {"ora": "19:30", "pasto": "Cena", "alimenti": "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", "kcal": 591, "pro": 37.0}];
const PIANO_OFF_BASE = [{"ora": "07:00", "pasto": "Colazione", "alimenti": "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", "kcal": 563, "pro": 37.5}, {"ora": "10:00", "pasto": "Spuntino", "alimenti": "Yogurt greco 0% 170 g; mandorle 20 g", "kcal": 216, "pro": 21.2}, {"ora": "13:00", "pasto": "Pranzo", "alimenti": "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", "kcal": 592, "pro": 43.0}, {"ora": "17:30", "pasto": "Spuntino", "alimenti": "Fiocchi di latte 150 g; pera 180 g", "kcal": 250, "pro": 18.7}, {"ora": "19:30", "pasto": "Cena", "alimenti": "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", "kcal": 597, "pro": 56.0}, {"ora": "21:30", "pasto": "Extra", "alimenti": "Kiwi 150 g", "kcal": 92, "pro": 1.7}];
const ALTERNATIVE_ON = [{"id": 1, "nome": "Pollo e salmone", "pranzo": "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", "kcal_p": 724, "cena": "Salmone 150 g; patate 250 g; verdure 300 g; olio EVO 5 g", "kcal_c": 599}, {"id": 2, "nome": "Tacchino e pesce bianco", "pranzo": "Pasta 110 g cruda; tacchino 180 g crudo; passata 150 g; verdure 200 g; olio EVO 10 g", "kcal_p": 735, "cena": "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", "kcal_c": 660}, {"id": 3, "nome": "Tonno e bresaola", "pranzo": "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", "kcal_p": 704, "cena": "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", "kcal_c": 640}];
const ALTERNATIVE_OFF = [{"id": 1, "nome": "Tonno e tacchino", "pranzo": "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", "kcal_p": 592, "cena": "Tacchino 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", "kcal_c": 545}, {"id": 2, "nome": "Ceci, pollo e pesce bianco", "pranzo": "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", "kcal_p": 694, "cena": "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", "kcal_c": 560}, {"id": 3, "nome": "Pollo e bresaola", "pranzo": "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", "kcal_p": 631, "cena": "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", "kcal_c": 510}];

const GIORNI_SETTIMANA = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

// Stato dell'applicazione salvato in localStorage
let appState = {
    tipoPiano: "3", // "3" o "4"
    giorni: {
        "Lunedì": "ON", "Martedì": "OFF", "Mercoledì": "ON", "Giovedì": "OFF", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF"
    },
    scelteAlternative: {
        "Lunedì": 0, "Martedì": 0, "Mercoledì": 0, "Giovedì": 0, "Venerdì": 0, "Sabato": 0, "Domenica": 0
    },
    pesi: [] // array di oggetti { data: "YYYY-MM-DD", valore: 75.2 }
};

// Carica stato esistente
if(localStorage.getItem('fittracker_state')) {
    appState = JSON.parse(localStorage.getItem('fittracker_state'));
}

let weightChartInstance = null;

// Inizializzazione al caricamento
document.addEventListener("DOMContentLoaded", () => {
    // Imposta data odierna nel form del peso
    document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];
    
    updateCurrentDayBadge();
    renderOggi();
    renderPianificaSetup();
    renderPianoSettimanaleTab();
    renderPesoTab();
});

function updateCurrentDayBadge() {
    const d = new Date();
    let dayIdx = d.getDay() - 1; // Lun=0, Dom=6
    if(dayIdx < 0) dayIdx = 6;
    const nomeGiorno = GIORNI_SETTIMANA[dayIdx];
    document.getElementById('current-day-badge').innerText = "Oggi è " + nomeGiorno;
}

function saveToLocalStorage() {
    localStorage.setItem('fittracker_state', JSON.stringify(appState));
}

// Navigazione sezioni
function switchSection(secId) {
    document.querySelectorAll('.app-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('sec-' + secId).classList.remove('hidden');
    
    document.querySelectorAll('nav button').forEach(b => b.classList.remove('nav-active'));
    document.getElementById('nav-' + secId).classList.add('nav-active');

    if(secId === 'oggi') renderOggi();
    if(secId === 'piano-sett') renderPianoSettimanaleTab();
    if(secId === 'peso') {
        renderPesoTab();
        setTimeout(initOrUpdateChart, 100);
    }
}

// LOGICA SEZIONE 1: OGGI
function renderOggi() {
    const d = new Date();
    let dayIdx = d.getDay() - 1;
    if(dayIdx < 0) dayIdx = 6;
    const nomeGiorno = GIORNI_SETTIMANA[dayIdx];
    
    const tipoGiorno = appState.giorni[nomeGiorno] || "OFF";
    const badge = document.getElementById('oggi-status-tipo');
    badge.innerText = "Giorno " + tipoGiorno;
    if(tipoGiorno === "ON") {
        badge.className = "text-xs uppercase px-2 py-0.5 rounded font-bold bg-blue-950 text-blue-400 border border-blue-800";
    } else {
        badge.className = "text-xs uppercase px-2 py-0.5 rounded font-bold bg-slate-700 text-slate-300";
    }

    // Costruisci i pasti per la giornata partendo dalla base
    let pastiBase = tipoGiorno === "ON" ? JSON.parse(JSON.stringify(PIANO_ON_BASE)) : JSON.parse(JSON.stringify(PIANO_OFF_BASE));
    const varianteSceltaIdx = appState.scelteAlternative[nomeGiorno] || 0; // 0 significa base, 1,2,3 varianti abbinate

    let totaleKcal = 0;
    let totalePro = 0;
    const container = document.getElementById('oggi-pasti-list');
    container.innerHTML = "";

    pastiBase.forEach(p => {
        // Sostituisci se è Pranzo o Cena e se è attiva una variante abbinata riga
        if(varianteSceltaIdx > 0) {
            const listAlts = tipoGiorno === "ON" ? ALTERNATIVE_ON : ALTERNATIVE_OFF;
            const matchAlt = listAlts.find(a => a.id === varianteSceltaIdx);
            if(matchAlt) {
                if(p.pasto.toLowerCase() === 'pranzo') {
                    p.alimenti = matchAlt.pranzo;
                    p.kcal = matchAlt.kcal_p;
                } else if(p.pasto.toLowerCase() === 'cena') {
                    p.alimenti = matchAlt.cena;
                    p.kcal = matchAlt.kcal_c;
                }
            }
        }
        totaleKcal += p.kcal;
        if(p.pro) totalePro += p.pro;

        container.innerHTML += `
            <div class="bg-slate-800/80 border border-slate-700/60 rounded-xl p-3.5 flex flex-col justify-between space-y-1.5 shadow-sm">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-blue-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">${p.ora}</span>
                    <span class="text-xs font-extrabold text-slate-200 uppercase tracking-wide">${p.pasto}</span>
                    <span class="text-xs font-black text-blue-300">${p.kcal} kcal</span>
                </div>
                <p class="text-xs text-slate-300 font-normal leading-relaxed">${p.alimenti}</p>
            </div>
        `;
    });

    document.getElementById('oggi-totale-kcal').innerText = totaleKcal;
    document.getElementById('oggi-totale-pro').innerText = totalePro > 0 ? Math.round(totalePro) + "g" : "-";
}

// LOGICA SEZIONE 2: PIANIFICA SETTIMANA
let temporaryDaysSetup = {};

function renderPianificaSetup() {
    document.getElementById('plan-template-select').value = appState.tipoPiano;
    temporaryDaysSetup = { ...appState.giorni };
    buildDaysToggleList();
    document.getElementById('setup-giorni-container').classList.remove('hidden');
}

function generaSettimana() {
    const t = document.getElementById('plan-template-select').value;
    appState.tipoPiano = t;
    if(t === "3") {
        temporaryDaysSetup = { "Lunedì": "ON", "Martedì": "OFF", "Mercoledì": "ON", "Giovedì": "OFF", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF" };
    } else {
        temporaryDaysSetup = { "Lunedì": "ON", "Martedì": "ON", "Mercoledì": "OFF", "Giovedì": "ON", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF" };
    }
    buildDaysToggleList();
    document.getElementById('setup-giorni-container').classList.remove('hidden');
}

function buildDaysToggleList() {
    const container = document.getElementById('giorni-toggle-list');
    container.innerHTML = "";
    GIORNI_SETTIMANA.forEach(g => {
        const isCurOn = temporaryDaysSetup[g] === "ON";
        container.innerHTML += `
            <div class="flex justify-between items-center bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                <span class="text-xs font-bold text-slate-300">${g}</span>
                <button onclick="toggleDaySetup('${g}')" class="text-xs font-bold px-4 py-1.5 rounded-lg border transition-all ${isCurOn ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400'}">
                    ${temporaryDaysSetup[g]}
                </button>
            </div>
        `;
    });
}

function toggleDaySetup(giorno) {
    temporaryDaysSetup[giorno] = temporaryDaysSetup[giorno] === "ON" ? "OFF" : "ON";
    buildDaysToggleList();
}

function salvaSettimana() {
    appState.giorni = { ...temporaryDaysSetup };
    // reset delle alternative per evitare disallineamenti di kcal vecchie
    GIORNI_SETTIMANA.forEach(g => { appState.scelteAlternative[g] = 0; });
    saveToLocalStorage();
    alert("Piano settimanale salvato ed attivato correttamente!");
    switchSection('oggi');
}

// LOGICA SEZIONE 3: PIANO SETTIMANALE (ALTERNATIVE)
function renderPianoSettimanaleTab() {
    const container = document.getElementById('piano-settimanale-giorni');
    container.innerHTML = "";

    GIORNI_SETTIMANA.forEach(g => {
        const tipoGiorno = appState.giorni[g] || "OFF";
        const scelteId = appState.scelteAlternative[g] || 0;
        const altsDisponibili = tipoGiorno === "ON" ? ALTERNATIVE_ON : ALTERNATIVE_OFF;

        let optionsHtml = `<option value="0" ${scelteId === 0 ? 'selected' : ''}>Menu Base Predefinito</option>`;
        altsDisponibili.forEach(a => {
            optionsHtml += `<option value="${a.id}" ${scelteId === a.id ? 'selected' : ''}>${a.nome}</option>`;
        });

        container.innerHTML += `
            <div class="bg-slate-800 rounded-xl p-4 border border-slate-700 flex flex-col space-y-3">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-slate-200">${g} <span class="ml-1 text-[10px] text-blue-400 font-mono">(${tipoGiorno})</span></span>
                    <select onchange="cambiaAlternativa('${g}', this.value)" class="bg-slate-900 border border-slate-700 rounded-lg text-xs p-1.5 text-slate-300 focus:outline-none max-w-[200px]">
                        ${optionsHtml}
                    </select>
                </div>
            </div>
        `;
    });
}

function cambiaAlternativa(giorno, valore) {
    appState.scelteAlternative[giorno] = parseInt(valore);
    saveToLocalStorage();
}

// LOGICA SEZIONE 4: PESO
function renderPesoTab() {
    // Ordina pesi cronologicamente
    appState.pesi.sort((a,b) => new Date(a.data) - new Date(b.data));
    
    // Storico lista visibile (mostrato al contrario: più recente in alto)
    const listCont = document.getElementById('peso-storico-list');
    listCont.innerHTML = "";
    
    const pesiInversi = [...appState.pesi].reverse();
    pesiInversi.forEach((p, idx) => {
        listCont.innerHTML += `
            <div class="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-xs">
                <span class="font-mono text-slate-400">${p.data}</span>
                <span class="font-bold text-slate-200">${p.valore} kg</span>
                <div class="space-x-1">
                    <button onclick="modificaPesoPrompt('${p.data}', ${p.valore})" class="text-blue-400 hover:text-blue-300 font-semibold px-1">Modifica</button>
                    <button onclick="eliminaPeso('${p.data}')" class="text-rose-400 hover:text-rose-300 font-semibold px-1">Elimina</button>
                </div>
            </div>
        `;
    });

    // Calcolo Media 7 Giorni (ultimi 7 record o record degli ultimi 7 giorni)
    // Prendiamo la media matematica degli ultimi 7 inserimenti per semplicità e consistenza di visualizzazione tracker
    if(appState.pesi.length > 0) {
        const ultimiPesi = appState.pesi.slice(-7);
        const sum = ultimiPesi.reduce((acc, curr) => acc + curr.valore, 0);
        const media = (sum / ultimiPesi.length).toFixed(1);
        document.getElementById('peso-media-7d').innerText = media + " kg";
        
        // Previsione raggiungimento target (72 kg)
        calcolaPrevisione(media);
    } else {
        document.getElementById('peso-media-7d').innerText = "-";
        document.getElementById('peso-previsione').innerText = "Inserisci almeno due pesi distanti nel tempo per la stima.";
    }
}

function aggiungiPeso() {
    const val = parseFloat(document.getElementById('peso-val').value);
    const data = document.getElementById('peso-data').value;
    
    if(!val || !data) return alert("Inserisci sia il valore del peso che la data corretta.");

    const existingIdx = appState.pesi.findIndex(p => p.data === data);
    if(existingIdx >= 0) {
        appState.pesi[existingIdx].valore = val;
    } else {
        appState.pesi.push({ data: data, valore: val });
    }
    
    saveToLocalStorage();
    renderPesoTab();
    initOrUpdateChart();
    document.getElementById('peso-val').value = "";
}

function modificaPesoPrompt(data, valCorrente) {
    const nuovoPeso = prompt(`Modifica peso per il ${data}:`, valCorrente);
    if(nuovoPeso !== null) {
        const floatPeso = parseFloat(nuovoPeso);
        if(!isNaN(floatPeso)) {
            const existingIdx = appState.pesi.findIndex(p => p.data === data);
            if(existingIdx >= 0) {
                appState.pesi[existingIdx].valore = floatPeso;
                saveToLocalStorage();
                renderPesoTab();
                initOrUpdateChart();
            }
        }
    }
}

function eliminaPeso(data) {
    if(confirm(`Eliminare il record del peso di data ${data}?`)) {
        appState.pesi = appState.pesi.filter(p => p.data !== data);
        saveToLocalStorage();
        renderPesoTab();
        initOrUpdateChart();
    }
}

function calcolaPrevisione(mediaAttuale) {
    if(appState.pesi.length < 2) {
        document.getElementById('peso-previsione').innerText = "Dati insufficienti per stimare una tendenza.";
        return;
    }
    
    const primo = appState.pesi[0];
    const ultimo = appState.pesi[appState.pesi.length - 1];
    
    const d1 = new Date(primo.data);
    const d2 = new Date(ultimo.data);
    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if(diffDays === 0 || primo.valore === ultimo.valore) {
        document.getElementById('peso-previsione').innerText = "Tendenza stabile o intervallo temporale azzerato.";
        return;
    }

    const deltaPesoTotale = ultimo.valore - primo.valore;
    const perditaGiornaliera = deltaPesoTotale / diffDays; // se negativo sta scendendo
    
    const target = 72.0;
    const pesoDaPerdereOPrendere = target - ultimo.valore;
    
    if((pesoDaPerdereOPrendere < 0 && perditaGiornaliera >= 0) || (pesoDaPerdereOPrendere > 0 && perditaGiornaliera <= 0)) {
        document.getElementById('peso-previsione').innerText = "La traiettoria attuale si sta allontanando o stabilizzando rispetto al target di 72kg.";
    } else {
        const giorniNecessari = Math.ceil(pesoDaPerdereOPrendere / perditaGiornaliera);
        if(giorniNecessari > 0) {
            document.getElementById('peso-previsione').innerText = `Mancano circa ${giorniNecessari} giorni al raggiungimento dell'obiettivo di 72 kg basandoti sul trend storico.`;
        } else {
            document.getElementById('peso-previsione').innerText = "Target già raggiunto o superato in base all'ultimo inserimento!";
        }
    }
}

function initOrUpdateChart() {
    const ctx = document.getElementById('weightChart');
    if(!ctx) return;
    
    const labels = appState.pesi.map(p => p.data);
    const dataValues = appState.pesi.map(p => p.valore);

    if(weightChartInstance) {
        weightChartInstance.data.labels = labels;
        weightChartInstance.data.datasets[0].data = dataValues;
        weightChartInstance.update();
    } else {
        weightChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Andamento Peso (kg)',
                    data: dataValues,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    tension: 0.2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { color: '#94a3b8', font: { size: 10 } } },
                    y: { grid: { color: '#334155' }, ticks: { color: '#94a3b8', font: { size: 10 } } }
                }
            }
        });
    }
}
