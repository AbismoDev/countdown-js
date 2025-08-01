document.addEventListener('DOMContentLoaded', () => {
    console.log("Conteúdo Carregado!");

    // Precisamos pegar o input de data
    const inputData = document.querySelector('#data--evento');

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const valorInput = inputData.value;

        const dataEvento = new Date(valorInput);        
        
        setInterval(() => {
            const dataAtual = new Date();
            const diferencaEmMilissegundos = dataEvento.getTime() - dataAtual.getTime();  
            atualizarContador(calcularTempoEvento(diferencaEmMilissegundos));
        }, 1000);
        
    });

    function calcularTempoEvento(data) {
        // Encontrar os dias
        const tempoDia = 1000 * 60 * 60 * 24;
        const diasParaEvento = Math.floor(data / tempoDia);

        const restoDias = data % tempoDia;
        const tempoHora = 1000 * 60 * 60;
        const horasParaEvento = Math.floor(restoDias / tempoHora);

        const restoHoras = data % tempoHora;
        const tempoMinutos = 1000 * 60;
        const minutosParaEvento = Math.floor(restoHoras / tempoMinutos);

        const restoMinutos = data % tempoMinutos;
        const tempoSegudos = 1000;
        const segundosParaEvento = Math.floor(restoMinutos / tempoSegudos);

        return {dias_evento: diasParaEvento, horas_evento: horasParaEvento, minutos_evento: minutosParaEvento, segundos_evento: segundosParaEvento}
    }

    function atualizarContador(tempo) {
        const cardDia = document.querySelector("#dias");
        const cardHora = document.querySelector("#horas");
        const cardMinuto = document.querySelector("#minutos");
        const cardSegundo = document.querySelector("#segundos");

        cardDia.textContent = formataTempo(tempo.dias_evento);
        cardHora.textContent = formataTempo(tempo.horas_evento);
        cardMinuto.textContent = formataTempo(tempo.minutos_evento);
        cardSegundo.textContent = formataTempo(tempo.segundos_evento);        
    } 

    function formataTempo (tempo) {
        return (tempo < 10) ? `0${tempo}` : tempo;
    }
});