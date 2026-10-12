// 1. DIZIONARIO COMPLETO DATI ALIMENTARI (DA DOCUMENTO UTENTE)
const DIZIONARIO_PASTI = {
    "ON": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592, pro: 38.8 },
        "Spuntino 1": { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, pro: 22.2 },
        "Pre-workout": { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, pro: 5.8 },
        "Pranzo": { alimenti: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, pro: 52 },
        "Spuntino 2": { alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, pro: 18.5 },
        "Cena": { alimenti: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591, pro: 37 }
    },
    "OFF": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563, pro: 37.5 },
        "Spuntino 1": { alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, pro: 21.2 },
        "Pranzo": { alimenti: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, pro: 43 },
        "Spuntino 2": { alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, pro: 18.7 },
        "Cena": { alimenti: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597, pro: 56 },
        "Extra": { alimenti: "Kiwi 150 g", kcal: 92, pro: 1.7 }
    },
    // Giorni specifici estratti dal piano con lievi differenze caloriche / frutti diversi
    "ON_Mercoledi": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; kiwi 150 g", kcal: 577, pro: 39.2 },
        "Pranzo": { alimenti: "Riso basmati 110 g crudo; tacchino 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal: 755, pro: 52.5 },
        "Cena": { alimenti: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal: 643, pro: 51 }
    },
    "OFF_Giovedi": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; frutti di bosco 150 g", kcal: 544, pro: 38 },
        "Pranzo": { alimenti: "Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 766, pro: 48.8 },
        "Cena": { alimenti: "Tacchino 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal: 525, pro: 56 }
    },
    "ON_Venerdi": {
        "Pranzo": { alimenti: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal: 754, pro: 58.4 },
        "Cena": { alimenti: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal: 556, pro: 43 }
    },
    "ON_Martedi_4Allenamenti": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; mela 180 g", kcal: 579, pro: 38 },
        "Pranzo": { alimenti: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 701, pro: 53.5 },
        "Cena": { alimenti: "Tacchino 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal: 633, pro: 58 }
    },
    "ON_Giovedi_4Allenamenti": {
        "Colazione": { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; frutti di bosco 150 g", kcal: 527, pro: 38.8 },
        "Pranzo": { alimenti: "Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 871, pro: 54 },
        "Cena": { alimenti: "Tacchino 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal: 600, pro: 58.5 }
    },
    // ALTERNATIVE ABBINATE PRANZO E CENA
    "ALT_ON_1": {
        "Pranzo": { alimenti: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, pro: 52 },
        "Cena": { alimenti: "Salmone 150 g; patate 250 g; verdure 300 g; olio EVO 5 g", kcal: 599, pro: 37 }
    },
    "ALT_ON_2": {
        "Pranzo": { alimenti: "Pasta 110 g cruda; tacchino 180 g crudo; passata 150 g; verdure 200 g; olio EVO 10 g", kcal: 735, pro: 56 },
        "Cena": { alimenti: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal: 660, pro: 54 }
    },
    "ALT_ON_3": {
        "Pranzo": { alimenti: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 704, pro: 47 },
        "Cena": { alimenti: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal: 640, pro: 43 }
    },
    "ALT_OFF_1": {
        "Pranzo": { alimenti: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, pro: 43 },
        "Cena": { alimenti: "Tacchino 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal: 545, pro: 56 }
    },
    "ALT_OFF_2": {
        "Pranzo": { alimenti: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 694, pro: 45 },
        "Cena": { alimenti: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 560, pro: 50 }
    },
    "ALT_OFF_3": {
        "Pranzo": { alimenti: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal: 631, pro: 43 },
        "Cena": { alimenti: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 510, pro: 42 }
    }
};

// Menu Opzioni Cross-Pianificazione per Pranzo/Cena
const OPZIONI_VARIANTI = [
    { value: "BASE_ON_LUN", label: "Piano Lunedì ON (Riso/Pollo + Salmone)" },
    { value: "BASE_ON_MER", label: "Piano Mercoledì ON (Riso/Tacchino + Merluzzo)" },
    { value: "BASE_ON_VEN", label: "Piano Venerdì ON (Pasta/Pollo + Manzo)" },
    { value: "BASE_ON_MAR4", label: "Piano Martedì ON 4A (Pasta/Tonno + Tacchino)" },
    { value: "BASE_ON_GIO4", label: "Piano Giovedì ON 4A (Riso/Ceci/Pollo + Tacchino)" },
    { value: "ALT_ON_1", label: "Variante ON 1 - Pollo e Salmone" },
    { value: "ALT_ON_2", label: "Variante ON 2 - Tacchino e Pesce Bianco" },
    { value: "ALT_ON_3", label: "Variante ON 3 - Tonno e Bresaola" },
    { value: "BASE_OFF_MAR", label: "Piano Martedì OFF (Pasta/Tonno + Tacchino)" },
    { value: "BASE_OFF_GIO", label: "Piano Giovedì OFF (Riso/Ceci/Pollo + Tacchino)" },
    { value: "ALT_OFF_1", label: "Variante OFF 1 - Tonno e Tacchino" },
    { value: "ALT_OFF_2", label: "Variante OFF 2 - Ceci, Pollo e Pesce Bianco" },
    { value: "ALT_OFF_3", label: "Variante OFF 3 - Pollo e Bresaola" }
];

const GIORNI = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

// 2. STATO STATICO / LOCALSTORAGE
let statoApp = {
    struttura: {}, // Giorno: "ON" o "OFF"
    sceltePasti: {}, // Giorno: variante key selezionata
    pesi: [] // { data: "YYYY-MM-DD", valore: X }
};

let pesoModificaData = null; // Memorizza se stiamo modificando un peso esistente
let pesoChart = null;

// Caricamento Iniziale
function inizializzaApp() {
    const salvato = localStorage.getItem("fitness_tracker_v2_data");
    if (salvato) {
        statoApp = JSON.parse(salvato);
    } else {
        // Default 3 Allenamenti
        applicaTemplateBase(3);
    }
    
    configuraNavigazione();
    renderStruttura();
    renderScegliPasti();
    renderOggi();
    renderPeso();
}

function salvaStato() {
    localStorage.setItem("fitness_tracker_v2_data", JSON.stringify(statoApp));
}

// 3. NAVIGAZIONE TAB BLINDATA
function configuraNavigazione() {
    const pulsanti = document.querySelectorAll(".nav-btn");
    const tabs = document.querySelectorAll(".tab-content");

    pulsanti.forEach(btn => {
        btn.addEventListener("click", () => {
            pulsanti.forEach(p => p.classList.remove("active"));
            tabs.forEach(t => t.classList.remove("active"));

            btn.classList.add("active");
            const targetTab = btn.id.replace("nav-", "section-");
            document.getElementById(targetTab).classList.add("active");

            // Aggiornamenti contestuali al cambio tab
            if (targetTab === "section-oggi") renderOggi();
            if (targetTab === "section-pasti") renderScegliPasti();
            if (targetTab === "section-peso") renderPeso();
        });
    });

    // Collegamento pulsante Genera Settimana
    document.getElementById("btn-genera-settimana").addEventListener("click", () => {
        const val = document.getElementById("template-select").value;
        applicaTemplateBase(parseInt(val));
        salvaStato();
        renderStruttura();
        renderScegliPasti();
        alert("Settimana generata correttamente in base al piano scelto!");
    });

    // Logica Form Peso
    document.getElementById("btn-salva-peso").addEventListener("click", salvaMisuaraPeso);
    document.getElementById("btn-annulla-peso").addEventListener("click", resetFormPeso);
}

function applicaTemplateBase(tipo) {
    statoApp.struttura = {};
    statoApp.sceltePasti = {};
    
    GIORNI.forEach(g => {
        if (tipo === 3) {
            // Lun, Mer, Ven ON
            if (g === "Lunedì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_LUN"; }
            else if (g === "Mercoledì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_MER"; }
            else if (g === "Venerdì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_VEN"; }
            else { statoApp.struttura[g] = "OFF"; statoApp.sceltePasti[g] = g === "Giovedì" ? "BASE_OFF_GIO" : "BASE_OFF_MAR"; }
        } else {
            // Lun, Mar, Gio, Ven ON
            if (g === "Lunedì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_LUN"; }
            else if (g === "Martedì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_MAR4"; }
            else if (g === "Giovedì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_GIO4"; }
            else if (g === "Venerdì") { statoApp.struttura[g] = "ON"; statoApp.sceltePasti[g] = "BASE_ON_VEN"; }
            else { statoApp.struttura[g] = "OFF"; statoApp.sceltePasti[g] = "BASE_OFF_MAR"; }
        }
    });
}

// 4. LOGICA TAB: STRUTTURA
function renderStruttura() {
    const container = document.getElementById("struttura-giorni-lista");
    container.innerHTML = "";

    GIORNI.forEach(g => {
        const isON = statoApp.struttura[g] === "ON";
        const div = document.createElement("div");
        div.className = "flex justify-between items-center bg-white p-3 rounded-xl border border-gray-100 shadow-xs";
        div.innerHTML = `
            <span class="font-bold text-lg">${g}</span>
            <div class="flex items-center gap-2">
                <span class="text-xs uppercase font-bold text-gray-500">${isON ? 'Allenamento (ON)' : 'Riposo (OFF)'}</span>
                <input type="checkbox" ${isON ? 'checked' : ''} data-giorno="${g}" class="w-6 h-6 border-gray-300 rounded text-blue-600 focus:ring-blue-500 toggle-onoff">
            </div>
        `;
        container.appendChild(div);
    });

    // Listener sui checkbox
    document.querySelectorAll(".toggle-onoff").forEach(cb => {
        cb.addEventListener("change", (e) => {
            const g = e.target.getAttribute("data-giorno");
            const nuovoStato = e.target.checked ? "ON" : "OFF";
            statoApp.struttura[g] = nuovoStato;
            
            // Imposta una variante coerente di base al cambio di ON/OFF
            if (nuovoStato === "ON") {
                statoApp.sceltePasti[g] = "BASE_ON_LUN";
            } else {
                statoApp.sceltePasti[g] = "BASE_OFF_MAR";
            }
            
            salvaStato();
            renderStruttura(); // Rinfresca scritte etichette nello stesso tab
        });
    });
}

// Helper per ottenere i pasti esatti di un giorno in base alla scelta effettuata
function calcolaPastiGiorno(giorno) {
    const tipoGiornoStruttura = statoApp.struttura[giorno]; // nominale ON o OFF dal tab struttura
    const scelta = statoApp.sceltePasti[giorno] || (tipoGiornoStruttura === "ON" ? "BASE_ON_LUN" : "BASE_OFF_MAR");

    // Copia i pasti base coerenti con la struttura nominale del giorno
    let pastiFinali = JSON.parse(JSON.stringify(DIZIONARIO_PASTI[tipoGiornoStruttura]));

    // Se il giorno nominale è OFF ma l'utente ha scelto una variante extra di martedì o giovedì ad esempio, gestiamo
    // Sovrascrittura o estrazione corretta da DIZIONARIO
    let sorgentePranzoCena = null;

    if (scelta.startsWith("ALT_")) {
        sorgentePranzoCena = DIZIONARIO_PASTI[scelta];
    } else if (scelta === "BASE_ON_LUN") {
        sorgentePranzoCena = DIZIONARIO_PASTI["ON"];
    } else if (scelta === "BASE_ON_MER") {
        sorgentePranzoCena = DIZIONARIO_PASTI["ON_Mercoledi"];
    } else if (scelta === "BASE_ON_VEN") {
        sorgentePranzoCena = DIZIONARIO_PASTI["ON_Venerdi"];
    } else if (scelta === "BASE_ON_MAR4") {
        sorgentePranzoCena = DIZIONARIO_PASTI["ON_Martedi_4Allenamenti"];
    } else if (scelta === "BASE_ON_GIO4") {
        sorgentePranzoCena = DIZIONARIO_PASTI["ON_Giovedi_4Allenamenti"];
    } else if (scelta === "BASE_OFF_MAR") {
        sorgentePranzoCena = DIZIONARIO_PASTI["OFF"];
    } else if (scelta === "BASE_OFF_GIO") {
        sorgentePranzoCena = DIZIONARIO_PASTI["OFF_Giovedi"];
    }

    // Applica le sovrascritture di Pranzo e Cena se trovate nel record
    if (sorgentePranzoCena) {
        if (sorgentePranzoCena["Pranzo"]) pastiFinali["Pranzo"] = sorgentePranzoCena["Pranzo"];
        if (sorgentePranzoCena["Cena"]) pastiFinali["Cena"] = sorgentePranzoCena["Cena"];
        
        // Se la sorgente specifica ha colazione o varianti particolari (es. Mercoledì o Giovedì), le applichiamo
        if (scelta === "BASE_ON_MER" && sorgentePranzoCena["Colazione"]) pastiFinali["Colazione"] = sorgentePranzoCena["Colazione"];
        if (scelta === "BASE_ON_MAR4" && sorgentePranzoCena["Colazione"]) pastiFinali["Colazione"] = sorgentePranzoCena["Colazione"];
        if (scelta === "BASE_ON_GIO4" && sorgentePranzoCena["Colazione"]) pastiFinali["Colazione"] = sorgentePranzoCena["Colazione"];
        if (scelta === "BASE_OFF_GIO" && sorgentePranzoCena["Colazione"]) pastiFinali["Colazione"] = sorgentePranzoCena["Colazione"];
    }

    return pastiFinali;
}

// 5. LOGICA TAB: SCEGLI PASTI (SELEZIONE INCROCIATA LIBERA COMPLETA)
function renderScegliPasti() {
    const container = document.getElementById("scelte-pasti-lista");
    container.innerHTML = "";

    GIORNI.forEach(g => {
        const tipoGiorno = statoApp.struttura[g];
        const sceltaCorrente = statoApp.sceltePasti[g] || (tipoGiorno === "ON" ? "BASE_ON_LUN" : "BASE_OFF_MAR");

        const div = document.createElement("div");
        div.className = "bg-white p-4 rounded-xl border border-gray-100 shadow-xs";
        
        let opzioniHtml = "";
        OPZIONI_VARIANTI.forEach(opt => {
            const selezionato = opt.value === sceltaCorrente ? "selected" : "";
            opzioniHtml += `<option value="${opt.value}" ${selezionato}>${opt.label}</option>`;
        });

        // Mostra info caloriche rapide stimate del blocco scelto
        const pastiGiorno = calcolaPastiGiorno(g);
        let kcalTot = 0;
        Object.values(pastiGiorno).forEach(p => kcalTot += p.kcal);

        div.innerHTML = `
            <div class="flex justify-between items-center mb-2">
                <span class="font-bold text-lg text-gray-900">${g}</span>
                <span class="px-2 py-0.5 rounded text-xs font-bold ${tipoGiorno === 'ON' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}">Giorno ${tipoGiorno}</span>
            </div>
            <label class="block text-xs font-bold text-gray-500 uppercase mb-1">Abbinamento Pranzo e Cena:</label>
            <select data-giorno="${g}" class="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-base select-variante-pasto">
                ${opzioniHtml}
            </select>
            <div class="mt-2 text-right text-xs font-semibold text-gray-600">
                Calorie totali stimate: <span class="text-sm font-bold text-gray-900">${kcalTot} kcal</span>
            </div>
        `;
        container.appendChild(div);
    });

    // Handler variazione menu a tendina
    document.querySelectorAll(".select-variante-pasto").forEach(sel => {
        sel.addEventListener("change", (e) => {
            const g = e.target.getAttribute("data-giorno");
            statoApp.sceltePasti[g] = e.target.value;
            salvaStato();
            renderScegliPasti(); // Aggiorna i calcoli visivi al volo
        });
    });
}

// 6. LOGICA TAB: OGGI
function renderOggi() {
    // Determiniamo il giorno reale corrente della settimana
    const giorniSettimanaIta = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
    const oggiIndex = new Date().getDay(); 
    const giornoNomeOggi = giorniSettimanaIta[oggiIndex];

    const infoDiv = document.getElementById("oggi-info");
    infoDiv.innerHTML = `Oggi è <strong>${giornoNomeOggi}</strong>. Tipo impostato in struttura: <strong>${statoApp.struttura[giornoNomeOggi] || 'OFF'}</strong>.`;

    const pastiGiorno = calcolaPastiGiorno(giornoNomeOggi);
    
    // Generazione della lista dei pasti a schermo
    const listaContainer = document.getElementById("oggi-pasti-lista");
    listaContainer.innerHTML = "";

    let kcalTotale = 0;

    Object.keys(pastiGiorno).forEach(nomePasto => {
        const pasto = pastiGiorno[nomePasto];
        kcalTotale += pasto.kcal;

        const pDiv = document.createElement("div");
        pDiv.className = "bg-white p-3 rounded-xl border border-gray-100 shadow-xs flex justify-between items-start gap-4";
        pDiv.innerHTML = `
            <div class="flex-1">
                <span class="block font-bold text-gray-800 text-base">${nomePasto}</span>
                <span class="block text-sm text-gray-600 leading-tight mt-0.5">${pasto.alimenti}</span>
                <span class="inline-block mt-1 bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded font-medium">Proteine: ${pasto.pro}g</span>
            </div>
            <div class="text-right whitespace-nowrap">
                <span class="font-bold text-blue-600 text-base">${pasto.kcal} kcal</span>
            </div>
        `;
        listaContainer.appendChild(pDiv);
    });

    document.getElementById("oggi-kcal-totale").innerText = `${kcalTotale} kcal`;
}

// 7. LOGICA TAB: PESO (GESTIONE AVANZATA E PREVISIONE)
function renderPeso() {
    // Imposta data odierna nel form se vuota
    if (!document.getElementById("peso-data").value) {
        document.getElementById("peso-data").value = new Date().toISOString().substring(0, 10);
    }

    // Ordina pesi dal più recente al più vecchio
    statoApp.pesi.sort((a, b) => new Date(b.data) - new Date(a.data));

    // Render Tabella Storico
    const corpoTabella = document.getElementById("peso-tabella-corpo");
    corpoTabella.innerHTML = "";

    if (statoApp.pesi.length === 0) {
        corpoTabella.innerHTML = `<tr><td colspan="3" class="p-4 text-center text-gray-400">Nessun dato registrato</td></tr>`;
    } else {
        statoApp.pesi.forEach(p => {
            const tr = document.createElement("tr");
            tr.className = "border-b border-gray-100 hover:bg-gray-50";
            tr.innerHTML = `
                <td class="p-2 font-medium">${formattaData(p.data)}</td>
                <td class="p-2 font-bold text-gray-900">${p.valore.toFixed(1)} kg</td>
                <td class="p-2 text-right space-x-1">
                    <button onclick="avviaModificaPeso('${p.data}')" class="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Modifica</button>
                    <button onclick="eliminaPeso('${p.data}')" class="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Elimina</button>
                </td>
            `;
            corpoTabella.appendChild(tr);
        });
    }

    // Calcolo Media ultimi 7 giorni
    const media = calcolaMedia7Giorni();
    document.getElementById("peso-media-7").innerText = media ? `${media.toFixed(1)} kg` : "--";

    // Calcolo Previsione Target 72 kg
    elaboraPrevisioneTarget(media);

    // Aggiornamento Grafico ChartJS
    aggiornaGraficoPeso();
}

function formattaData(dataStr) {
    const parti = dataStr.split("-");
    if (parti.length === 3) return `${parti[2]}/${parti[1]}/${parti[0]}`;
    return dataStr;
}

function calcolaMedia7Giorni() {
    if (statoApp.pesi.length === 0) return null;
    
    // Prendiamo i dati degli ultimi 7 giorni effettivi inseriti
    const ultimiPesi = statoApp.pesi.slice(0, 7);
    const somma = ultimiPesi.reduce((acc, p) => acc + p.valore, 0);
    return somma / ultimiPesi.length;
}

function elaboraPrevisioneTarget(mediaCorrente) {
    const previsioneSpan = document.getElementById("peso-previsione");
    const TARGET = 72.0;

    if (statoApp.pesi.length < 3) {
        previsioneSpan.innerHTML = "Inserisci almeno 3 record in giorni diversi per visualizzare il trend previsionale.";
        return;
    }

    // Calcolo del trend lineare semplice basato sull'ordine cronologico (dal più vecchio al più recente)
    const cronologico = [...statoApp.pesi].reverse();
    const primo = cronologico[0];
    const ultimo = cronologico[cronologico.length - 1];

    const millisecondiDiff = new Date(ultimo.data) - new Date(primo.data);
    const giorniDiff = millisecondiDiff / (1000 * 60 * 60 * 24);
    const pesoDiff = ultimo.valore - primo.valore;

    if (giorniDiff <= 0 || pesoDiff === 0) {
        previsioneSpan.innerHTML = "Andamento stabile. Impossibile calcolare una data stimata di arrivo.";
        return;
    }

    const perditaGiornalliera = pesoDiff / giorniDiff; // kg al giorno (negativo se si perde peso)
    const kgMancanti = TARGET - ultimo.valore;

    // Se stiamo perdendo peso e l'obiettivo è inferiore, oppure guadagnando e l'obiettivo è superiore
    if ((perditaGiornalliera < 0 && kgMancanti < 0) || (perditaGiornalliera > 0 && kgMancanti > 0)) {
        const giorniNecessari = Math.abs(kgMancanti / perditaGiornalliera);
        const dataStimata = new Date();
        dataStimata.setDate(dataStimata.getDate() + Math.ceil(giorniNecessari));
        
        previsioneSpan.innerHTML = `Mancano <strong>${Math.abs(kgMancanti).toFixed(1)} kg</strong>. Al ritmo attuale, il traguardo di 72 kg è stimato per il <strong>${dataStimata.toLocaleDateString('it-IT')}</strong> (~${Math.ceil(giorniNecessari)} giorni).`;
    } else {
        previsioneSpan.innerHTML = "Il trend attuale si muove in direzione opposta rispetto al target di 72 kg.";
    }
}

function salvaMisuaraPeso() {
    const dataInput = document.getElementById("peso-data").value;
    const valoreInput = parseFloat(document.getElementById("peso-valore").value);

    if (!dataInput || isNaN(valoreInput) || valoreInput <= 0) {
        alert("Inserisci valori validi.");
        return;
    }

    // Se siamo in modalità modifica retroattiva, eliminiamo il vecchio record per la data precedente prima di salvare
    if (pesoModificaData) {
        statoApp.pesi = statoApp.pesi.filter(p => p.data !== pesoModificaData);
    } else {
        // Altrimenti controlliamo sovrascrittura sulla stessa data per evitare duplicati indesiderati
        statoApp.pesi = statoApp.pesi.filter(p => p.data !== dataInput);
    }

    statoApp.pesi.push({ data: dataInput, valore: valoreInput });
    salvaStato();
    resetFormPeso();
    renderPeso();
}

window.avviaModificaPeso = function(dataStr) {
    const record = statoApp.pesi.find(p => p.data === dataStr);
    if (!record) return;

    document.getElementById("peso-data").value = record.data;
    document.getElementById("peso-valore").value = record.valore;
    
    pesoModificaData = dataStr;
    document.getElementById("peso-form-title").innerText = "Modifica Record Peso";
    document.getElementById("btn-annulla-peso").classList.remove("hidden");
    
    // Scroll in alto sul form
    document.getElementById("peso-form-title").scrollIntoView({ behavior: 'smooth' });
};

window.eliminaPeso = function(dataStr) {
    if (confirm(`Sicuro di voler eliminare il record del ${formattaData(dataStr)}?`)) {
        statoApp.pesi = statoApp.pesi.filter(p => p.data !== dataStr);
        salvaStato();
        renderPeso();
    }
};

function resetFormPeso() {
    pesoModificaData = null;
    document.getElementById("peso-form-title").innerText = "Aggiungi / Modifica Peso";
    document.getElementById("btn-annulla-peso").classList.add("hidden");
    document.getElementById("peso-valore").value = "";
    document.getElementById("peso-data").value = new Date().toISOString().substring(0, 10);
}

function aggiornaGraficoPeso() {
    const ctx = document.getElementById('chartPeso').getContext('2d');
    
    // Estrae i dati ordinati cronologicamente per il grafico (max ultimi 10 inserimenti)
    const datiGrafico = [...statoApp.pesi].reverse().slice(-10);
    
    const labels = datiGrafico.map(p => formattaData(p.data));
    const valori = datiGrafico.map(p => p.valore);

    if (pesoChart) {
        pesoChart.destroy();
    }

    pesoChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peso Corporeo (kg)',
                data: valori,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.05)',
                borderWidth: 3,
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
                y: { beginAtZero: false }
            }
        }
    });
}

// Avvio
window.addEventListener("DOMContentLoaded", inizializzaApp);
