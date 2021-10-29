let nome = window.prompt("Insira o seu nome:", []);

function btnClick() {
    let resultado = window.confirm("Você deseja visualizar o nome inserido?")
    if (resultado == true) {
        window.alert("O nome inserido foi: " + nome)
    }
    else {
        window.alert("Confirmação recusada")
    }
}