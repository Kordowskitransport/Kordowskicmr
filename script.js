function zaloguj() {

let login = document.getElementById("login").value;
let haslo = document.getElementById("haslo").value;

if(login === "admin" && haslo === "1234"){
    window.location.href = "index.html";
}
else{
    document.getElementById("blad").innerHTML =
    "Nieprawidłowy login lub hasło";
}

}
let numer = localStorage.getItem("numerCMR");

if (!numer) {
    numer = 1;
}

document.getElementById("numerCMR").innerHTML =
"Numer CMR: CMR-2026-" + String(numer).padStart(6, "0");
function zapiszCMR() {

let dokument = {
    numer: "CMR-" + Date.now(),
    nadawca: document.getElementById("nadawca").value,
    odbiorca: document.getElementById("odbiorca").value,
    kierowca: document.getElementById("kierowca").value,
    towar: document.getElementById("towar").value,
    waga: document.getElementById("waga").value
};

let dokumenty =
JSON.parse(localStorage.getItem("cmr")) || [];

dokumenty.push(dokument);

localStorage.setItem("cmr",
JSON.stringify(dokumenty));

alert("Dokument zapisany!");
}
let dokumenty =
JSON.parse(localStorage.getItem("cmr")) || [];

let tabela = document.getElementById("listaCMR");

if(tabela){

dokumenty.forEach(cmr => {

tabela.innerHTML += `
<tr>
<td>${cmr.numer}</td>
<td>${cmr.nadawca}</td>
<td>${cmr.odbiorca}</td>
<td>${cmr.kierowca}</td>
<td>${cmr.towar}</td>
<td>${cmr.waga}</td>
</tr>
`;

});

}
function dodajUzytkownika(){

let login = document.getElementById("nowyLogin").value;
let haslo = document.getElementById("noweHaslo").value;

let users =
JSON.parse(localStorage.getItem("users")) || [];

users.push({
login: login,
haslo: haslo
});

localStorage.setItem("users", JSON.stringify(users));

wyswietlUserow();

}

function wyswietlUserow(){

let users =
JSON.parse(localStorage.getItem("users")) || [];

let lista = document.getElementById("listaUserow");

if(lista){

lista.innerHTML="";

users.forEach(user=>{

lista.innerHTML += `
<p>${user.login}</p>
`;

});

}

}

wyswietlUserow();
function zaloguj() {

    let login = document.getElementById("login").value;
    let haslo = document.getElementById("haslo").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u =>
        u.login === login &&
        u.haslo === haslo
    );

    if(user){

        localStorage.setItem("zalogowany", login);

        window.location.href = "index.html";

    } else {

        document.getElementById("blad").innerHTML =
        "Nieprawidłowy login lub hasło";

    }
}
