const text = document.querySelector(".txt")
const mensaje = document.querySelector(".txtArea")
const btnCopiar = document.querySelector(".copy")

// La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
   const txtEncriptado = encriptar(text.value);
   mensaje.value = txtEncriptado;
   text.value = "";
}

function btnDesencriptar(){
    const txtDesencriptado = desencriptar(text.value);
    mensaje.value = txtDesencriptado;
    text.value = "";
}

function encriptar(txtEncriptado){

    let methodEncriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    txtEncriptado = txtEncriptado.toLowerCase();
    for (let i = 0; i < methodEncriptado.length; i++) {  
        if( txtEncriptado.includes(methodEncriptado[i][0]) ){
            txtEncriptado = txtEncriptado.replaceAll(methodEncriptado[i][0],methodEncriptado[i][1]);
        }
    }
    return txtEncriptado;
}
function desencriptar(txtDesencriptado){

    let methodDesencriptado = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    txtDesencriptado = txtDesencriptado.toLowerCase();
    for (let i = 0; i < methodDesencriptado.length; i++) {  
        if( txtDesencriptado.includes(methodDesencriptado[i][1]) ){
            txtDesencriptado = txtDesencriptado.replaceAll(methodDesencriptado[i][1],methodDesencriptado[i][0]);
        }
    }
    return txtDesencriptado;
}
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    btnCopiar.style.backgroundColor = "green";
}
