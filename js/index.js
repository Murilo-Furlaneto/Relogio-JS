const atualizaRelogio = () => {
    let date = new Date(); //acessa a data atual
    let hora = date.getHours(); // acessa a hora 
    let minuto = date.getMinutes(); // acessa os minutos
    let segundo = date.getSeconds(); // acessa os segundos

    let tempo = hora + ':' + minuto + ':' + segundo;

    document.getElementById('relogio').innerHTML = tempo;
}

setInterval(atualizaRelogio, 1000) // atualize a função a cada mil milisegundos
