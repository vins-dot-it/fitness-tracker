// COSTANTI GIORNI DELLA SETTIMANA FISSI (LUN-VEN)
const GIORNI = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'];

// DATABASE DEL PIANO ALIMENTARE (ESTRATTO DALL'IMMAGINE E DAL PRECEDENTE DOCUMENTO)
const VARIANTI_PASTI = {
    ON: [
        {
            id: 'on_base_1',
            nome: '1- Riso Pollo / Salmone',
            pranzo: { alimenti: 'Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g', kcal: 724 },
            cena: { alimenti: 'Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g', kcal: 591 }
        },
        {
            id: 'on_base_2',
            nome: '2- Riso Pollo / Merluzzo',
            pranzo: { alimenti: 'Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g', kcal: 755 },
            cena: { alimenti: 'Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g', kcal: 643 }
        },
        {
            id: 'on_base_3',
            nome: '3- Pasta Pollo / Merluzzo',
            pranzo: { alimenti: 'Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g', kcal: 754 },
            cena: { alimenti: 'Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g', kcal: 660 }
        },
        {
            id: 'on_base_4',
            nome: '4- Riso Tonno / Bresaola',
            pranzo: { alimenti: 'Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g', kcal: 704 },
            cena: { alimenti: 'Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio', kcal: 640 }
        },
        {
            id: 'on_base_5',
            nome: '5- Pasta Tonno / Pollo',
            pranzo: { alimenti: 'Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g', kcal: 701 },
            cena: { alimenti: 'pollo 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g', kcal: 633 }
        },
        {
            id: 'on_base_6',
            nome: '6- Riso Ceci Pollo / Pollo',
            pranzo: { alimenti: 'Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g', kcal: 871 },
            cena: { alimenti: 'pollo 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g', kcal: 600 }
        },
        {
            id: 'on_base_7',
            nome: '7- Pasta Pollo / Manzo',
            pranzo: { alimenti: 'Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g', kcal: 754 },
            cena: { alimenti: 'Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g', kcal: 556 }
        }
    ],
    OFF: [
        {
            id: 'off_base_1',
            nome: '1- Pasta Tonno / Pollo',
            pranzo: { alimenti: 'Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g', kcal: 592 },
            cena: { alimenti: 'pollo 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g', kcal: 597 }
        },
        {
            id: 'off_base_2',
            nome: '2- Riso Pollo / Merluzzo',
            pranzo: { alimenti: 'Riso basmati 110 g crudo; pollo 180 g crudo; peperoni 250 g; olio EVO 10 g', kcal: 755 },
            cena: { alimenti: 'Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g', kcal: 643 }
        },
        {
            id: 'off_base_3',
            nome: '3- Riso Ceci Pollo / Pollo',
            pranzo: { alimenti: 'Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g', kcal: 766 },
            cena: { alimenti: 'pollo 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g', kcal: 525 }
        },
        {
            id: 'off_base_4',
            nome: '4- Pasta Tonno / Pollo',
            pranzo: { alimenti: 'Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g', kcal: 592 },
            cena: { alimenti: 'pollo 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g', kcal: 545 }
        },
        {
            id: 'off_base_5',
            nome: '5- Riso Ceci Pollo / Merluzzo',
            pranzo: { alimenti: 'Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g', kcal: 694 },
            cena: { alimenti: 'Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g', kcal: 560 }
        },
        {
            id: 'off_base_6',
            nome: '6- Riso Pollo / Bresaola',
            pranzo: { alimenti: 'Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g', kcal: 631 },
            cena: { alimenti: 'Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g', kcal: 510 }
        }
    ]
};

