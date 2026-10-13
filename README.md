# Fitness Tracker

PWA per piano alimentare (giorni ON/OFF con kcal di pranzo e cena) e preparazione pasti (recap ingredienti).
Nessuna dipendenza esterna: HTML, CSS e JavaScript puri, funziona offline dopo la prima apertura.

## Pubblicazione su GitHub Pages

1. Crea un repository e carica tutti i file di questa cartella nella root (`index.html` deve stare in root).
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, cartella `/ (root)`.
3. Apri l'indirizzo `https://<utente>.github.io/<repository>/` dal telefono.

## Installazione

- Android/Chrome: menu → "Installa app" (oppure il pulsante nella tab Struttura).
- iPhone/iPad: Safari → Condividi → "Aggiungi a Home".

## Aggiornare l'app

Dopo ogni modifica ai file, incrementa `CACHE_NAME` in `sw.js` (es. `fit-tracker-v4`) così i dispositivi scaricano la nuova versione.
I dati (struttura e scelte) restano nel browser del dispositivo (localStorage) e non vengono toccati dagli aggiornamenti.
