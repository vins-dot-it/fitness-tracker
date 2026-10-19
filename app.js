/* Fitness Tracker – piano alimentare ON/OFF + preparazione pasti. Nessuna dipendenza esterna. */

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

// Kcal di pranzo e cena allineate al file "Piani alimentari 3 e 4 allenamenti"
const variantiON = [
    { id: "on_v1", nome: "1- Riso Pollo / Salmone", pranzo: "Riso basmati 110 g; pollo 180 g; zucchine 250 g; olio EVO 10 g", kcal_p: 731, cena: "Salmone 150 g; patate 250 g; insalata 250 g; olio EVO 5 g", kcal_c: 560 },
    { id: "on_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g; pollo 180 g; peperoni 250 g; olio EVO 10 g", kcal_p: 766, cena: "Merluzzo 200 g; cous cous 80 g; verdure miste 300 g; olio EVO 10 g", kcal_c: 634 },
    { id: "on_v3", nome: "3- Pasta Pollo / Merluzzo", pranzo: "Pasta 110 g cruda; pollo 180 g; passata 150 g; verdure 200 g; olio EVO 10 g", kcal_p: 762, cena: "Merluzzo 220 g; cous cous 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 650 },
    { id: "on_v4", nome: "4- Riso Tonno / Bresaola", pranzo: "Riso basmati 110 g; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 710, cena: "Bresaola 100 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g; 1 frutto medio", kcal_c: 645 },
    { id: "on_v5", nome: "5- Pasta Tonno / Manzo", pranzo: "Pasta integrale 110 g cruda; tonno naturale 150 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 676, cena: "Manzo magro 170 g; pane integrale 100 g; broccoli 300 g; olio EVO 10 g", kcal_c: 664 },
    { id: "on_v6", nome: "6- Riso Ceci Pollo / Pollo", pranzo: "Riso basmati 110 g; ceci 150 g cotti e sgocciolati; pollo 150 g; zucchine 250 g; olio EVO 10 g", kcal_p: 818, cena: "Pollo 180 g; pane integrale 100 g; spinaci 300 g; olio EVO 10 g", kcal_c: 628 },
    { id: "on_v7", nome: "7- Pasta Pollo / Manzo", pranzo: "Pasta 110 g cruda; pollo 180 g; passata 150 g; zucchine 200 g; olio EVO 10 g", kcal_p: 746, cena: "Manzo magro 170 g; patate 250 g; insalata 250 g; olio EVO 10 g", kcal_c: 572 }
];

const variantiOFF = [
    { id: "off_v1", nome: "1- Pasta Tonno / Manzo", pranzo: "Pasta integrale 150 g cruda; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 790, cena: "Manzo magro 170 g; pane integrale 90 g; broccoli 300 g; olio EVO 10 g", kcal_c: 639 },
    { id: "off_v2", nome: "2- Riso Pollo / Merluzzo", pranzo: "Riso basmati 110 g; pollo 180 g; peperoni 250 g; olio EVO 10 g", kcal_p: 766, cena: "Merluzzo 200 g; cous cous 80 g; verdure miste 300 g; olio EVO 10 g", kcal_c: 634 },
    { id: "off_v3", nome: "3- Riso Ceci Pollo / Merluzzo", pranzo: "Riso basmati 80 g; ceci 180 g cotti e sgocciolati; pollo 120 g; zucchine 250 g; olio EVO 10 g", kcal_p: 713, cena: "Merluzzo 220 g; pane integrale 90 g; spinaci 300 g; olio EVO 10 g", kcal_c: 560 },
    { id: "off_v4", nome: "4- Pasta Tonno / Merluzzo", pranzo: "Pasta integrale 115 g; tonno naturale 120 g sgocciolato; pomodori 250 g; olio EVO 10 g", kcal_p: 671, cena: "Merluzzo 220 g; pane integrale 100 g; verdure 300 g; olio EVO 10 g", kcal_c: 595 },
    { id: "off_v5", nome: "5- Riso Ceci Pollo / Merluzzo", pranzo: "Riso basmati 95 g; ceci 150 g cotti e sgocciolati; pollo 120 g; zucchine 250 g; olio EVO 10 g", kcal_p: 731, cena: "Merluzzo 220 g; pane integrale 80 g; verdure 300 g; olio EVO 10 g", kcal_c: 545 }
];


/* ---------- Ingredienti strutturati (per la sezione Prep) ---------- */
// vita = giorni di conservazione in frigo del cotto (stima prudente)
const ALIMENTI = {
    riso:      { n: "Riso basmati",      cat: "Basi",           nota: "a crudo", vita: 3 },
    pasta:     { n: "Pasta",             cat: "Basi",           nota: "a crudo", vita: 3 },
    pasta_int: { n: "Pasta integrale",   cat: "Basi",           nota: "a crudo", vita: 3 },
    couscous:  { n: "Cous cous",         cat: "Basi",           vita: 3 },
    patate:    { n: "Patate",            cat: "Basi",           vita: 4 },
    pane:      { n: "Pane integrale",    cat: "Basi",           vita: 4 },
    pollo:     { n: "Pollo",             cat: "Proteine",       vita: 4 },
    manzo:     { n: "Manzo magro",       cat: "Proteine",       vita: 4 },
    salmone:   { n: "Salmone",           cat: "Proteine",       vita: 2 },
    merluzzo:  { n: "Merluzzo",          cat: "Proteine",       vita: 2 },
    tonno:     { n: "Tonno naturale",    cat: "Proteine",       nota: "sgocciolato", vita: 4 },
    bresaola:  { n: "Bresaola",          cat: "Proteine",       vita: 4 },
    ceci:      { n: "Ceci",              cat: "Proteine",       nota: "cotti e sgocciolati", vita: 4 },
    zucchine:  { n: "Zucchine",          cat: "Verdure e sughi", vita: 4 },
    peperoni:  { n: "Peperoni",          cat: "Verdure e sughi", vita: 4 },
    pomodori:  { n: "Pomodori",          cat: "Verdure e sughi", vita: 4 },
    broccoli:  { n: "Broccoli",          cat: "Verdure e sughi", vita: 4 },
    spinaci:   { n: "Spinaci",           cat: "Verdure e sughi", vita: 4 },
    insalata:  { n: "Insalata",          cat: "Verdure e sughi", vita: 4 },
    verdure:   { n: "Verdure miste",     cat: "Verdure e sughi", vita: 4 },
    passata:   { n: "Passata di pomodoro", cat: "Verdure e sughi", vita: 4 },
    frutto:    { n: "Frutto medio",      cat: "Frutta",         u: "pz" },
    olio:      { n: "Olio EVO",          cat: "Condimenti" }
};
const CATEGORIE = ["Basi", "Proteine", "Verdure e sughi", "Frutta", "Condimenti"];

// [alimento, quantità] per pranzo (p) e cena (c) di ogni variante
const INGREDIENTI = {
    on_v1:  { p: [["riso",110],["pollo",180],["zucchine",250],["olio",10]],              c: [["salmone",150],["patate",250],["insalata",250],["olio",5]] },
    on_v2:  { p: [["riso",110],["pollo",180],["peperoni",250],["olio",10]],              c: [["merluzzo",200],["couscous",80],["verdure",300],["olio",10]] },
    on_v3:  { p: [["pasta",110],["pollo",180],["passata",150],["verdure",200],["olio",10]], c: [["merluzzo",220],["couscous",80],["verdure",300],["olio",10]] },
    on_v4:  { p: [["riso",110],["tonno",150],["pomodori",250],["olio",10]],              c: [["bresaola",100],["pane",100],["verdure",300],["olio",10],["frutto",1]] },
    on_v5:  { p: [["pasta_int",110],["tonno",150],["pomodori",250],["olio",10]],         c: [["manzo",170],["pane",100],["broccoli",300],["olio",10]] },
    on_v6:  { p: [["riso",110],["ceci",150],["pollo",150],["zucchine",250],["olio",10]], c: [["pollo",180],["pane",100],["spinaci",300],["olio",10]] },
    on_v7:  { p: [["pasta",110],["pollo",180],["passata",150],["zucchine",200],["olio",10]], c: [["manzo",170],["patate",250],["insalata",250],["olio",10]] },
    off_v1: { p: [["pasta_int",150],["tonno",120],["pomodori",250],["olio",10]],         c: [["manzo",170],["pane",90],["broccoli",300],["olio",10]] },
    off_v2: { p: [["riso",110],["pollo",180],["peperoni",250],["olio",10]],              c: [["merluzzo",200],["couscous",80],["verdure",300],["olio",10]] },
    off_v3: { p: [["riso",80],["ceci",180],["pollo",120],["zucchine",250],["olio",10]],  c: [["merluzzo",220],["pane",90],["spinaci",300],["olio",10]] },
    off_v4: { p: [["pasta_int",115],["tonno",120],["pomodori",250],["olio",10]],         c: [["merluzzo",220],["pane",100],["verdure",300],["olio",10]] },
    off_v5: { p: [["riso",95],["ceci",150],["pollo",120],["zucchine",250],["olio",10]],  c: [["merluzzo",220],["pane",80],["verdure",300],["olio",10]] }
};

const GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];
const STORAGE_KEY = "fitTrackerStateV2_BraveAzzurro"; // invariata: i dati già salvati restano

const DEFAULT_STATE = {
    struttura: { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" },
    sceltePasti: { "lunedì": "on_v1", "martedì": "off_v1", "mercoledì": "on_v2", "giovedì": "off_v3", "venerdì": "on_v7" },
    prep: { "lunedì": { p: true, c: true }, "martedì": { p: true, c: true }, "mercoledì": { p: true, c: true }, "giovedì": { p: true, c: true }, "venerdì": { p: true, c: true } }
};

/* ---------- Stato ---------- */
function loadState() {
    try {
        const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (s && typeof s === "object") {
            return {
                struttura: { ...DEFAULT_STATE.struttura, ...(s.struttura || {}) },
                sceltePasti: { ...DEFAULT_STATE.sceltePasti, ...(s.sceltePasti || {}) },
                prep: { ...DEFAULT_STATE.prep, ...(s.prep || {}) }
            };
        }
    } catch (e) { /* storage non disponibile o dati corrotti */ }
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
}
let appState = loadState();
function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(appState)); } catch (e) { toast("Impossibile salvare i dati"); } }

/* ---------- Utilità ---------- */
const $ = (id) => document.getElementById(id);
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const listFor = (type) => (type === "ON" ? variantiON : variantiOFF);
function findVariante(type, id) { return listFor(type).find(v => v.id === id); }
let toastTimer;
function toast(msg) {
    const t = $("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}
function todayIndex() {
    const d = new Date().getDay(); // 0=dom
    return d >= 1 && d <= 5 ? d - 1 : 0; // nel weekend mostra lunedì
}
let currentOggiIndex = todayIndex();

/* ---------- Navigazione ---------- */
document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".nav-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
        btn.classList.add("active"); btn.setAttribute("aria-selected", "true");
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        const target = btn.dataset.target;
        $(target).classList.add("active");
        window.scrollTo({ top: 0 });
        if (target === "tab-oggi") renderOggi();
        if (target === "tab-struttura") renderStruttura();
        if (target === "tab-pasti") renderScegliPasti();
        if (target === "tab-prep") renderPrep();
    });
});

