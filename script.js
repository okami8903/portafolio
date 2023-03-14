const textArea = document.querySelector(".ingresatexto");
const mensaje = document.querySelector(".columna_texto");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function botonEncriptar(){
    let string = textArea.value
    let matches = string.match(/[A-Z]/g);
    if (matches != null) {
       alert('contiene mayusculas')
       return
}
    else{
       const textoEncriptado = encriptar(textArea.value) 
       mensaje.value = textoEncriptado
       textArea.value = "";
       mensaje.style.backgroundImage = "none"
}
    

}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e" ,"enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    
    for (let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 

        }
    }
    return stringEncriptado
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value) 
    mensaje.value = textoEncriptado
    textArea.value = "";
    
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e" ,"enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for (let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) 

        }
    }
    return stringDesencriptado
}

function copiar() {
    navigator.clipboard.writeText(mensaje.value).then(function() {
        alert('EL TEXTO ENCRIPTADO HA SIDO COPIADO');
    })
}

function NumText(string){//solo letras y numeros
    var out = '';
    //Se añaden las letras validas
    var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890 ';//Caracteres validos
	
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
	     out += string.charAt(i);
    return out;
}
