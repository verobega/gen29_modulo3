let str = ["México", "Guatemala", "El Salvador", "Panamá"];
const renderArea = document.getElementById('country');

function paisMasLargo(str) {
    let mayor = str[0]
    for (i = 1; i < str.length; i++) {
        if (str[i].length > mayor.length) {
            mayor = str[i];
        }
    }
    renderArea.innerHTML = mayor
    return mayor;
}

console.log(paisMasLargo(str))

