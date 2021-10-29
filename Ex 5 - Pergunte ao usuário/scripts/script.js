let nome = window.prompt("Insira o seu nome:", []);
let idade = window.prompt("Insira sua idade:", []);
let esporte = window.confirm("Gosta de praticar algum esporte?", []);

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        window.alert(console.log("Nome: " + nome
            + "\nIdade: " + idade
            + "\nGosta de fazer esporte? " + esporte));

    }
    else {
        window.alert("Confirmação recusada");
    }
}