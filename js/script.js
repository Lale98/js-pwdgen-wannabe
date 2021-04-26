// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

var nome = prompt('inserisci il tuo nome');
var cognome = prompt('inserisci il tuo cognome');
var colore = prompt('qual è il tuo colore preferito?');

document.getElementById('password').innerHTML = nome + cognome + colore + 21;