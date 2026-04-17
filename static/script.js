async function controllaCredenziali() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) return alert("Inserisci le credenziali");
    const res = await fetch(`/login?username=${username}&password=${password}`); //passiamo al server i dati
    const dati = await res.json(); //aspettiamo la sisposta del server
    document.getElementById('risultato').innerText = dati.messaggio;
}