// ALIMENTI FISSI CHE NON CAMBIANO MAI (COLAZIONE E SPUNTINI)
const PASTI_FISSI = {
    ON: [
        { pasto: 'Colazione', ora: '07:00', alimenti: 'Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g', kcal: 592 },
        { pasto: 'Spuntino', ora: '10:00', alimenti: 'Skyr 170 g; mandorle 20 g', kcal: 223 },
        { pasto: 'Pre-workout', ora: '12:20', alimenti: 'Pane integrale 50 g; banana 120 g', kcal: 232 },
        { pasto: 'Spuntino', ora: '17:30', alimenti: 'Fiocchi di latte 150 g; mela 180 g', kcal: 241 }
    ],
    OFF: [
        { pasto: 'Colazione', ora: '07:00', alimenti: 'Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g', kcal: 563 },
        { pasto: 'Spuntino', ora: '10:00', alimenti: 'Yogurt greco 0% 170 g; mandorle 20 g', kcal: 216 },
        { pasto: 'Spuntino', ora: '17:30', alimenti: 'Fiocchi di latte 150 g; pera 180 g', kcal: 250 },
        { pasto: 'Extra', ora: '21:30', alimenti: 'Kiwi 150 g', kcal: 92 }
    ]
};

// STATO DELLO STORAGE LOCALE
let statoApp = JSON.parse(localStorage.getItem('fitness_tracker_stato')) || {
    pianoSelezionato: 3,
    giorniStruttura: {
        'Lunedì': 'ON', 'Martedì': 'OFF', 'Mercoledì': 'ON', 'Giovedì': 'OFF', 'Venerdì': 'ON'
    },
    sceltePasti: {
        'Lunedì': 'on_base_1', 'Martedì': 'off_base_1', 'Mercoledì': 'on_base_2', 'Giovedì': 'off_base_3', 'Venerdì': 'on_base_7'
    },
    registroPeso: []
};

let giornoOggiIndice = 0; // Indice del giorno visualizzato in OGGI
let chartPesoIstance = null;

// INIZIALIZZAZIONE APPLICAZIONE
document.addEventListener('DOMContentLoaded', () => {
    initNavigazione();
    initSezioneStruttura();
    initSezioneScegliPasti();
    initSezioneOggi();
    initSezionePeso();
});

function salvaStato() {
    localStorage.setItem('fitness_tracker_stato', JSON.stringify(statoApp));
}

// GESTIONE NAVIGAZIONE TAB
function initNavigazione() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            document.getElementById(target).classList.add('active');

            buttons.forEach(b => {
                b.classList.remove('text-blue-600', 'font-bold');
                b.classList.add('text-gray-400', 'font-semibold');
            });
            btn.classList.remove('text-gray-400', 'font-semibold');
            btn.classList.add('text-blue-600', 'font-bold');

            if (target === 'oggi') initSezioneOggi();
            if (target === 'scegli-pasti') initSezioneScegliPasti();
            if (target === 'peso') renderizzaPeso();
        });
    });
}

