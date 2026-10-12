// DATABASE RIGIDO PIANO ALIMENTARE (ESTRATTO DAL FILE CSV UTENTE)
const PIANI_BASE = {
    "3": {
        "Lunedì": "ON", "Martedì": "OFF", "Mercoledì": "ON", 
        "Giovedì": "OFF", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF"
    },
    "4": {
        "Lunedì": "ON", "Martedì": "ON", "Mercoledì": "OFF", 
        "Giovedì": "ON", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF"
    }
};

const PASTI_TEMPLATE = {
    "ON": [
        { ora: "07:00", pasto: "Colazione", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592, pro: 38.8 },
        { ora: "10:00", pasto: "Spuntino", alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, pro: 22.2 },
        { ora: "12:20", pasto: "Pre-workout", alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, pro: 5.8 },
        { ora: "14:30", pasto: "Pranzo", alimenti: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, pro: 52.0, isAlternative: true },
        { ora: "17:30", pasto: "Spuntino", alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, pro: 18.5 },
        { ora: "19:30", pasto: "Cena", alimenti: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591, pro: 37.0, isAlternative: true }
    ],
    "OFF": [
        { ora: "07:00", pasto: "Colazione", alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563, pro: 37.5 },
        { ora: "10:00", pasto: "Spuntino", alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, pro: 21.2 },
        { ora: "13:00", pasto: "Pranzo", alimenti: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, pro: 43.0, isAlternative: true },
        { ora: "17:30", pasto: "Spuntino", alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, pro: 18.7 },
        { ora: "19:30", pasto: "Cena", alimenti: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597, pro: 56.0, isAlternative: true },
        { ora: "21:30", pasto: "Extra", alimenti: "Kiwi 150 g", kcal: 92, pro: 1.7 }
    ]
};

const ALTERNATIVE_ABBINATE = {
    "ON": [
        { id: 1, nome: "Var 1 - Pollo e Salmone", pranzo: { alt: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, pro: 52 }, cena: { alt: "Salmone 150 g; patate 250 g; verdure 300 g; olio EVO 5 g", kcal: 599, pro: 37 } },
        { id: 2, nome: "Var 2 - Tacchino e Pesce Bianco", pranzo: { alt: "Pasta 110 g cruda; tacchino 180 g crudo; passata 150 g; verdure 200 g; olio EVO 10 g", kcal: 735, pro: 56 }, cena: { alt: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal: 660, pro: 54 } },
        { id: 3, nome: "Var 3 - Tonno e Bresaola", pranzo: { alt: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 704, pro: 47 }, cena: { alt: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto", kcal: 640, pro: 43 } }
    ],
    "OFF": [
        { id: 1, nome: "Var 1 - Tonno e Tacchino", pranzo: { alt: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, pro: 43 }, cena: { alt: "Tacchino 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal: 545, pro: 56 } },
        { id: 2, nome: "Var 2 - Ceci, Pollo e Pesce", pranzo: { alt: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 694, pro: 45 }, cena: { alt: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 560, pro: 50 } },
        { id: 3, nome: "Var 3 - Pollo e Bresaola", pranzo: { alt: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal: 631, pro: 43 }, cena: { alt: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 510, pro: 42 } }
    ]
};

const GIORNI_SETTIMANA = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

// STATO DELLO STORAGE LOCALE
let statoApp = JSON.parse(localStorage.getItem('fitness_tracker_stato')) || {
    configGiorni: { ...PIANI_BASE["3"] },
    scelteAlternative: { "Lunedì": 1, "Martedì": 1, "Mercoledì": 1, "Giovedì": 1, "Venerdì": 1, "Sabato": 1, "Domenica": 1 },
    registroPeso: []
};

function salvaStato() {
    localStorage.setItem('fitness_tracker_stato', JSON.stringify(statoApp));
}

// INIZIALIZZAZIONE NAVIGAZIONE TAB
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.app-section').forEach(sec => sec.classList.add('hidden'));
        document.querySelectorAll('.nav-btn').forEach(nb => nb.classList.remove('text-blue-600', 'font-semibold'));
        document.querySelectorAll('.nav-btn').forEach(nb => nb.classList.add('text-gray-400'));
        
        const target = btn.getAttribute('data-target');
        document.getElementById(target).classList.remove('hidden');
        btn.classList.add('text-blue-600', 'font-semibold');
        btn.classList.remove('text-gray-400');
        
        if(target === 'section-oggi') renderingOggi();
        if(target === 'section-pianifica') renderingPianifica();
        if(target === 'section-settimana') renderingSettimana();
        if(target === 'section-peso') renderingPeso();
    });
});

