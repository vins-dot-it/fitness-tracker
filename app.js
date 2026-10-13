/* Fitness Tracker – piano alimentare ON/OFF + peso. Nessuna dipendenza esterna. */

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

const GIORNI = ["lunedì", "martedì", "mercoledì", "giovedì", "venerdì"];
const TARGET_KG = 72.0;
const STORAGE_KEY = "fitTrackerStateV2_BraveAzzurro"; // invariata: i dati già salvati restano

const DEFAULT_STATE = {
    struttura: { "lunedì": "ON", "martedì": "OFF", "mercoledì": "ON", "giovedì": "OFF", "venerdì": "ON" },
    sceltePasti: { "lunedì": "on_v1", "martedì": "off_v1", "mercoledì": "on_v2", "giovedì": "off_v3", "venerdì": "on_v7" },
    pesi: []
};

/* ---------- Stato ---------- */
function loadState() {
    try {
        const s = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (s && typeof s === "object") {
            return {
                struttura: { ...DEFAULT_STATE.struttura, ...(s.struttura || {}) },
                sceltePasti: { ...DEFAULT_STATE.sceltePasti, ...(s.sceltePasti || {}) },
                pesi: Array.isArray(s.pesi) ? s.pesi : []
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
function localISO(d = new Date()) {
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
function fmtDate(iso, opts = { day: "numeric", month: "short", year: "numeric" }) {
    return new Date(iso + "T12:00:00").toLocaleDateString("it-IT", opts);
}
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
        if (target === "tab-peso") renderPeso();
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

/* ---------- PESO ---------- */
const sortedAsc = () => [...appState.pesi].sort((a, b) => a.date.localeCompare(b.date));

function renderPeso() {
    $("peso-date").value = localISO();
    const asc = sortedAsc();
    const desc = [...asc].reverse();

    if (desc.length) {
        const recent = desc.slice(0, 7);
        $("peso-media").textContent = `${(recent.reduce((s, p) => s + p.value, 0) / recent.length).toFixed(1)} kg`;
    } else { $("peso-media").textContent = "--"; }

    calculatePrediction(asc);

    const log = $("peso-log");
    log.innerHTML = "";
    if (!desc.length) { log.innerHTML = `<p class="empty">Nessuna misura registrata</p>`; }
    desc.forEach((p, i) => {
        const prev = desc[i + 1];
        let delta = "";
        if (prev) {
            const d = Math.round((p.value - prev.value) * 10) / 10;
            if (d !== 0) delta = `<small class="${d > 0 ? "up" : "down"}">${d > 0 ? "+" : ""}${d.toFixed(1)}</small>`;
        }
        const row = document.createElement("div");
        row.className = "log-row";
        row.innerHTML = `<span class="log-date">${fmtDate(p.date)}</span><span class="log-val">${p.value.toFixed(1)} kg${delta}</span><button class="log-del" type="button">Elimina</button>`;
        row.querySelector("button").addEventListener("click", () => deleteWeightRecord(p.date));
        log.appendChild(row);
    });
    renderWeightChart(asc);
}

$("peso-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = $("peso-date").value;
    const val = parseFloat($("peso-val").value.replace(",", "."));
    if (!date || !isFinite(val) || val < 20 || val > 400) { toast("Inserisci un peso valido"); return; }
    const idx = appState.pesi.findIndex(p => p.date === date);
    if (idx > -1) appState.pesi[idx].value = val; else appState.pesi.push({ date, value: val });
    saveState(); $("peso-val").value = ""; renderPeso(); toast("Peso registrato");
});

function deleteWeightRecord(dateStr) {
    if (confirm("Vuoi davvero eliminare questa misura?")) {
        appState.pesi = appState.pesi.filter(p => p.date !== dateStr);
        saveState(); renderPeso();
    }
}

function calculatePrediction(sorted) {
    const el = $("peso-previsione");
    if (sorted.length < 3) { el.textContent = "Inserisci almeno 3 misure."; return; }
    const first = sorted[0], last = sorted[sorted.length - 1];
    const days = (new Date(last.date) - new Date(first.date)) / 86400000;
    const diff = last.value - first.value;
    if (days <= 0 || diff === 0) { el.textContent = "Peso stabile nel tempo."; return; }
    const rate = diff / days;
    const remaining = TARGET_KG - last.value;
    if (Math.abs(remaining) < 0.05) { el.textContent = "Target raggiunto 🎯"; return; }
    if ((remaining < 0 && rate < 0) || (remaining > 0 && rate > 0)) {
        const d = Math.ceil(remaining / rate);
        const eta = new Date(last.date + "T12:00:00"); eta.setDate(eta.getDate() + d);
        el.textContent = `~${d} giorni (circa ${eta.toLocaleDateString("it-IT", { day: "numeric", month: "short", year: "numeric" })})`;
    } else {
        el.textContent = `L'andamento attuale si allontana dal target (${TARGET_KG} kg).`;
    }
}

/* Grafico SVG leggero (sostituisce Chart.js: niente CDN, funziona offline) */
function renderWeightChart(sorted) {
    const host = $("weightChart");
    if (!sorted.length) { host.innerHTML = `<p class="empty">Registra il primo peso per vedere il grafico</p>`; return; }

    const W = 340, H = 210, L = 34, R = 12, T = 14, B = 26;
    const vals = sorted.map(p => p.value);
    let lo = Math.min(...vals, TARGET_KG) - 1, hi = Math.max(...vals, TARGET_KG) + 1;
    lo = Math.floor(lo); hi = Math.ceil(hi);
    const t0 = new Date(sorted[0].date).getTime(), t1 = new Date(sorted[sorted.length - 1].date).getTime();
    const x = (d) => sorted.length === 1 || t1 === t0 ? (L + W - R) / 2 : L + (new Date(d).getTime() - t0) / (t1 - t0) * (W - L - R);
    const y = (v) => T + (hi - v) / (hi - lo) * (H - T - B);

    let g = "";
    const steps = 4;
    for (let i = 0; i <= steps; i++) {
        const v = lo + (hi - lo) * i / steps, yy = y(v);
        g += `<line class="grid" x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}"/><text class="axis" x="${L - 6}" y="${yy + 3}" text-anchor="end">${v.toFixed(v % 1 ? 1 : 0)}</text>`;
    }
    const pts = sorted.map(p => `${x(p.date).toFixed(1)},${y(p.value).toFixed(1)}`);
    const line = sorted.length > 1 ? `<polyline class="line" points="${pts.join(" ")}"/>` : "";
    const last = sorted[sorted.length - 1];
    const dots = sorted.length <= 40 ? sorted.map(p => `<circle class="dot" cx="${x(p.date).toFixed(1)}" cy="${y(p.value).toFixed(1)}" r="3.5"/>`).join("") : `<circle class="dot" cx="${x(last.date).toFixed(1)}" cy="${y(last.value).toFixed(1)}" r="4"/>`;
    const lx = x(last.date), anchor = lx > W - 50 ? "end" : "middle";
    const ty = y(TARGET_KG);

    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Andamento del peso">
        ${g}
        <line class="target" x1="${L}" x2="${W - R}" y1="${ty}" y2="${ty}"/>
        <text class="target-l" x="${W - R}" y="${ty - 4}" text-anchor="end">Target ${TARGET_KG}</text>
        ${line}${dots}
        <text class="lastv" x="${lx}" y="${y(last.value) - 9}" text-anchor="${anchor}">${last.value.toFixed(1)}</text>
        <text class="axis" x="${L}" y="${H - 6}" text-anchor="start">${fmtDate(sorted[0].date, { day: "numeric", month: "short" })}</text>
        ${sorted.length > 1 ? `<text class="axis" x="${W - R}" y="${H - 6}" text-anchor="end">${fmtDate(last.date, { day: "numeric", month: "short" })}</text>` : ""}
    </svg>`;
}

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
