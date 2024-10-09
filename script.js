let palavras = ['javascript', 'bootstrap', 'frontend', 'backend', 'programacao', 'desenvolvedor', 'web'];
let palavra = '';
let palavraExibida = [];
let letrasErradas = [];
let tentativas = 0;
const tentativasMax = 6;

// Função para escolher uma palavra aleatória
function escolherPalavra() {
    palavra = palavras[Math.floor(Math.random() * palavras.length)];
    palavraExibida = '_'.repeat(palavra.length).split('');
    document.getElementById('container-palavra').textContent = palavraExibida.join(' ');
    document.getElementById('letras-erradas').textContent = '';
    document.getElementById('mensagem').textContent = '';
    letrasErradas = [];
    tentativas = 0;
    document.getElementById('botao-palpite').disabled = false;
    document.getElementById('botao-reiniciar').style.display = 'none';
    resetarForca();
}

// Função para processar o palpite do jogador
function adivinharLetra(letra) {
    if (letrasErradas.includes(letra) || palavraExibida.includes(letra)) {
        return;
    }
    let correta = false;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] === letra) {
            palavraExibida[i] = letra;
            correta = true;
        }
    }
    if (!correta) {
        letrasErradas.push(letra);
        tentativas++;
        document.getElementById('letras-erradas').textContent = `Letras erradas: ${letrasErradas.join(', ')}`;
        desenharForca(tentativas);
    }

    document.getElementById('container-palavra').textContent = palavraExibida.join(' ');

    if (tentativas >= tentativasMax) {
        document.getElementById('mensagem').textContent = 'Você perdeu!';
        document.getElementById('botao-palpite').disabled = true;
        document.getElementById('botao-reiniciar').style.display = 'inline-block';
    }

    if (!palavraExibida.includes('_')) {
        document.getElementById('mensagem').textContent = 'Você ganhou!';
        document.getElementById('botao-palpite').disabled = true;
        document.getElementById('botao-reiniciar').style.display = 'inline-block';
    }
}