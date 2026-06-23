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
