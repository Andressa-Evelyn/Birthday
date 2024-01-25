'use strict'

const formatarDigito = (digito) => {
   return `0${digito}`.slice(-2)  //esqueci de botar o return
};

const formatarDigitoDia = (digito) => {
    return `0${digito}`.slice(-3)
}

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60))/60) //divido por 60, porque tô passando de segundo pra minuto
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24))/ (60 * 60))
    const qtdDias = Math.floor(tempo /(60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigitoDia(qtdDias);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if(tempo === 0){
            pararContagem()
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar,1000) //1000 milisegundos = 1 segundo
}

const tempoRestante = () => {
    const dataEvento = new Date('2024-06-28 20:00:');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje)/ 1000) //divido por mil para passar de milisegundos para segundoe  assim realizara as operações da função atualizar()
}

contagemRegressiva(tempoRestante());