// INIZIALIZZAZIONE TAB 2: STRUTTURA
function initSezioneStruttura() {
    const btn3 = document.getElementById('btn-piano-3');
    const btn4 = document.getElementById('btn-piano-4');
    const container = document.getElementById('struttura-giorni-container');

    function applicaTemplatePiano(num) {
        statoApp.pianoSelezionato = num;
        if (num === 3) {
            statoApp.giorniStruttura = { 'Lunedì': 'ON', 'Martedì': 'OFF', 'Mercoledì': 'ON', 'Giovedì': 'OFF', 'Venerdì': 'ON' };
            btn3.className = "py-3 px-4 rounded-xl font-bold border-2 border-blue-500 bg-blue-50 text-blue-700";
            btn4.className = "py-3 px-4 rounded-xl font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-gray-300";
        } else {
            statoApp.giorniStruttura = { 'Lunedì': 'ON', 'Martedì': 'ON', 'Mercoledì': 'OFF', 'Giovedì': 'ON', 'Venerdì': 'ON' };
            btn4.className = "py-3 px-4 rounded-xl font-bold border-2 border-blue-500 bg-blue-50 text-blue-700";
            btn3.className = "py-3 px-4 rounded-xl font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-gray-300";
        }
        renderizzaSelettoriStruttura();
    }

    btn3.addEventListener('click', () => applicaTemplatePiano(3));
    btn4.addEventListener('click', () => applicaTemplatePiano(4));

    function renderizzaSelettoriStruttura() {
        container.innerHTML = '';
        GIORNI.forEach(gg => {
            const statoAttuale = statoApp.giorniStruttura[gg] || 'OFF';
            const div = document.createElement('div');
            div.className = "flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50";
            div.innerHTML = `
                <span class="font-bold text-gray-700">${gg}</span>
                <div class="flex gap-1">
                    <button data-day="${gg}" data-val="ON" class="toggle-onoff px-4 py-1.5 rounded-lg font-bold text-sm ${statoAttuale === 'ON' ? 'bg-green-500 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500'}">ON</button>
                    <button data-day="${gg}" data-val="OFF" class="toggle-onoff px-4 py-1.5 rounded-lg font-bold text-sm ${statoAttuale === 'OFF' ? 'bg-gray-500 text-white shadow-sm' : 'bg-white border border-gray-200 text-gray-500'}">OFF</button>
                </div>
            `;
            container.appendChild(div);
        });

        document.querySelectorAll('.toggle-onoff').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const day = e.target.getAttribute('data-day');
                const val = e.target.getAttribute('data-val');
                statoApp.giorniStruttura[day] = val;
                
                // Forza l'assegnazione di un pasto coerente di default se cambia lo stato ON/OFF
                if (val === 'ON') {
                    statoApp.sceltePasti[day] = VARIANTI_PASTI.ON[0].id;
                } else {
                    statoApp.sceltePasti[day] = VARIANTI_PASTI.OFF[0].id;
                }
                renderizzaSelettoriStruttura();
            });
        });
    }

    document.getElementById('btn-salva-settimana').addEventListener('click', () => {
        salvaStato();
        alert('Settimana generata e memorizzata con successo!');
        initSezioneScegliPasti();
        initSezioneOggi();
    });

    // Render iniziale della struttura salvata
    if (statoApp.pianoSelezionato === 4) {
        btn4.className = "py-3 px-4 rounded-xl font-bold border-2 border-blue-500 bg-blue-50 text-blue-700";
        btn3.className = "py-3 px-4 rounded-xl font-bold border-2 border-gray-200 bg-white text-gray-700 hover:border-gray-300";
    }
    renderizzaSelettoriStruttura();
}

