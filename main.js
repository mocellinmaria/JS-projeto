function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "Prazo Finalizado";
    }
}

function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();
