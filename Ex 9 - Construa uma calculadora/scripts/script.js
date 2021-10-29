let operacao = window.prompt("Insira a operação que deseja realizar: + \n+ Para Adicionar\n- Para Subtrair\n* Para Multiplicar\n/ Para dividir", []);
x = parseInt(window.prompt("Entre com o primeiro valor que deseja calcular", []));
y =  parseInt(window.prompt("Entre com o segundo valor que deseja calcular", []));

function btnClick() {
    let resultado = window.confirm("Deseja visualizar as respostas?");

    if (resultado == true) {
        switch (operacao) {
            case '+':
                window.alert("O resultado da soma é: " + (x + y));
                break;
            case '-':
                window.alert("O resultado da subtração é: " + (x - y));
                break;
            case '*':
                window.alert("O resultado da multiplicação é: " + (x * y));
                break;
            case '/':
                window.alert("O resultado da divisão é: " + (x / y));
                break;

            default:
                window.alert("Não foi possivel realizar o calculo. Recarrege a página e entre com uma operação válida.");
                break;
        }
    }
    else {
        window.alert("Confirmação recusada");
    }
}