/* ---------- OGGI ---------- */
function renderDayBar() {
    const bar = $("daybar");
    bar.innerHTML = "";
    const realToday = new Date().getDay() - 1;
    GIORNI.forEach((g, i) => {
        const type = appState.struttura[g];
        const b = document.createElement("button");
        b.className = "day-chip" + (i === currentOggiIndex ? " sel" : "") + (i === realToday ? " today" : "");
        b.setAttribute("role", "tab");
        b.setAttribute("aria-selected", i === currentOggiIndex);
        b.innerHTML = `<span class="d">${g.slice(0, 3)}</span><span class="t ${type}">${type}</span>`;
        b.addEventListener("click", () => { currentOggiIndex = i; renderOggi(); });
        bar.appendChild(b);
    });
}

function mealsForDay(giorno) {
    const type = appState.struttura[giorno];
    const list = baseMeals[type].map(m => ({ ...m }));
    const v = findVariante(type, appState.sceltePasti[giorno]);
    if (v) {
        list.push({ pasto: "Pranzo", icona: "🍽️", alimenti: v.pranzo, kcal: v.kcal_p, ordine: 4, key: true, sub: v.nome });
        list.push({ pasto: "Cena", icona: "🌙", alimenti: v.cena, kcal: v.kcal_c, ordine: 6, key: true, sub: v.nome });
    }
    return list.sort((a, b) => a.ordine - b.ordine);
}

