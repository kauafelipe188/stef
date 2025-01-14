// Configuração inicial do contador
const startDate = new Date('2024-12-15T02:53:00'); // Ajuste para a data inicial desejada

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('time').textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Inicializa o contador na carga da página
updateCounter();
