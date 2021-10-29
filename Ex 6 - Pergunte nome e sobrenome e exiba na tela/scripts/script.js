let sobreNome = window.prompt("Insira o seu Sobrenome:", []);
let nome = window.prompt("Insira o seu Nome:", []);

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        window.alert("Nome inserido: " + nome + " " + sobreNome);
    }
    else {
        window.alert("Confirmação recusada");
    }
}