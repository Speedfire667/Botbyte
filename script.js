function startBot() {
    const url = document.getElementById('urlInput').value;
    const views = parseInt(document.getElementById('viewsInput').value);
    const status = document.getElementById('status');

    if (url && views > 0) {
        status.textContent = 'Bot em execução...';

        for (let i = 0; i < views; i++) {
            setTimeout(() => {
                window.open(url, '_blank');
                setTimeout(() => {
                    window.close();
                }, 10000); // Fica no site por 10 segundos
            }, i * 11000); // Intervalo de 11 segundos entre cada visualização
        }

        status.textContent = 'Bot finalizado.';
    } else {
        status.textContent = 'Por favor, insira um link válido e uma quantidade de views.';
    }
}
