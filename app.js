let listasDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; ENCAPSUALDO.
function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    console.log(numeroSecreto);
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto) {
            exibirTextoNaTela('h1', 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativa' : 'Tentativas';
            let exibirTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
            exibirTextoNaTela('p', exibirTentativas);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Número é menor');
        } else {
            exibirTextoNaTela('p', 'O número é maior');
        }
        tentativas ++;
        limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
    let quantidadeDeElementosNaLista = listasDeNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimite) {
        listasDeNumerosSorteados = [];
    }
    
    if(listasDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteados.push(numeroEscolhido);
        console.log(listasDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
} 

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}