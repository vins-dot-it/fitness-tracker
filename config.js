// Collegamento al database Supabase condiviso con l'app SPESA.
// La chiave "publishable" è pensata per stare nel codice del browser: la protezione dei dati
// è data dalle regole RLS della tabella su Supabase (le stesse usate da SPESA).
const SPESA_CONFIG = {
    url: "https://lhvbtioqqvvvprdmdhmi.supabase.co",
    key: "sb_publishable_G8_JOzVzUvv1FXmsF31boQ_WbhPFZdS",
    table: "shopping_items"
};
const SPESA_STORES = { eurospin: "Eurospin", esselunga: "Esselunga" };