function renderOggi() {
    renderDayBar();
    const giorno = GIORNI[currentOggiIndex];
    const type = appState.struttura[giorno];
    const meals = mealsForDay(giorno);
    const total = meals.reduce((s, m) => s + m.kcal, 0);

    $("oggi-total-kcal").textContent = total;
    $("oggi-day-type").textContent = `${cap(giorno)} · ${type === "ON" ? "Allenamento (ON)" : "Riposo (OFF)"}`;

    const split = $("hero-split");
    split.innerHTML = "";
    meals.forEach(m => {
        const s = document.createElement("span");
        s.style.width = (m.kcal / total * 100) + "%";
        s.title = `${m.pasto}: ${m.kcal} kcal`;
        split.appendChild(s);
    });

    const container = $("oggi-meals-container");
    container.innerHTML = "";
    meals.forEach(m => {
        const card = document.createElement("div");
        card.className = "meal" + (m.key ? " key" : "");
        card.innerHTML = `
            <span class="meal-ico">${m.icona}</span>
            <span class="meal-name">${m.pasto}${m.sub ? `<small>Variante ${m.sub}</small>` : ""}</span>
            <span class="meal-kcal">${m.kcal} kcal</span>
            <p class="meal-food">${m.alimenti}</p>`;
        container.appendChild(card);
    });
}