// LOGICA SEZIONE: OGGI
function getGiornoCorrente() {
    const d = new Date();
    let index = d.getDay() - 1; // Lunedì = 0
    if (index === -1) index = 6; // Domenica = 6
    return GIORNI_SETTIMANA[index];
}

function renderingOggi() {
    const giorno = getGiornoCorrente();
    document.getElementById('oggi-giorno-nome').innerText = giorno;
    
    const tipo = statoApp.configGiorni[giorno] || "OFF";
    const badge = document.getElementById('oggi-badge-tipo');
    badge.innerText = tipo;
    if(tipo === 'ON') {
        badge.className = "px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800";
    } else {
        badge.className = "px-2.5 py-1 text-xs font-bold rounded-full bg-gray-200 text-gray-700";
    }

    const templatePasti = JSON.parse(JSON.stringify(PASTI_TEMPLATE[tipo]));
    const varSceltaId = statoApp.scelteAlternative[giorno] || 1;
    const variantiDisponibili = ALTERNATIVE_ABBINATE[tipo];
    const varianteApplicata = variantiDisponibili.find(v => v.id === varSceltaId) || variantiDisponibili[0];

    let totalKcal = 0;
    let totalPro = 0;
    const container = document.getElementById('oggi-lista-pasti');
    container.innerHTML = "";

    templatePasti.forEach(pasto => {
        if(pasto.isAlternative) {
            if(pasto.pasto.toLowerCase() === 'pranzo') {
                pasto.alimenti = varianteApplicata.pranzo.alt;
                pasto.kcal = varianteApplicata.pranzo.kcal;
                pasto.pro = varianteApplicata.pranzo.pro;
            } else if(pasto.pasto.toLowerCase() === 'cena') {
                pasto.alimenti = varianteApplicata.cena.alt;
                pasto.kcal = varianteApplicata.cena.kcal;
                pasto.pro = varianteApplicata.cena.pro;
            }
        }
        totalKcal += pasto.kcal;
        totalPro += pasto.pro;

        container.innerHTML += `
            <div class="bg-white p-3 rounded-xl border border-gray-100 shadow-2xs flex justify-between items-start gap-3">
                <div class="space-y-0.5">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-gray-400">${pasto.ora}</span>
                        <h4 class="text-sm font-bold text-gray-800">${pasto.pasto}</h4>
                    </div>
                    <p class="text-xs text-gray-600 leading-relaxed">${pasto.alimenti}</p>
                </div>
                <div class="text-right whitespace-nowrap">
                    <span class="text-xs font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">${pasto.kcal} kcal</span>
                    <p class="text-[10px] text-gray-400 mt-1">${pasto.pro}g Pro</p>
                </div>
            </div>
        `;
    });

    document.getElementById('oggi-total-kcal').innerText = totalKcal;
    document.getElementById('oggi-total-proteine').innerText = totalPro.toFixed(1);
}

// LOGICA SEZIONE: PIANIFICA SETTIMANA
function renderingPianifica() {
    const container = document.getElementById('lista-giorni-config');
    container.innerHTML = "";
    document.getElementById('config-giorni-container').classList.remove('hidden');

    GIORNI_SETTIMANA.forEach(giorno => {
        const attuale = statoApp.configGiorni[giorno] || "OFF";
        container.innerHTML += `
            <div class="flex justify-between items-center py-1 border-b border-gray-50 last:border-0">
                <span class="font-medium text-sm text-gray-800">${giorno}</span>
                <div class="inline-flex rounded-md shadow-2xs" role="group">
                    <button type="button" onclick="setGiornoTipo('${giorno}', 'ON')" class="px-3 py-1 text-xs font-bold rounded-l-lg transition ${attuale === 'ON' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">ON</button>
                    <button type="button" onclick="setGiornoTipo('${giorno}', 'OFF')" class="px-3 py-1 text-xs font-bold rounded-r-lg transition ${attuale === 'OFF' ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">OFF</button>
                </div>
            </div>
        `;
    });
}

window.setGiornoTipo = function(giorno, tipo) {
    statoApp.configGiorni[giorno] = tipo;
    renderingPianifica();
};

document.getElementById('btn-genera-settimana').addEventListener('click', () => {
    const modello = document.getElementById('select-piano-base').value;
    statoApp.configGiorni = { ...PIANI_BASE[modello] };
    renderingPianifica();
    alert("Settimana generata correttamente in base al modello scelto!");
});

