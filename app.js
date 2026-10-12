// Database dei Piani Alimentari Rigidi e delle Varianti
const DATABASE_ALIMENTARE = {
    giorni_base: {
        "ON_Piano3": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592, proteina: 38.8 },
            spuntino1: { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, proteina: 22.2 },
            preworkout: { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, proteina: 5.8 },
            pranzo: { alimenti: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, proteina: 52.0 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, proteina: 18.5 },
            cena: { alimenti: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal: 591, proteina: 37.0 }
        },
        "OFF_Piano3_Mar": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; mela 180 g", kcal: 563, proteina: 37.5 },
            spuntino1: { alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, proteina: 21.2 },
            pranzo: { alimenti: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, proteina: 43.0 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, proteina: 18.7 },
            cena: { alimenti: "Tacchino 170 g crudo; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal: 597, proteina: 56.0 },
            extra: { alimenti: "Kiwi 150 g", kcal: 92, proteina: 1.7 }
        },
        "ON_Piano3_Mer": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; kiwi 150 g", kcal: 577, proteina: 39.2 },
            spuntino1: { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, proteina: 22.2 },
            preworkout: { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, proteina: 5.8 },
            pranzo: { alimenti: "Riso basmati 110 g crudo; tacchino 180 g crudo; peperoni 250 g; olio EVO 10 g", kcal: 755, proteina: 52.5 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, proteina: 18.5 },
            cena: { alimenti: "Merluzzo 200 g; cous cous 80 g crudo; verdure miste 300 g; olio EVO 10 g", kcal: 643, proteina: 51.0 }
        },
        "OFF_Piano3_Gio": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; frutti di bosco 150 g", kcal: 544, proteina: 38.0 },
            spuntino1: { alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, proteina: 21.2 },
            pranzo: { alimenti: "Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 766, proteina: 48.8 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, proteina: 18.7 },
            cena: { alimenti: "Tacchino 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal: 525, proteina: 56.0 }
        },
        "ON_Piano3_Ven": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; banana 120 g", kcal: 592, proteina: 38.8 },
            spuntino1: { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, proteina: 22.2 },
            preworkout: { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, proteina: 5.8 },
            pranzo: { alimenti: "Pasta 110 g cruda; pollo 180 g crudo; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal: 754, proteina: 58.4 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, proteina: 18.5 },
            cena: { alimenti: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal: 556, proteina: 43.0 }
        },
        "ON_Piano4_Mar": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; mela 180 g", kcal: 579, proteina: 38.0 },
            spuntino1: { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, proteina: 22.2 },
            preworkout: { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, proteina: 5.8 },
            pranzo: { alimenti: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 701, proteina: 53.5 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, proteina: 18.7 },
            cena: { alimenti: "Tacchino 180 g crudo; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal: 633, proteina: 58.0 },
            extra: { alimenti: "Kiwi 150 g", kcal: 92, proteina: 1.7 }
        },
        "OFF_Piano4_Mer": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 40 g; biscotti integrali 20 g; kiwi 150 g", kcal: 561, proteina: 38.7 },
            spuntino1: { alimenti: "Yogurt greco 0% 170 g; mandorle 20 g", kcal: 216, proteina: 21.2 },
            pranzo: { alimenti: "Riso basmati 80 g crudo; ceci 180 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 766, proteina: 48.8 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; mela 180 g", kcal: 241, proteina: 18.5 },
            cena: { alimenti: "Tacchino 180 g crudo; pane integrale 70 g; spinaci 300 g; olio EVO 10 g", kcal: 525, proteina: 56.0 }
        },
        "ON_Piano4_Gio": {
            colazione: { alimenti: "Whey 30 g; latte parz. scremato 250 ml; cereali 50 g; biscotti integrali 15 g; frutti di bosco 150 g", kcal: 527, proteina: 38.8 },
            spuntino1: { alimenti: "Skyr 170 g; mandorle 20 g", kcal: 223, proteina: 22.2 },
            preworkout: { alimenti: "Pane integrale 50 g; banana 120 g", kcal: 232, proteina: 5.8 },
            pranzo: { alimenti: "Riso basmati 110 g crudo; ceci 150 g cotti e sgocciolati; pollo 150 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 871, proteina: 54.0 },
            spuntino2: { alimenti: "Fiocchi di latte 150 g; pera 180 g", kcal: 250, proteina: 18.7 },
            cena: { alimenti: "Tacchino 180 g crudo; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal: 600, proteina: 58.5 }
        }
    },
    varianti_abbinate: {
        ON: [
            { id: "var_on_1", nome: "Var 1 - Pollo/Salmone", pranzo: { alimenti: "Riso basmati 110 g crudo; pollo 180 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 724, proteina: 52 }, cena: { alimenti: "Salmone 150 g; patate 250 g; verdure 300 g; olio EVO 5 g", kcal: 599, proteina: 37 } },
            { id: "var_on_2", nome: "Var 2 - Tacchino/Pesce B.", pranzo: { alimenti: "Pasta 110 g cruda; tacchino 180 g crudo; passata 150 g; verdure 200 g; olio EVO 10 g", kcal: 735, proteina: 56 }, cena: { alimenti: "Merluzzo 220 g; cous cous 80 g crudo; verdure 300 g; olio EVO 10 g", kcal: 660, proteina: 54 } },
            { id: "var_on_3", nome: "Var 3 - Tonno/Bresaola", pranzo: { alimenti: "Riso basmati 110 g crudo; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 704, proteina: 47 }, cena: { alimenti: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal: 640, proteina: 43 } }
        ],
        OFF: [
            { id: "var_off_1", nome: "Var 1 - Tonno/Tacchino", pranzo: { alimenti: "Pasta integrale 90 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal: 592, proteina: 43 }, cena: { alimenti: "Tacchino 180 g crudo; pane integrale 70 g; verdure 300 g; olio EVO 10 g", kcal: 545, proteina: 56 } },
            { id: "var_off_2", nome: "Var 2 - Ceci/Pollo/Pesce B.", pranzo: { alimenti: "Riso basmati 70 g crudo; ceci 150 g cotti e sgocciolati; pollo 120 g crudo; zucchine 250 g; olio EVO 10 g", kcal: 694, proteina: 45 }, cena: { alimenti: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 560, proteina: 50 } },
            { id: "var_off_3", nome: "Var 3 - Pollo/Bresaola", pranzo: { alimenti: "Riso basmati 80 g crudo; pollo 150 g crudo; verdure 300 g; olio EVO 10 g", kcal: 631, proteina: 43 }, cena: { alimenti: "Bresaola 100 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal: 510, proteina: 42 } }
        ]
    }
};

class FitnessTracker {
    constructor() {
        this.giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
        this.strutturaSettimana = JSON.parse(localStorage.getItem('ft_struttura')) || this.getDefaultStruttura(3);
        this.sceltePasti = JSON.parse(localStorage.getItem('ft_scelte_pasti')) || this.initSceltePasti();
        this.pesi = JSON.parse(localStorage.getItem('ft_pesi')) || [];
        this.giornoSelezionato = "Lunedì";
        this.chart = null;
    }

    init() {
        document.getElementById('select-giorno-corrente').addEventListener('change', (e) => {
            this.giornoSelezionato = e.target.value;
            document.getElementById('current-day-badge').innerText = this.giornoSelezionato;
            this.renderOggi();
        });

        // Data odierna per il peso
        document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];

        this.renderStruttura();
        this.renderSceltePastiSelettori();
        this.renderOggi();
        this.renderPesoDashboard();
        this.initChart();
    }

    getDefaultStruttura(tipo) {
        if (tipo === 4) {
            return { "Lunedì": "ON", "Martedì": "ON", "Mercoledì": "OFF", "Giovedì": "ON", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF" };
        }
        return { "Lunedì": "ON", "Martedì": "OFF", "Mercoledì": "ON", "Giovedì": "OFF", "Venerdì": "ON", "Sabato": "OFF", "Domenica": "OFF" };
    }

    initSceltePasti() {
        let scelte = {};
        this.giorni.forEach(g => {
            scelte[g] = "default_giorno"; // Prende lo schema rigido standard legato a quel giorno
        });
        return scelte;
    }

    cambiaTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
        document.getElementById(`sec-${tabId}`).classList.remove('hidden');

        document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active-tab'));
        document.getElementById(`tab-${tabId}`).classList.add('active-tab');

        if(tabId === 'oggi') this.renderOggi();
        if(tabId === 'peso') {
            this.renderPesoDashboard();
            setTimeout(() => this.updateChart(), 100);
        }
    }

    applicaTemplate(numAllenamenti) {
        this.strutturaSettimana = this.getDefaultStruttura(numAllenamenti);
        this.renderStruttura();
    }

    toggleGiornoStruttura(giorno) {
        this.strutturaSettimana[giorno] = this.strutturaSettimana[giorno] === "ON" ? "OFF" : "ON";
        this.renderStruttura();
    }

    renderStruttura() {
        const container = document.getElementById('lista-giorni-onoff');
        container.innerHTML = "";
        this.giorni.forEach(g => {
            const stato = this.strutturaSettimana[g];
            const btnColor = stato === "ON" ? "bg-green-100 text-green-800 border-green-500" : "bg-gray-100 text-gray-800 border-gray-400";
            container.innerHTML += `
                <div class="flex justify-between items-center py-2 border-b border-gray-100">
                    <span class="font-bold text-gray-800">${g}</span>
                    <button onclick="app.toggleGiornoStruttura('${g}')" class="px-4 py-1.5 rounded-xl border text-sm font-bold shadow-xs cursor-pointer ${btnColor}">
                        ${stato}
                    </button>
                </div>
            `;
        });
    }

    salvaSettimana() {
        localStorage.setItem('ft_struttura', JSON.stringify(this.strutturaSettimana));
        alert("Struttura della settimana salvata con successo!");
        this.renderSceltePastiSelettori();
        this.renderOggi();
    }

    // Costruisce la lista di tutte le opzioni possibili combinando i giorni rigidi del documento e le macro alternative
    getOpzioniDisponibili() {
        let opzioni = [
            { id: "default_giorno", nome: "Schema fisso di quel Giorno (Standard)", gruppo: "Standard" }
        ];

        // Aggiunge i blocchi rigidi derivati da specifici giorni ON/OFF del documento
        opzioni.push({ id: "doc_on_lun_ven", nome: "Lun/Ven ON (Pollo + Salmone)", gruppo: "Piani del Documento (ON)" });
        opzioni.push({ id: "doc_on_mer", nome: "Mercoledì ON (Tacchino + Merluzzo)", gruppo: "Piani del Documento (ON)" });
        opzioni.push({ id: "doc_on_mar_4d", nome: "Martedì ON - 4 All. (Tonno + Tacchino)", gruppo: "Piani del Documento (ON)" });
        opzioni.push({ id: "doc_on_gio_4d", nome: "Giovedì ON - 4 All. (Pollo/Ceci + Tacchino)", gruppo: "Piani del Documento (ON)" });

        opzioni.push({ id: "doc_off_mar", nome: "Martedì OFF (Tonno + Tacchino)", gruppo: "Piani del Documento (OFF)" });
        opzioni.push({ id: "doc_off_gio_mer", nome: "Mer/Gio OFF (Pollo/Ceci + Tacchino)", gruppo: "Piani del Documento (OFF)" });

        // Aggiunge le varianti accoppiate esplicite del documento
        DATABASE_ALIMENTARE.varianti_abbinate.ON.forEach(v => {
            opzioni.push({ id: v.id, nome: `Variante ON: ${v.nome}`, gruppo: "Alternative Sbloccate (ON)" });
        });
        DATABASE_ALIMENTARE.varianti_abbinate.OFF.forEach(v => {
            opzioni.push({ id: v.id, nome: `Variante OFF: ${v.nome}`, gruppo: "Alternative Sbloccate (OFF)" });
        });

        return opzioni;
    }

    renderSceltePastiSelettori() {
        const container = document.getElementById('lista-scelte-pasti');
        container.innerHTML = "";
        const opzioni = this.getOpzioniDisponibili();

        this.giorni.forEach(g => {
            const statoGiorno = this.strutturaSettimana[g];
            const badgeColor = statoGiorno === "ON" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600";
            
            let selectHtml = `<select onchange="app.salvaSceltaPasto('${g}', this.value)" class="w-full mt-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-800 focus:outline-blue-500 shadow-xs">`;
            
            // Raggruppamento per optgroup per renderlo leggibile e pulito
            const gruppi = [...new Set(opzioni.map(o => o.gruppo))];
            gruppi.forEach(gruppo => {
                selectHtml += `<optgroup label="${gruppo}">`;
                opzioni.filter(o => o.gruppo === gruppo).forEach(o => {
                    const selected = this.sceltePasti[g] === o.id ? "selected" : "";
                    selectHtml += `<option value="${o.id}" ${selected}>${o.nome}</option>`;
                });
                selectHtml += `</optgroup>`;
            });
            selectHtml += `</select>`;

            container.innerHTML += `
                <div class="p-3 bg-gray-50/50 rounded-xl border border-gray-100 space-y-1">
                    <div class="flex justify-between items-center">
                        <span class="font-bold text-gray-800">${g}</span>
                        <span class="text-xs font-bold px-2 py-0.5 rounded-md ${badgeColor}">${statoGiorno}</span>
                    </div>
                    ${selectHtml}
                </div>
            `;
        });
    }

    salvaSceltaPasto(giorno, valore) {
        this.sceltePasti[giorno] = valore;
        localStorage.setItem('ft_scelte_pasti', JSON.stringify(this.sceltePasti));
        this.renderOggi();
    }

    // Risolve l'esatto blocco alimentare in base alla scelta effettuata (Incrociata Totale)
    risolviPastiGiorno(giorno) {
        const statoStruttura = this.strutturaSettimana[giorno];
        const scelta = this.sceltePasti[giorno];

        // 1. Risoluzione degli schemi fissi base standard legati al giorno nominale del documento
        if (scelta === "default_giorno") {
            if (statoStruttura === "ON") {
                if (giorno === "Mercoledì") return DATABASE_ALIMENTARE.giorni_base.ON_Piano3_Mer;
                if (giorno === "Venerdì") return DATABASE_ALIMENTARE.giorni_base.ON_Piano3_Ven;
                return DATABASE_ALIMENTARE.giorni_base.ON_Piano3; // Lunedì o ripiego
            } else {
                if (giorno === "Giovedì" || giorno === "Mercoledì") return DATABASE_ALIMENTARE.giorni_base.OFF_Piano3_Gio;
                return DATABASE_ALIMENTARE.giorni_base.OFF_Piano3_Mar; // Martedì, Sabato, Domenica
            }
        }

        // 2. Risoluzione incrociata esplicita basata sulla selezione dell'utente
        if (scelta === "doc_on_lun_ven") return DATABASE_ALIMENTARE.giorni_base.ON_Piano3;
        if (scelta === "doc_on_mer") return DATABASE_ALIMENTARE.giorni_base.ON_Piano3_Mer;
        if (scelta === "doc_on_mar_4d") return DATABASE_ALIMENTARE.giorni_base.ON_Piano4_Mar;
        if (scelta === "doc_on_gio_4d") return DATABASE_ALIMENTARE.giorni_base.ON_Piano4_Gio;
        if (scelta === "doc_off_mar") return DATABASE_ALIMENTARE.giorni_base.OFF_Piano3_Mar;
        if (scelta === "doc_off_gio_mer") return DATABASE_ALIMENTARE.giorni_base.OFF_Piano3_Gio;

        // 3. Risoluzione delle varianti libere abbinate Pranzo/Cena
        // Nota: Le varianti sostituiscono pranzo e cena mantenendo la colazione e gli spuntini del giorno standard corrente
        let basePasti = Object.assign({}, (statoStruttura === "ON" ? DATABASE_ALIMENTARE.giorni_base.ON_Piano3 : DATABASE_ALIMENTARE.giorni_base.OFF_Piano3_Mar));
        
        let varianteTrovata = DATABASE_ALIMENTARE.varianti_abbinate.ON.find(v => v.id === scelta);
        if (!varianteTrovata) {
            varianteTrovata = DATABASE_ALIMENTARE.varianti_abbinate.OFF.find(v => v.id === scelta);
        }

        if (varianteTrovata) {
            basePasti.pranzo = varianteTrovata.pranzo;
            basePasti.cena = varianteTrovata.cena;
        }

        return basePasti;
    }

    renderOggi() {
        const pasti = this.risolviPastiGiorno(this.giornoSelezionato);
        const container = document.getElementById('lista-pasti-oggi');
        container.innerHTML = "";

        let kcalTotali = 0;
        let protTotali = 0;

        const nomiPasti Ordinati = ["colazione", "spuntino1", "preworkout", "pranzo", "spuntino2", "cena", "extra"];
        
        nomiPastiOrdinati.forEach(key => {
            if (pasti[key]) {
                const pasto = pasti[key];
                kcalTotali += pasto.kcal;
                protTotali += pasto.proteina;

                // Formattazione etichetta leggibile
                let labelPasto = key.charAt(0).toUpperCase() + key.slice(1);
                if(labelPasto === "Spuntino1") labelPasto = "Spuntino Mattina";
                if(labelPasto === "Spuntino2") labelPasto = "Spuntino Pomeriggio";
                if(labelPasto === "Preworkout") labelPasto = "Pre-Workout";

                container.innerHTML += `
                    <div class="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex flex-col space-y-1">
                        <div class="flex justify-between items-center border-b border-gray-50 pb-1">
                            <span class="font-black text-gray-900 text-sm tracking-wide uppercase">${labelPasto}</span>
                            <div class="text-xs font-bold text-gray-600">
                                <span class="bg-gray-100 px-2 py-0.5 rounded text-blue-600">${pasto.kcal} kcal</span>
                                <span class="bg-blue-50 px-2 py-0.5 rounded text-gray-700 ml-1">${pasto.proteina}g Prot</span>
                            </div>
                        </div>
                        <p class="text-sm font-medium text-gray-600 leading-relaxed">${pasto.alimenti}</p>
                    </div>
                `;
            }
        });

        // Aggiorna metriche superiori della tab Oggi
        document.getElementById('oggi-totale-kcal').innerText = Math.round(kcalTotali);
        document.getElementById('oggi-totale-prot').innerText = protTotali.toFixed(1) + "g";
        document.getElementById('oggi-status-tipo').innerText = this.strutturaSettimana[this.giornoSelezionato] + " dello schema";
    }

    // --- GESTIONE AVANZATA DEL PESO ---
    aggiungiPeso() {
        const dataInput = document.getElementById('peso-data').value;
        const valoreInput = parseFloat(document.getElementById('peso-valore').value);

        if (!dataInput || isNaN(valoreInput)) {
            alert("Per favore, inserisci sia una data valida che il valore del peso.");
            return;
        }

        // Sovrascrive se esiste già una registrazione nello stesso giorno (Modifica Record)
        this.pesi = this.pesi.filter(p => p.data !== dataInput);
        this.pesi.push({ data: dataInput, valore: valoreInput });
        
        // Ordina cronologicamente
        this.pesi.sort((a, b) => new Date(a.data) - new Date(b.data));
        
        localStorage.setItem('ft_pesi', JSON.stringify(this.pesi));
        document.getElementById('peso-valore').value = "";
        
        this.renderPesoDashboard();
        this.updateChart();
    }

    eliminaPeso(data) {
        if (confirm(`Vuoi eliminare la registrazione del peso del ${data}?`)) {
            this.pesi = this.pesi.filter(p => p.data !== data);
            localStorage.setItem('ft_pesi', JSON.stringify(this.pesi));
            this.renderPesoDashboard();
            this.updateChart();
        }
    }

    renderPesoDashboard() {
        const listaContainer = document.getElementById('lista-storico-peso');
        listaContainer.innerHTML = "";

        if (this.pesi.length === 0) {
            listaContainer.innerHTML = `<p class="text-xs text-gray-400 italic">Nessun dato registrato</p>`;
            return;
        }

        // Renderizza storico in ordine decrescente (più recenti in alto)
        [...this.pesi].reverse().forEach(p => {
            listaContainer.innerHTML += `
                <div class="flex justify-between items-center text-sm py-1.5 border-b border-gray-50">
                    <span class="font-medium text-gray-600">${p.data}</span>
                    <div class="flex items-center space-x-3">
                        <span class="font-bold text-gray-900">${p.valore.toFixed(1)} kg</span>
                        <button onclick="app.eliminaPeso('${p.data}')" class="text-red-500 font-bold hover:text-red-700 text-xs cursor-pointer">Elimina</button>
                    </div>
                </div>
            `;
        });

        // Calcolo Media ultimi 7 giorni reali inseriti
        const ultimeRegistrazioni = this.pesi.slice(-7);
        const media = ultimeRegistrazioni.reduce((acc, curr) => acc + curr.valore, 0) / (ultimeRegistrazioni.length || 1);
        document.getElementById('peso-media-7d').innerText = ultimeRegistrazioni.length > 0 ? media.toFixed(2) : "--";

        // Previsione raggiungimento Target (72 kg) basata su regressione lineare semplice se ci sono almeno 2 punti distanti
        const prevContainer = document.getElementById('peso-previsione');
        if (this.pesi.length >= 2) {
            const primo = this.pesi[0];
            const ultimo = this.pesi[this.pesi.length - 1];
            
            const giorniDiff = (new Date(ultimo.data) - new Date(primo.data)) / (1000 * 60 * 60 * 24);
            const pesoDiff = ultimo.valore - primo.valore;

            if (giorniDiff > 0 && pesoDiff !== 0) {
                const kgAlGiorno = pesoDiff / giorniDiff;
                const kgDaPerdereOArrivare = 72.0 - ultimo.valore;
                const giorniNecessari = kgDaPerdereOArrivare / kgAlGiorno;

                if (giorniNecessari > 0) {
                    const dataStima = new Date();
                    dataStima.setDate(dataStima.getDate() + giorniNecessari);
                    prevContainer.innerHTML = `Target stimato il: <strong class="text-blue-600">${dataStima.toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' })}</strong> (~${Math.round(giorniNecessari)} gg)`;
                } else {
                    prevContainer.innerText = "Il trend attuale si sta allontanando o ha già superato il target stabilito.";
                }
            } else {
                prevContainer.innerText = "Dati insufficienti o date sovrapposte per elaborare il trend.";
            }
        } else {
            prevContainer.innerText = "Inserisci almeno 2 misurazioni in date diverse per vedere la stima temporale.";
        }
    }

    initChart() {
        const ctx = document.getElementById('chartPeso').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [
                    { label: 'Peso Registrato (kg)', data: [], borderColor: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderWidth: 3, tension: 0.2, fill: true },
                    { label: 'Target (72 kg)', data: [], borderColor: '#ef4444', borderDash: [6, 6], borderWidth: 1.5, pointRadius: 0, fill: false }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { ticks: { font: { size: 14 } }, grid: { color: '#f3f4f6' } },
                    x: { ticks: { font: { size: 12 } }, grid: { display: false } }
                },
                plugins: { legend: { display: false } }
            }
        });
        this.updateChart();
    }

    updateChart() {
        if (!this.chart) return;
        const labels = this.pesi.map(p => {
            const d = new Date(p.data);
            return `${d.getDate()}/${d.getMonth()+1}`;
        });
        const dataValori = this.pesi.map(p => p.valore);
        const dataTarget = new Array(this.pesi.length).fill(72.0);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = dataValori;
        this.chart.data.datasets[1].data = dataTarget;
        this.chart.update();
    }
}

// Inizializzazione Globale
const app = new FitnessTracker();
window.addEventListener('DOMContentLoaded', () => {
    app.init();
    
    // Registrazione del Service Worker per supporto nativo PWA Offline
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.error("SW fallito:", err));
    }
});
