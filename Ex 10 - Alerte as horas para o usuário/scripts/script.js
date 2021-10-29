let data = new Date();

let hora = data.getHours();
let min = data.getMinutes();

window.alert("O horário atual é: " + hora + ":" + min + ".");

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        window.alert("O horário atual é: " + hora + ":" + min + ".");
    }
    else {
        window.alert("Confirmação recusada");
    }
}