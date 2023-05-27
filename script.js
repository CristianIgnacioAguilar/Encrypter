function encriptar() {
    var texto = document.getElementById("ingresotextojs").value.toLowerCase();

    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

    document.getElementById("piramidejs").style.display = "none";
    document.getElementById("textoderechajs").style.display = "none";
    document.getElementById("mensajefinaljs").innerHTML =  txtcifrado;
    document.getElementById("copiarjs").style.display = "show";
    document.getElementById("copiarjs").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("ingresotextojs").value.toLowerCase();

    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/imes/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");

    document.getElementById("piramidejs").style.display = "none";
    document.getElementById("textoderechajs").style.display = "none";
    document.getElementById("mensajefinaljs").innerHTML =  txtcifrado;
    document.getElementById("copiarjs").style.display = "show";
    document.getElementById("copiarjs").style.display = "inherit";
}

function copiar() {
    var elemento = document.createElement('textarea');
    elemento.value = document.getElementById("mensajefinaljs").innerText;
    document.body.appendChild(elemento);
    elemento.select();
    elemento.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(elemento);
    alert('El contenido se ha copiado');
}
  