/* ---------- STRUTTURA ---------- */
function renderStruttura() {
    const container = $("struttura-giorni-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const row = document.createElement("div");
        row.className = "row";
        const cur = appState.struttura[g];
        row.innerHTML = `<span>${g}</span>
            <select id="select-struct-${g}" aria-label="Tipo giorno ${g}">
                <option value="ON" ${cur === "ON" ? "selected" : ""}>ON · allenamento</option>
                <option value="OFF" ${cur === "OFF" ? "selected" : ""}>OFF · riposo</option>
            </select>`;
        container.appendChild(row);
    });
}

function applyPlan(struttura, label) {
    if (!confirm(`Caricare il piano ${label}? Le varianti scelte verranno azzerate.`)) return;
    appState.struttura = struttura;
    GIORNI.forEach(g => { appState.sceltePasti[g] = struttura[g] === "ON" ? "on_v1" : "off_v1"; });
    saveState(); renderStruttura(); renderDayBar();
    toast(`Piano ${label} caricato`);
}
$("btn-plan-3").addEventListener("click", () => applyPlan({ "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" }, "3 allenamenti"));
$("btn-plan-4").addEventListener("click", () => applyPlan({ "lunedì": "ON", "martedì": "ON", "mercoledì": "OFF", "giovedì": "ON", "venerdì": "ON" }, "4 allenamenti"));

$("save-struttura").addEventListener("click", () => {
    GIORNI.forEach(g => {
        const val = $(`select-struct-${g}`).value;
        if (appState.struttura[g] !== val) {
            appState.struttura[g] = val;
            appState.sceltePasti[g] = val === "ON" ? "on_v1" : "off_v1";
        }
    });
    saveState(); toast("Struttura salvata");
});

