const textoEntrada = document.querySelector("#texto_original");
const btCripto  = document.querySelector("#bt_cripto");
const btDescripto = document.querySelector("#bt_descripto");
const textoSaida = document.querySelector("#texto_resultado");
const btCopiar = document.querySelector("#bt_copiar");

document.querySelector(".mensagem").style.display = "none";

let filtro = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

document.getElementById("bt_cripto").onclick = (e) => {
    e.preventDefault();
    
    textoSaida.value = criptografar(textoEntrada.value.toLowerCase());
    textoEntrada.value = "";
    troca();
}

document.getElementById("bt_descripto").onclick = (e) => {
    e.preventDefault();
    
    textoSaida.value = descriptografar(textoEntrada.value.toLowerCase());
    textoEntrada.value = "";
    troca();
}

function criptografar(textoCriptografado) {
    textoCriptografado = textoCriptografado.toLowerCase();
    for(let i = 0; i < filtro.length; i++){
        if (textoCriptografado.includes(filtro[i][0])){
            textoCriptografado = textoCriptografado.replaceAll(filtro[i][0], filtro[i][1]);
        }
    }
    return textoCriptografado;
}

function descriptografar(textoDescriptografado) {
    textoDescriptografado = textoDescriptografado.toLowerCase();
    for(let i = 0; i < filtro.length; i++){
        if (textoDescriptografado.includes(filtro[i][1])){
            textoDescriptografado = textoDescriptografado.replaceAll(filtro[i][1], filtro[i][0]);
        }
    }
    return textoDescriptografado;
}

function troca() {
    document.querySelector(".mensagem").style.display = "block";
    document.querySelector(".mensagem_vazia").style.display = "none";
}

document.getElementById("bt_copiar").onclick = (e) => {
    e.preventDefault();

    textoSaida.select();
    navigator.clipboard.writeText(textoSaida.value);
    textoSaida.value = "";
}