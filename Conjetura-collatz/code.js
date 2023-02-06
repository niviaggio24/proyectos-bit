function parImpar_punto2(numeroresultpar) {
    let numeroUsuario2 = document.querySelector("#inputPunto2")
    let numeroresult = 0
    let numeroresultpar = 0
    let numeroimpar = 0
    let parametroval=0
    if (numeroUsuario2.value != 1) {
        if (numeroUsuario2.value % 2 == 0) {
            document.querySelector("#resultado_punto2").innerHTML = "El numero es par"
            numeroresultpar = numeroUsuario2 / 2
            
            parImpar_punto2(numeroresultpar)
            console.log(numeroresultpar)
            parametroval = numeroresultpar

        } else {
            document.querySelector("#resultado_punto2").innerHTML = "El numero es impar"
            numeroimpar = parseInt(numeroUsuario2 * 3) + 1
            parImpar_punto2(numeroimpar)
            console.log(numeroimpar)
            parametroval = numeroresultpar
        }
    }
}