/* ---------- SCEGLI PASTI ---------- */
function renderScegliPasti() {
    const container = $("scegli-pasti-container");
    container.innerHTML = "";
    GIORNI.forEach(g => {
        const type = appState.struttura[g];
        let current = appState.sceltePasti[g];
        if (!findVariante(type, current)) { current = listFor(type)[0].id; appState.sceltePasti[g] = current; saveState(); }

        const block = document.createElement("div");
        block.className = "day-block";
        const options = listFor(type).map(v =>
            `<option value="${v.id}" ${v.id === current ? "selected" : ""}>${v.nome}</option>`).join("");
        block.innerHTML = `
            <div class="day-head"><strong>${g}</strong><span class="tag ${type}">${type}</span></div>
            <select id="select-pasto-${g}" aria-label="Variante ${g}">${options}</select>
            <div id="preview-${g}" class="preview"></div>`;
        container.appendChild(block);
        updateLivePreview(g, current, type);

        $(`select-pasto-${g}`).addEventListener("change", (e) => {
            appState.sceltePasti[g] = e.target.value; saveState(); updateLivePreview(g, e.target.value, type);
        });
    });
}

function updateLivePreview(giorno, varianteId, type) {
    const el = $(`preview-${giorno}`);
    const v = findVariante(type, varianteId);
    if (!v) { el.innerHTML = `<p class="empty">Nessuna variante selezionata</p>`; return; }
    el.innerHTML = `
        <div><div class="prev-row"><span>🍽️ Pranzo</span><span class="k">${v.kcal_p} kcal</span></div><p class="prev-food">${v.pranzo}</p></div>
        <div><div class="prev-row"><span>🌙 Cena</span><span class="k">${v.kcal_c} kcal</span></div><p class="prev-food">${v.cena}</p></div>
        <div class="prev-tot"><span>Pranzo + cena</span><span>${v.kcal_p + v.kcal_c} kcal</span></div>`;
}

/* ---------- PREP ---------- */
const SHORT = { "lunedì": "lun", "martedì": "mar", "mercoledì": "mer", "giovedì": "gio", "venerdì": "ven" };

function renderPrep() {
    const host = $("prep-giorni");
    host.innerHTML = "";
    GIORNI.forEach(g => {
        const type = appState.struttura[g];
        const st = appState.prep[g] || { p: false, c: false };
        const row = document.createElement("div");
        row.className = "prep-row";
        row.innerHTML = `
            <label class="chk day"><input type="checkbox" data-g="${g}" data-k="day"><span class="dn">${g}<span class="tag ${type}">${type}</span></span></label>
            <label class="chk"><input type="checkbox" data-g="${g}" data-k="p" ${st.p ? "checked" : ""}><span>Pranzo</span></label>
            <label class="chk"><input type="checkbox" data-g="${g}" data-k="c" ${st.c ? "checked" : ""}><span>Cena</span></label>`;
        const day = row.querySelector('[data-k="day"]');
        day.checked = st.p && st.c;
        day.indeterminate = st.p !== st.c;
        host.appendChild(row);
    });
    host.querySelectorAll("input").forEach(inp => inp.addEventListener("change", () => {
        const g = inp.dataset.g, k = inp.dataset.k;
        const st = appState.prep[g] || { p: false, c: false };
        if (k === "day") { st.p = inp.checked; st.c = inp.checked; } else { st[k] = inp.checked; }
        appState.prep[g] = st;
        saveState(); renderPrep();
    }));
    renderPrepRecap();
}

function buildPrep() {
    const tot = {};        // key -> { qty, porz: [{q, label}] }
    const meals = [];      // { gi, giorno, k, items }
    GIORNI.forEach((g, gi) => {
        const st = appState.prep[g] || {};
        const ing = INGREDIENTI[appState.sceltePasti[g]];
        if (!ing) return;
        [["p", "pranzo"], ["c", "cena"]].forEach(([k, label]) => {
            if (!st[k]) return;
            meals.push({ gi, giorno: g, k, label, items: ing[k] });
            ing[k].forEach(([key, q]) => {
                const t = tot[key] || (tot[key] = { qty: 0, porz: [] });
                t.qty += q; t.porz.push({ q, tag: `${SHORT[g]} ${k === "p" ? "pranzo" : "cena"}` });
            });
        });
    });
    return { tot, meals };
}

