
const templatePasti = {
    ON: [
        { nome: "Colazione", kcal: 450, cibo: "Pancake proteici con avena" },
        { nome: "Pranzo", kcal: 750, alternative: [{ cibo: "Riso con pollo e zucchine", scelta: true }, { cibo: "Pasta integrale con tonno", scelta: false }] },
        { nome: "Spuntino", kcal: 250, cibo: "Protein shake + mela" },
        { nome: "Cena", kcal: 650, alternative: [{ cibo: "Salmone al forno con patate", scelta: true }, { cibo: "Tagliata di manzo con rucola", scelta: false }] }
    ],
    OFF: [
        { nome: "Colazione", kcal: 400, cibo: "Yogurt greco con noci" },
        { nome: "Pranzo", kcal: 600, alternative: [{ cibo: "Insalatona con uova sode e avocado", scelta: true }, { cibo: "Tacchino alla piastra con quinoa", scelta: false }] },
        { nome: "Spuntino", kcal: 200, cibo: "Frutta secca mista" },
        { nome: "Cena", kcal: 500, alternative: [{ cibo: "Merluzzo al vapore con broccoli", scelta: true }, { cibo: "Frittata di albumi con spinaci", scelta: false }] }
    ]
};
const giorniSettimana = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];
let stato = { settimanaCorrente: null, tempPianificazione: null, pesi: [] };

function inizializzaApp() {
    const salvato = localStorage.getItem("fit_v2_data");
    if (salvato) stato = JSON.parse(salvato);
    document.getElementById('peso-data').value = new Date().toISOString().split('T')[0];
    aggiornaOggi();
}
function salvaStato() { localStorage.setItem("fit_v2_data", JSON.stringify(stato)); }
function switchSection(id) {
    document.querySelectorAll('.app-section').forEach(s => s.classList.add('hidden'));
    document.getElementById(`section-${id}`).classList.remove('hidden');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`nav-${id}`).classList.add('active');
    if (id === 'oggi') aggiornaOggi();
    if (id === 'piano') aggiornaPiano();
    if (id === 'peso') aggiornaPeso();
}
function aggiornaOggi() {
    const idx = (new Date().getDay() + 6) % 7;
    const gg = giorniSettimana[idx];
    const card = document.getElementById('oggi-status-card');
    const list = document.getElementById('oggi-pasti-list');
    if (!stato.settimanaCorrente) {
        card.innerHTML = "Pianifica la settimana per iniziare.";
        return;
    }
    const info = stato.settimanaCorrente.giorni[gg];
    card.innerHTML = `<h3>${gg} - Giorno ${info.tipo}</h3>`;
    let tot = 0; html = "";
    info.pasti.forEach(p => {
        let txt = p.alternative ? (p.alternative.find(a=>a.scelta)||p.alternative[0]).cibo : p.cibo;
        tot += p.kcal;
        html += `<div class='bg-white p-3 rounded shadow flex justify-between'><div><strong>${p.nome}</strong><p>${txt}</p></div><span>${p.kcal} kcal</span></div>`;
    });
    document.getElementById('oggi-totale-kcal').innerText = tot;
    list.innerHTML = html;
}
function selezionaTipoPiano(n) {
    stato.tempPianificazione = {};
    giorniSettimana.forEach((g, i) => { stato.tempPianificazione[g] = (n===3 ? [0,2,4]:[0,1,3,4]).includes(i) ? "ON":"OFF"; });
}
function generaSettimana() {
    if(!stato.tempPianificazione) selezionaTipoPiano(3);
    const container = document.getElementById('pianifica-giorni-container');
    const list = document.getElementById('pianifica-giorni-list');
    container.classList.remove('hidden'); list.innerHTML = "";
    giorniSettimana.forEach(g => {
        list.innerHTML += `<div class='flex justify-between p-2 bg-gray-50 rounded'><span>${g}</span><div>
        <button onclick="stato.tempPianificazione['${g}']='ON';generaSettimana()" class='px-2 text-xs ${stato.tempPianificazione[g]==='ON'?'bg-green-500 text-white':''}'>ON</button>
        <button onclick="stato.tempPianificazione['${g}']='OFF';generaSettimana()" class='px-2 text-xs ${stato.tempPianificazione[g]==='OFF'?'bg-orange-500 text-white':''}'>OFF</button>
        </div></div>`;
    });
}
function salvaSettimana() {
    stato.settimanaCorrente = { giorni: {} };
    giorniSettimana.forEach(g => {
        const t = stato.tempPianificazione[g];
        stato.settimanaCorrente.giorni[g] = { tipo: t, pasti: JSON.parse(JSON.stringify(templatePasti[t])) };
    });
    salvaStato(); switchSection('piano');
}
function aggiornaPiano() {
    const c = document.getElementById('piano-settimanale-container');
    if(!stato.settimanaCorrente) { c.innerHTML = "Nessun piano attivo."; return; }
    let html = "";
    giorniSettimana.forEach(g => {
        const gd = stato.settimanaCorrente.giorni[g];
        html += `<div class='bg-white p-3 rounded shadow mb-2'><strong>${g} (${gd.tipo})</strong>`;
        gd.pasti.forEach((p, pi) => {
            if(p.alternative) {
                html += `<div class='text-xs mt-1'><em>${p.nome}</em>:`;
                p.alternative.forEach((a, ai) => {
                    html += `<label class='block'><input type='radio' name='alt-${g}-${p.nome}' ${a.scelta?'checked':''} onchange='cambiaAlt("${g}","${p.nome}",${ai})'> ${a.cibo}</label>`;
                });
                html += `</div>`;
            } else {
                html += `<p class='text-xs'>${p.nome}: ${p.cibo}</p>`;
            }
        });
        html += `</div>`;
    });
    c.innerHTML = html;
}
function cambiaAlt(g, p, ai) {
    stato.settimanaCorrente.giorni[g].pasti.find(pr => pr.nome === p).alternative.forEach((a, i) => a.scelta = i===ai);
    salvaStato();
}
let chart = null;
function aggiornaPeso() {
    stato.pesi.sort((a,b)=>new Date(a.data)-new Date(b.data));
    const list = document.getElementById('peso-list');
    list.innerHTML = stato.pesi.map(p => `<div class='flex justify-between text-xs py-1'><span>${p.data}: ${p.valore}kg</span><button onclick='eliminaPeso(${p.id})' class='text-red-500'>Elimina</button></div>`).join('');
    
    if(stato.pesi.length > 0) {
        const avg = (stato.pesi.slice(-7).reduce((a,b)=>a+b.valore, 0) / Math.min(7, stato.pesi.length)).toFixed(1);
        document.getElementById('peso-media').innerText = avg + " kg";
    }
    const ctx = document.getElementById('pesoChart').getContext('2d');
    if(chart) chart.destroy();
    chart = new Chart(ctx, {
        type: 'line',
        data: { labels: stato.pesi.map(p=>p.data), datasets: [{ label: 'Peso', data: stato.pesi.map(p=>p.valore), borderColor: '#2563eb' }] }
    });
}
function salvaPeso(e) {
    e.preventDefault();
    const d = document.getElementById('peso-data').value;
    const v = parseFloat(document.getElementById('peso-valore').value);
    stato.pesi.push({ id: Date.now(), data: d, valore: v });
    salvaStato(); aggiornaPeso();
}
function eliminaPeso(id) {
    stato.pesi = stato.pesi.filter(p=>p.id!==id);
    salvaStato(); aggiornaPeso();
}
window.onload = inizializzaApp;
if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
