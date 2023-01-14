/* Funcão que corrigi o formato do cpf */
function corrFormatCPF (e){
    let cpfF3 = e.value.substr(0,3);
    let cpfF6 = e.value.substr(4,3);
    let cpfF9 = e.value.substr(8,3);
    if (e.value.length > 2 && e.value.length <= 5){
        e.value = cpfF3 + "." + e.value.substr(4);
        console.log("o cpfF3 = " + cpfF3);
    }
    else if (e.value.length > 6 && e.value.length <= 8) {
        e.value = cpfF3 + "." + cpfF6 + "." + e.value.substr(7);
        console.log("o cpfF3 = " + cpfF3 + "\no cpfF6 = " + cpfF6);
    }
    else if (e.value.length > 10) {
        e.value = cpfF3 + "." + cpfF6 + "." + cpfF9 + "-" + e.value.substr(12);
        console.log("o cpfF3 = " + cpfF3 + "\no cpfF6 = " + cpfF6 + "\no cpfF9 = " + cpfF9);
    }
}

function justNumbers (e){
    let cod = event.charCode;
    if (cod < 48 || cod > 57){
        e.value = "";
        alert("Por favor, digite apenas números!")
    }
}