function fmtQty(key, q) { return ALIMENTI[key].u === "pz" ? `${q} pz` : `${q} g`; }
function porzioniText(key, list) {
    const by = {};
    list.forEach(p => { by[p.q] = (by[p.q] || 0) + 1; });
    return Object.keys(by).map(Number).sort((a, b) => by[b] - by[a] || b - a)
        .map(q => `${by[q]} × ${fmtQty(key, q)}`).join(" · ");
}

function renderPrepRecap() {
    const { tot, meals } = buildPrep();
    const recap = $("prep-recap"), warn = $("prep-warn");
    [...prepSel].forEach(k => { if (!tot[k]) prepSel.delete(k); });
    Object.keys(prepSent).forEach(k => { if (!tot[k] || prepSent[k].qty !== tot[k].qty) delete prepSent[k]; });
    $("prep-title").textContent = meals.length ? `Recap · ${meals.length} ${meals.length === 1 ? "pasto" : "pasti"}` : "Recap";

    if (!meals.length) { recap.innerHTML = `<p class="empty">Spunta almeno un pranzo o una cena</p>`; warn.hidden = true; updateSendBar(); return; }

    let html = "";
    CATEGORIE.forEach(cat => {
        const keys = Object.keys(tot).filter(k => ALIMENTI[k].cat === cat).sort((a, b) => ALIMENTI[a].n.localeCompare(ALIMENTI[b].n, "it"));
        if (!keys.length) return;
        html += `<p class="recap-cat">${cat}</p>`;
        keys.forEach(k => {
            const a = ALIMENTI[k], t = tot[k];
            const sent = prepSent[k] && prepSent[k].qty === t.qty ? `<small class="sent">✓ ${SPESA_STORES[prepSent[k].store]}</small>` : "";
            html += `<label class="ing"><input type="checkbox" class="ing-chk" data-k="${k}" ${prepSel.has(k) ? "checked" : ""}><span class="ing-n">${a.n}${a.nota ? `<small>${a.nota}</small>` : ""}${sent}</span><span class="ing-q">${fmtQty(k, t.qty)}</span><span class="ing-d">${porzioniText(k, t.porz)}</span></label>`;
        });
    });
    recap.innerHTML = html;

    // Avvisi di conservazione: si assume la cottura il giorno prima del primo pasto selezionato
    const first = Math.min(...meals.map(m => m.gi));
    const issues = {};
    meals.forEach(m => {
        const age = m.gi - first + 1;
        m.items.forEach(([key]) => {
            const v = ALIMENTI[key].vita;
            if (v && age > v) (issues[key] = issues[key] || []).push(`${SHORT[m.giorno]} ${m.label} (${age} gg)`);
        });
    });
    const keys = Object.keys(issues);
    if (keys.length) {
        warn.hidden = false;
        warn.innerHTML = `<strong>Conservazione in frigo</strong>` + keys.map(k =>
            `${ALIMENTI[k].n} (max ${ALIMENTI[k].vita} gg dalla cottura): ${[...new Set(issues[k])].join(", ")}.`).join("<br>") +
            `<br><em>Cuoci questi alimenti a parte più avanti oppure congelali. Stima con cottura il giorno prima del primo pasto.</em>`;
    } else { warn.hidden = true; }
    updateSendBar();
}

/* ---------- Invio alla lista SPESA (Supabase) ---------- */
const prepSel = new Set();      // alimenti spuntati per l'invio
const prepSent = {};            // alimento -> { store, qty } già inviati in questa sessione
let sendStore = "eurospin";
try { const s = localStorage.getItem("fit_send_store"); if (SPESA_STORES[s]) sendStore = s; } catch (e) {}
let sending = false;

function prepItemText(k, t) { return `${ALIMENTI[k].n} ${fmtQty(k, t.qty)}`; }

