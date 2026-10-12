type === "ON" ? "⚡ GIORNO DI ALLENAMENTO (ON)" : "💤 GIORNO DI RIPOSO (OFF)";
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