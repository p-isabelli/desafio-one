const chavesCriptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const campoTextoInput = document.getElementById('campo-texto-input'); 
const btnLimpar = document.getElementById('btn-limpar');
const txt1 = document.getElementById('campo-texto-1');
const txt2 = document.getElementById('campo-texto-2');
const mensagemCriptografada = document.getElementById('mensagemCriptografada');

document.getElementById('campo-texto-input').addEventListener('focus', function() {
    if (this.value === 'Digite seu texto aqui') {
        this.value = '';
    }
});

btnLimpar.addEventListener("click", function(){
    campoTextoInput.value = 'Digite seu texto aqui';
    mensagemCriptografada.innerHTML = '';
    txt1.style.display = 'block';
    txt2.style.display = 'block';

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
        mensagemCriptografada.textContent = textoCriptografado;
        txt1.style.display = 'none';
        txt2.style.display = 'none';
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