document.getElementById('btn-salva-config').addEventListener('click', () => {
    salvaStato();
    alert("Configurazione settimanale salvata con successo!");
});

// LOGICA SEZIONE: MENU SETTIMANALE & ALTERNATIVE BLOCCHETTO PRANZO/CENA
function renderingSettimana() {
    const container = document.getElementById('scelte-alternative-container');
    container.innerHTML = "";

    GIORNI_SETTIMANA.forEach(giorno => {
        const tipo = statoApp.configGiorni[giorno] || "OFF";
        const varSelezionata = statoApp.scelteAlternative[giorno] || 1;
        const alternativeDisponibili = ALTERNATIVE_ABBINATE[tipo];

        let selectOptions = "";
        alternativeDisponibili.forEach(alt => {
            selectOptions += `<option value="${alt.id}" ${alt.id === varSelezionata ? 'selected' : ''}>${alt.nome} (${alt.pranzo.kcal + alt.cena.kcal} kcal tot)</option>`;
        });

        const activeVar = alternativeDisponibili.find(v => v.id === varSelezionata) || alternativeDisponibili[0];

        container.innerHTML += `
            <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-xs space-y-3">
                <div class="flex justify-between items-center">
                    <h3 class="font-bold text-gray-900">${giorno} <span class="text-xs font-normal text-gray-400">(${tipo})</span></h3>
                    <select onchange="cambiaAlternativa('${giorno}', this.value)" class="bg-gray-50 border border-gray-200 text-xs rounded-lg p-1.5 text-gray-800 focus:ring-blue-500">
                        ${selectOptions}
                    </select>
                </div>
                <div class="grid grid-cols-2 gap-2 text-xs border-t border-gray-50 pt-2">
                    <div class="bg-gray-50 p-2 rounded">
                        <p class="font-bold text-gray-700 mb-0.5">🥗 Pranzo (${activeVar.pranzo.kcal} kcal):</p>
                        <p class="text-gray-600 text-[11px] leading-tight">${activeVar.pranzo.alt}</p>
                    </div>
                    <div class="bg-gray-50 p-2 rounded">
                        <p class="font-bold text-gray-700 mb-0.5">🥩 Cena (${activeVar.cena.kcal} kcal):</p>
                        <p class="text-gray-600 text-[11px] leading-tight">${activeVar.cena.alt}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

window.cambiaAlternativa = function(giorno, valoreId) {
    statoApp.scelteAlternative[giorno] = parseInt(valoreId);
    salvaStato();
    renderingSettimana();
};

// LOGICA SEZIONE: ANALISI AVANZATA PESO
let pesoChartInstance = null;

function renderingPeso() {
    // Ordina record per data decrescente per la tabella
    statoApp.registroPeso.sort((a, b) => new Date(b.data) - new Date(a.data));
    
    const logContainer = document.getElementById('lista-log-peso');
    logContainer.innerHTML = "";
    
    if(statoApp.registroPeso.length === 0) {
        logContainer.innerHTML = `<p class="p-3 text-xs text-gray-400 text-center">Nessun peso registrato.</p>`;
    } else {
        statoApp.registroPeso.forEach(item => {
            logContainer.innerHTML += `
                <div class="flex justify-between items-center p-2.5 hover:bg-gray-50 cursor-pointer" onclick="caricaRecordPeso('${item.data}', ${item.valore})">
                    <span class="font-medium">${formattaData(item.data)}</span>
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-gray-900">${item.valore} kg</span>
                        <span class="text-gray-300 text-xs">✏️</span>
                    </div>
                </div>
            `;
        });
    }

    calcolaMetrichePeso();
    disegnaGraficoPeso();
}

function formattaData(isoString) {
    const parti = isoString.split('-');
    if(parti.length === 3) return `${parti[2]}/${parti[1]}/${parti[0]}`;
    return isoString;
}

window.caricaRecordPeso = function(data, valore) {
    document.getElementById('peso-data').value = data;
    document.getElementById('peso-valore').value = valore;
    document.getElementById('btn-elimina-peso').classList.remove('hidden');
};

document.getElementById('btn-salva-peso').addEventListener('click', () => {
    const dataInput = document.getElementById('peso-data').value;
    const valoreInput = parseFloat(document.getElementById('peso-valore').value);

    if(!dataInput || isNaN(valoreInput)) {
        alert("Inserisci una data valida e un valore numerico per il peso!");
        return;
    }

    // Verifica se esiste già
    const index = statoApp.registroPeso.findIndex(p => p.data === dataInput);
    if(index > -1) {
        statoApp.registroPeso[index].valore = valoreInput;
    } else {
        statoApp.registroPeso.push({ data: dataInput, valore: valoreInput });
    }

    salvaStato();
    resetFormPeso();
    renderingPeso();
});

document.getElementById('btn-elimina-peso').addEventListener('click', () => {
    const dataInput = document.getElementById('peso-data').value;
    if(!dataInput) return;

    statoApp.registroPeso = statoApp.registroPeso.filter(p => p.data !== dataInput);
    salvaStato();
    resetFormPeso();
    renderingPeso();
});

function resetFormPeso() {
    document.getElementById('peso-data').value = "";
    document.getElementById('peso-valore').value = "";
    document.getElementById('btn-elimina-peso').classList.add('hidden');
}

function calcolaMetrichePeso() {
    if(statoApp.registroPeso.length === 0) {
        document.getElementById('peso-media-7d').innerText = "-";
        document.getElementById('peso-previsione').innerText = "Inserisci almeno un dato per calcolare le stime.";
        return;
    }

    // Ordina cronologicamente crescente
    const crono = [...statoApp.registroPeso].sort((a,b) => new Date(a.data) - new Date(b.data));
    
    // Media ultimi 7 inserimenti
    const ultimi7 = crono.slice(-7);
    const somma = ultimi7.reduce((acc, curr) => acc + curr.valore, 0);
    const media = somma / ultimi7.length;
    document.getElementById('peso-media-7d').innerText = media.toFixed(1);

    // Stima Target 72kg
    const target = 72.0;
    if(crono.length >= 2) {
        const primo = crono[0];
        const ultimo = crono[crono.length - 1];
        const millisecondi = new Date(ultimo.data) - new Date(primo.data);
        const giorni = millisecondi / (1000 * 60 * 60 * 24);
        const deltaPeso = ultimo.valore - primo.valore;

        if(giorni > 0 && deltaPeso !== 0) {
            const perditaGiornaliera = deltaPeso / giorni; // kg al giorno
            const pesoDaPerdere = target - ultimo.valore;
            const giorniMancanti = pesoDaPerdere / perditaGiornaliera;

            if(giorniMancanti > 0 && giorniMancanti < 365) {
                const dataStimata = new Date();
                dataStimata.setDate(dataStimata.getDate() + Math.ceil(giorniMancanti));
                document.getElementById('peso-previsione').innerText = `Raggiungimento stimato il ${dataStimata.toLocaleDateString('it-IT')} (~${Math.ceil(giorniMancanti)} giorni).`;
            } else if (ultimo.valore <= target) {
                document.getElementById('peso-previsione').innerText = "Complimenti! Hai raggiunto o superato il tuo obiettivo di 72 kg.";
            } else {
                document.getElementById('peso-previsione').innerText = "Andamento attuale stabile o inverso rispetto al target. Continua a monitorare.";
            }
        } else {
            document.getElementById('peso-previsione').innerText = "Dati insufficienti o lasso di tempo troppo breve per stimare il trend.";
        }
    } else {
        document.getElementById('peso-previsione').innerText = "Inserisci misurazioni in più giorni differenti per sbloccare la previsione.";
    }
}

function disegnaGraficoPeso() {
    const ctx = document.getElementById('chart-peso').getContext('2d');
    
    if(pesoChartInstance) {
        pesoChartInstance.destroy();
    }

    const crono = [...statoApp.registroPeso].sort((a,b) => new Date(a.data) - new Date(b.data)).slice(-10); // ultimi 10 nodi

    const labels = crono.map(item => formattaData(item.data));
    const dati = crono.map(item => item.valore);

    pesoChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peso Corporeo (kg)',
                data: dati,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderWidth: 2,
                tension: 0.2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    grid: { color: '#f3f4f6' },
                    ticks: { font: { size: 10 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { font: { size: 10 } }
                }
            }
        }
    });
}

// LANCE DEFAULTS ON BOOT
renderingOggi();

// REGISTRAZIONE SERVICE WORKER PER PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registrato con successo!', reg))
            .catch(err => console.error('Errore registrazione Service Worker:', err));
    });
}

// GESTIONE TRIGGER PULSANTE INSTALLA PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('pwa-install-btn').classList.remove('hidden');
});

document.getElementById('pwa-install-btn').addEventListener('click', () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Utente ha accettato l\'installazione');
            }
            document.getElementById('pwa-install-btn').classList.add('hidden');
            deferredPrompt = null;
        });
    }
});