// INIZIALIZZAZIONE TAB 3: SCEGLI PASTI (LOGICA RIGIDA RICHIESTA)
function initSezioneScegliPasti() {
    const container = document.getElementById('scegli-pasti-container');
    container.innerHTML = '';

    GIORNI.forEach(gg => {
        const tipoGiorno = statoApp.giorniStruttura[gg] || 'OFF';
        const opzioniDisponibili = VARIANTI_PASTI[tipoGiorno]; // Filtra ESCLUSIVAMENTE in base allo stato ON/OFF attuale del giorno
        
        let sceltaAttuale = statoApp.sceltePasti[gg];
        // Validazione di sicurezza se il vecchio pasto non appartiene alla lista filtrata
        if (!opzioniDisponibili.find(o => o.id === sceltaAttuale)) {
            sceltaAttuale = opzioniDisponibili[0].id;
            statoApp.sceltePasti[gg] = sceltaAttuale;
        }

        const div = document.createElement('div');
        div.className = "p-4 border border-gray-200 rounded-xl space-y-2 bg-white";
        
        let opzioniHTML = opzioniDisponibili.map(opt => `
            <option value="${opt.id}" ${opt.id === sceltaAttuale ? 'selected' : ''}>${opt.nome}</option>
        `).join('');

        div.innerHTML = `
            <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                <span class="font-bold text-gray-800 text-lg">${gg}</span>
                <span class="text-xs font-bold px-2 py-0.5 rounded-full ${tipoGiorno === 'ON' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}">GIORNO ${tipoGiorno}</span>
            </div>
            <div>
                <label class="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Variante Pranzo/Cena (${tipoGiorno})</label>
                <select data-day="${gg}" class="select-variante w-full border border-gray-300 p-3 rounded-xl bg-gray-50 font-medium outline-none focus:ring-2 focus:ring-blue-500">
                    ${opzioniHTML}
                </select>
            </div>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll('.select-variante').forEach(select => {
        select.addEventListener('change', (e) => {
            const day = e.target.getAttribute('data-day');
            statoApp.sceltePasti[day] = e.target.value;
            salvaStato();
        });
    });
}

// INIZIALIZZAZIONE TAB 1: OGGI (CON SCORRIMENTO AVANTI/INDIETRO E SENZA PROTEINE)
function initSezioneOggi() {
    const labelGiorno = document.getElementById('oggi-giorno');
    const labelTipo = document.getElementById('oggi-tipo');
    const labelKcalTotale = document.getElementById('oggi-kcal-totale');
    const pastiContainer = document.getElementById('oggi-pasti-container');

    function renderizzaGiornoSelezionato() {
        const gg = GIORNI[giornoOggiIndice];
        const tipoGiorno = statoApp.giorniStruttura[gg] || 'OFF';
        
        labelGiorno.innerText = gg;
        if (tipoGiorno === 'ON') {
            labelTipo.innerText = "GIORNO ON";
            labelTipo.className = "text-sm font-semibold text-green-600 mt-1";
        } else {
            labelTipo.innerText = "GIORNO OFF";
            labelTipo.className = "text-sm font-semibold text-gray-500 mt-1";
        }

        pastiContainer.innerHTML = '';
        let kcalTotaliGiorno = 0;

        // 1. Alimenti Fissi (Colazione e Spuntini intermedi)
        const fissi = PASTI_FISSI[tipoGiorno] || [];
        
        // Mappa temporanea per ricostruire la cronologia oraria corretta
        let sequenzaPasti = [];
        
        fissi.forEach(p => {
            sequenzaPasti.push({ ...p, tipo: 'fisso' });
            kcalTotaliGiorno += p.kcal;
        });

        // 2. Variante pranzo/cena selezionata
        const idVariante = statoApp.sceltePasti[gg];
        const varianteScelta = VARIANTI_PASTI[tipoGiorno].find(v => v.id === idVariante) || VARIANTI_PASTI[tipoGiorno].find(v => v.id.includes(tipoGiorno.toLowerCase()));

        if (varianteScelta) {
            sequenzaPasti.push({
                pasto: 'Pranzo',
                ora: tipoGiorno === 'ON' ? '14:30' : '13:00',
                alimenti: varianteScelta.pranzo.alimenti,
                kcal: varianteScelta.pranzo.kcal,
                tipo: 'variabile'
            });
            kcalTotaliGiorno += varianteScelta.pranzo.kcal;

            sequenzaPasti.push({
                pasto: 'Cena',
                ora: '19:30',
                alimenti: varianteScelta.cena.alimenti,
                kcal: varianteScelta.cena.kcal,
                tipo: 'variabile'
            });
            kcalTotaliGiorno += varianteScelta.cena.kcal;
        }

        // Ordina i pasti cronologicamente per ora di inserimento
        sequenzaPasti.sort((a, b) => a.ora.localeCompare(b.ora));

        // Stampa i singoli blocchi pasto escludendo completamente i valori delle proteine
        sequenzaPasti.forEach(p => {
            const card = document.createElement('div');
            card.className = "bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-start gap-3";
            card.innerHTML = `
                <div class="space-y-1 flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">${p.ora}</span>
                        <h4 class="font-bold text-gray-800">${p.pasto}</h4>
                    </div>
                    <p class="text-sm text-gray-600 leading-relaxed">${p.alimenti}</p>
                </div>
                <div class="text-right min-w-[70px]">
                    <span class="text-base font-bold text-gray-900">${p.kcal}</span>
                    <span class="text-xs text-gray-400 block font-medium">kcal</span>
                </div>
            `;
            pastiContainer.appendChild(card);
        });

        labelKcalTotale.innerText = `${kcalTotaliGiorno} kcal`;
    }

    // Bottoni scorrimento avanti/indietro giorni
    document.getElementById('prev-giorno').onclick = () => {
        giornoOggiIndice = (giornoOggiIndice === 0) ? GIORNI.length - 1 : giornoOggiIndice - 1;
        renderizzaGiornoSelezionato();
    };

    document.getElementById('next-giorno').onclick = () => {
        giornoOggiIndice = (giornoOggiIndice === GIORNI.length - 1) ? 0 : giornoOggiIndice + 1;
        renderizzaGiornoSelezionato();
    };

    renderizzaGiornoSelezionato();
}

// INIZIALIZZAZIONE TAB 4: PESO (CRUD + MEDIA 7g + ALGORITMO PREVISIONALE LINEARE)
function initSezionePeso() {
    const form = document.getElementById('peso-form');
    
    // Imposta la data odierna come default nell'input
    document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const index = document.getElementById('peso-index').value;
        const data = document.getElementById('peso-data').value;
        const valore = parseFloat(document.getElementById('peso-valore').value);

        const nuovoRecord = { data, valore };

        if (index === '') {
            // Create
            statoApp.registroPeso.push(nuovoRecord);
        } else {
            // Update
            statoApp.registroPeso[parseInt(index)] = nuovoRecord;
            document.getElementById('peso-index').value = '';
            document.getElementById('peso-submit-btn').innerText = "Salva Record";
            document.getElementById('peso-cancella-btn').classList.add('hidden');
        }

        // Ordina cronologicamente
        statoApp.registroPeso.sort((a, b) => a.data.localeCompare(b.data));
        salvaStato();
        form.reset();
        document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];
        renderizzaPeso();
    });

    document.getElementById('peso-cancella-btn').addEventListener('click', () => {
        form.reset();
        document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];
        document.getElementById('peso-index').value = '';
        document.getElementById('peso-submit-btn').innerText = "Salva Record";
        document.getElementById('peso-cancella-btn').classList.add('hidden');
    });
}

function renderizzaPeso() {
    const lista = document.getElementById('peso-storico-lista');
    lista.innerHTML = '';

    // Mostra storico elementi
    statoApp.registroPeso.forEach((rec, idx) => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm";
        item.innerHTML = `
            <div>
                <span class="font-bold text-gray-700">${rec.valore} kg</span>
                <span class="text-xs text-gray-400 ml-2">${rec.data.split('-').reverse().join('/')}</span>
            </div>
            <div class="flex gap-2">
                <button onclick="modificaRecordPeso(${idx})" class="text-blue-600 font-bold hover:underline">Modifica</button>
                <button onclick="eliminaRecordPeso(${idx})" class="text-red-500 font-bold hover:underline">Elimina</button>
            </div>
        `;
        lista.appendChild(item);
    });

    calcolaMetrichePeso();
    aggiornaGraficoPeso();
}

window.modificaRecordPeso = function(idx) {
    const rec = statoApp.registroPeso[idx];
    document.getElementById('peso-index').value = idx;
    document.getElementById('peso-data').value = rec.data;
    document.getElementById('peso-valore').value = rec.valore;
    document.getElementById('peso-submit-btn').innerText = "Aggiorna Record";
    document.getElementById('peso-cancella-btn').classList.remove('hidden');
};

window.eliminaRecordPeso = function(idx) {
    if (confirm("Vuoi eliminare definitivamente questo inserimento di peso?")) {
        statoApp.registroPeso.splice(idx, 1);
        salvaStato();
        renderizzaPeso();
    }
};

function calcolaMetrichePeso() {
    const labelMedia = document.getElementById('peso-media');
    const labelPrevisione = document.getElementById('peso-previsione');
    const TARGET = 72.0;

    if (statoApp.registroPeso.length === 0) {
        labelMedia.innerText = "-- kg";
        labelPrevisione.innerText = "Inserisci più dati di peso";
        return;
    }

    // 1. Calcolo media ultimi 7 record inseriti
    const ultimiPesi = statoApp.registroPeso.slice(-7);
    const somma = ultimiPesi.reduce((acc, curr) => acc + curr.valore, 0);
    const media = (somma / ultimiPesi.length).toFixed(1);
    labelMedia.innerText = `${media} kg`;

    // 2. Algoritmo predittivo lineare (Regressione lineare semplice se ci sono almeno 2 punti distanti nel tempo)
    if (statoApp.registroPeso.length < 2) {
        labelPrevisione.innerText = "Inserisci almeno 2 misurazioni in date diverse";
        return;
    }

    // Trasforma date in millisecondi timestamp
    const x = statoApp.registroPeso.map(r => new Date(r.data).getTime());
    const y = statoApp.registroPeso.map(r => r.valore);

    const n = x.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    for (let i = 0; i < n; i++) {
        sumX += x[i];
        sumY += y[i];
        sumXY += x[i] * y[i];
        sumXX += x[i] * x[i];
    }

    const denominatore = (n * sumXX - sumX * sumX);
    if (denominatore === 0) {
        labelPrevisione.innerText = "Dati insufficienti o date identiche";
        return;
    }

    const pendenza = (n * sumXY - sumX * sumY) / denominatore; // variazione kg per millisecondo
    const intercetta = (sumY - pendenza * sumX) / n;

    const pesoAttuale = y[n - 1];

    if (pesoAttuale <= TARGET && pendenza <= 0) {
        labelPrevisione.innerText = "Target già raggiunto! Ottimo lavoro.";
        return;
    }

    if (pendenza === 0 || (pendenza > 0 && pesoAttuale > TARGET) || (pendenza < 0 && pesoAttuale < TARGET)) {
        labelPrevisione.innerText = "L'andamento attuale stazionario o inverso non converge verso il target.";
        return;
    }

    // Calcola il tempo stimato in MS: Target = pendenza * t + intercetta -> t = (Target - intercetta) / pendenza
    const timestampTarget = (TARGET - intercetta) / pendenza;
    const dataTargetStimata = new Date(timestampTarget);

    if (isNaN(dataTargetStimata.getTime()) || timestampTarget < new Date().getTime()) {
        // Se la stima è incoerente col passato
        const giorniStimati = Math.ceil(Math.abs(TARGET - pesoAttuale) / Math.abs(pendenza * 86400000));
        if (isFinite(giorniStimati)) {
            labelPrevisione.innerText = `Stima circa: ~${giorniStimati} giorni`;
        } else {
            labelPrevisione.innerText = "Calcolo andamento in corso...";
        }
    } else {
        labelPrevisione.innerText = `Raggiungimento stimato il: ${dataTargetStimata.toLocaleDateString('it-IT')}`;
    }
}

function aggiornaGraficoPeso() {
    const ctx = document.getElementById('chartPeso').getContext('2d');
    
    const etichette = statoApp.registroPeso.map(r => r.data.split('-').reverse().slice(0,2).join('/'));
    const dati = statoApp.registroPeso.map(r => r.valore);

    if (chartPesoIstance) {
        chartPesoIstance.destroy();
    }

    chartPesoIstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: etichette,
            datasets: [{
                label: 'Peso Corporeo (kg)',
                data: dati,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 132, 246, 0.05)',
                borderWidth: 3,
                tension: 0.2,
                fill: true,
                pointBackgroundColor: '#3b82f6'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: { color: '#e5e7eb' }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}