function updateSendBar() {
    const { tot, meals } = buildPrep();
    const bar = $("sendbar");
    bar.hidden = !meals.length;
    document.querySelectorAll(".seg-b").forEach(b => {
        const on = b.dataset.s === sendStore;
        b.classList.toggle("on", on); b.setAttribute("aria-checked", on);
    });
    const n = prepSel.size;
    const btn = $("btn-send");
    btn.textContent = sending ? "Invio..." : `Invia (${n})`;
    btn.disabled = sending || n === 0;
}

async function insertSpesa(rows) {
    const c = SPESA_CONFIG, ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
        const r = await fetch(`${c.url}/rest/v1/${c.table}`, {
            method: "POST",
            headers: { apikey: c.key, Authorization: `Bearer ${c.key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
            body: JSON.stringify(rows),
            signal: ctrl.signal
        });
        if (!r.ok) {
            let msg = ""; try { msg = (await r.json()).message; } catch (e) {}
            throw new Error(msg || `Errore ${r.status}`);
        }
    } finally { clearTimeout(timer); }
}

async function sendPrepToSpesa() {
    if (sending || !prepSel.size) return;
    const { tot } = buildPrep();
    const keys = CATEGORIE.flatMap(cat => [...prepSel].filter(k => tot[k] && ALIMENTI[k].cat === cat)
        .sort((a, b) => ALIMENTI[a].n.localeCompare(ALIMENTI[b].n, "it")));
    if (!keys.length) return;
    const store = sendStore;
    const rows = keys.map(k => ({ store, item: prepItemText(k, tot[k]), checked: false }));
    sending = true; updateSendBar();
    try {
        await insertSpesa(rows);
        keys.forEach(k => { prepSent[k] = { store, qty: tot[k].qty }; prepSel.delete(k); });
        toast(`${rows.length} ${rows.length === 1 ? "prodotto inviato" : "prodotti inviati"} a ${SPESA_STORES[store]}`);
    } catch (e) {
        toast(e.name === "AbortError" || e.name === "TypeError" || !navigator.onLine ? "Connessione assente: nulla è stato inviato" : `Invio non riuscito: ${e.message}`);
    } finally { sending = false; renderPrepRecap(); }
}

$("prep-recap").addEventListener("change", (e) => {
    const inp = e.target.closest(".ing-chk");
    if (!inp) return;
    if (inp.checked) prepSel.add(inp.dataset.k); else prepSel.delete(inp.dataset.k);
    updateSendBar();
});
document.querySelectorAll(".seg-b").forEach(b => b.addEventListener("click", () => {
    sendStore = b.dataset.s;
    try { localStorage.setItem("fit_send_store", sendStore); } catch (e) {}
    updateSendBar();
}));
$("sel-all").addEventListener("click", () => { Object.keys(buildPrep().tot).forEach(k => prepSel.add(k)); renderPrepRecap(); });
$("sel-none").addEventListener("click", () => { prepSel.clear(); renderPrepRecap(); });
$("btn-send").addEventListener("click", sendPrepToSpesa);

/* ---------- PWA: service worker + installazione ---------- */
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(err => console.error("Errore SW:", err));
    });
}

let deferredInstall = null;
const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

if (!isStandalone) {
    if (isIOS) {
        $("install-card").hidden = false;
        $("install-text").textContent = "Su iPhone/iPad: tocca Condividi in Safari e poi “Aggiungi a Home” per installare l'app.";
    }
    window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault(); deferredInstall = e;
        $("install-card").hidden = false; $("btn-install").hidden = false;
    });
    $("btn-install").addEventListener("click", async () => {
        if (!deferredInstall) return;
        deferredInstall.prompt();
        await deferredInstall.userChoice;
        deferredInstall = null; $("install-card").hidden = true;
    });
}
window.addEventListener("appinstalled", () => { $("install-card").hidden = true; toast("App installata"); });

/* ---------- Avvio ---------- */
$("appbar-date").textContent = new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" });
renderOggi();
