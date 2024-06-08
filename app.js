function botonE() {
    const input = document.getElementById('textoIntroducido').value;
    const output = encode(input);
    document.getElementById('resultado').value = output;
}

function botonD() {
    const input = document.getElementById('textoIntroducido').value;
    const output = decode(input);
    document.getElementById('resultado').value = output;
}

function botonC() {
    const result = document.getElementById('resultado');
    result.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function encode(text) {
    // Implement your encoding logic here
    return text.split('').reverse().join(''); // Example: reversing the text
}

function decode(text) {
    // Implement your decoding logic here
    return text.split('').reverse().join(''); // Example: reversing the text back
}
