x = parseInt(window.prompt("Entre com o valor inicial", []));
y = parseInt(window.prompt("Entre com o valor da raíz", []));

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {

        console.log("Valor inicial: " + x + "\nRaíz: " + y);

        for (let i = 1; i <= 10; i++) {
            x += y;
            pa = x;
            console.log("PA (" + i + "): " + pa);
        }
    }
    else {
        window.alert("Confirmação recusada");
    }
}