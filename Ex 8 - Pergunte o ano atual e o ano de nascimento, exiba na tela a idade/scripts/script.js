let anoNascimento = window.prompt("Insira o seu ano de nascimento:", []);
let anoAtual = window.prompt("Insira o ano atual:", []);

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        let idade = anoAtual - anoNascimento;
        window.alert("Sua idade é " + (idade-1) + " ou " + idade + " anos.");
    }
    else {
        window.alert("Confirmação recusada");
    }
}