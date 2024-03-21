const chavesCriptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const campoTextoInput = document.getElementById('campo-texto-input'); 

const mensagemCriptografar = document.getElementById('campo-texto');

document.getElementById('btn-limpar').addEventListener('click', function() {
    campoTextoInput.value = 'Digite seu texto aqui';
    mensagemCriptografar.textContent = 'Digite um texto que você deseja criptografar ou descriptografar.';
});

document.getElementById('campo-texto-input').addEventListener('focus', function() {
    if (this.value === 'Digite seu texto aqui') {
        this.value = '';
    }
});

function criptografarTexto(texto) {
    return texto.replace(/[eiaou]/g, match => chavesCriptografia[match]);
}

function descriptografarTexto(texto) {
    const chavesInvertidas = Object.fromEntries(Object.entries(chavesCriptografia).map(([key, value]) => [value, key]));
    return texto.replace(/(enter|imes|ai|ober|ufat)/g, match => chavesInvertidas[match]);
}

document.getElementById('btn-criptografar').addEventListener('click', function() {
    const texto = document.getElementById('campo-texto-input').value;
    if(texto !== ''){
        const textoCriptografado = criptografarTexto(texto);
        document.querySelector('.campo-texto p:first-child').textContent = textoCriptografado;
        document.querySelector('.campo-texto p:nth-child(2)').textContent = '';
    }
});

document.getElementById('btn-descriptografar').addEventListener('click', function() {
    const texto = document.getElementById('campo-texto-input').value;
    const textoDescriptografado = descriptografarTexto(texto);
    document.querySelector('.campo-texto p:first-child').textContent = textoDescriptografado;
});

campoTextoInput.addEventListener('input', function() {
    if (this.value.trim() === '') {
        campoTexto.textContent = 'Nenhuma mensagem encontrada';
    } else {
        campoTexto.textContent = '';
    }
});