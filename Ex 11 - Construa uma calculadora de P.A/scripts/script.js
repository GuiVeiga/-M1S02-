var valorInicial = Number(prompt('digite o valor inicial'));

const raiz = Number(prompt('Valor da raiz'));

function btnClick() {
    if (isNaN(valorInicial) || isNaN(raiz)) {
        alert('Digite somente números');
    }
    else {
        var arrayPa = [valorInicial];

        for (let i = 0; i < 9; i++) {
            valorInicial += raiz

            arrayPa.push(valorInicial);

        }
        alert(arrayPa);
    }
}