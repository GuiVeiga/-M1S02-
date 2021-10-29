function btnClick() {
    let resultado = window.confirm("Você realmente deseja fazer essa ação?")
    if (resultado == true) {
        window.alert("O usuário confirma: está confirmado!")
    }
    else {
        window.alert("Confirmação recusada")
    }
}