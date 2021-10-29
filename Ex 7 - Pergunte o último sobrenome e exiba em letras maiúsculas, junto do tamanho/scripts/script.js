let sobreNome = window.prompt("Insira o seu Sobrenome:", []);

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        window.alert("Olá, " + sobreNome.toUpperCase() + ". Seu sobrenome contém " + sobreNome.length + " letras.");
    }
    else {
        window.alert("Confirmação recusada");
    }
}