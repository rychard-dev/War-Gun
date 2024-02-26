document.addEventListener('DOMContentLoaded', function() {
    var element = document.querySelector('.element');
    var container = document.getElementById('container');

    // Obtém as dimensões do contêiner
    var containerRect = container.getBoundingClientRect();

    // Define a posição inicial da nave para o centro inferior do contêiner
    element.style.left = containerRect.width / 2 - element.offsetWidth / 2 + 'px';
    element.style.bottom = '50px';

    document.addEventListener('mousemove', function(e) {
        var mouseX = e.clientX; // Obtém a posição horizontal do mouse na página
        var containerRect = container.getBoundingClientRect();
        var maxDistanceFromEdge = 50;

        // Define a nova posição horizontal da nave
        var newLeft = mouseX - containerRect.left - element.offsetWidth / 2;

        // Limita a nova posição dentro dos limites da página
        newLeft = Math.max(maxDistanceFromEdge, newLeft);
        newLeft = Math.min(containerRect.width - element.offsetWidth - maxDistanceFromEdge, newLeft);

        element.style.left = newLeft + 'px'; // Define a nova posição horizontal da nave
    });
});

function atirar() {
    var container = document.getElementById('container');
    var minhaNave = document.getElementById('minha-nave');

    // Crie um novo elemento para representar o míssil
    var missil = document.createElement('div');
    missil.classList.add('missil');

    // Posicione o míssil no ponto central da minha-nave
    var minhaNaveRect = minhaNave.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();

    // Calcula a posição do míssil com base no centro da nave
    var missilLeft = minhaNaveRect.left - containerRect.left + (minhaNave.offsetWidth / 1.75) - 10; // Metade da largura do míssil
    var missilTop = minhaNaveRect.top;

    // Adicione o míssil ao contêiner
    container.appendChild(missil);

    // Configure um timeout para ajustar a posição do míssil após a renderização
    setTimeout(function() {
        // Posicione o míssil corretamente após a renderização
        missil.style.left = missilLeft + 'px';
        missil.style.top = missilTop + 'px';

        // Remove o míssil após alcançar o topo da página
        var animationDuration = 2000; // Velocidade de animação em milissegundos
        setTimeout(function() {
            container.removeChild(missil);
        }, animationDuration);
    }, 0);
}