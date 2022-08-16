let mensaje = document.getElementById("textAreaMensaje");
let mostrarMensaje = document.getElementById("textAreaMostrarMensaje");
function Encriptar()
{
    var texto = mensaje.value;
    var codificado = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");
    OcultarElementos();
    mostrarMensaje.value = codificado;
}
function Desencriptar()
{
    var texto = mensaje.value;
    var codificado = texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    OcultarElementos();
    mostrarMensaje.value = codificado;
}
function CopiarTexto()
{
    var textoResultante = mostrarMensaje.value;
    navigator.clipboard.writeText(textoResultante);
}
function OcultarElementos()
{
    document.getElementById("imagenMostrarMensaje").style.display = "none";
    document.getElementById("textoNoEncontrado").style.display = "none";
    document.getElementById("ingreseTexto").style.display = "none"; 
    document.getElementById("botonCopiar").style.visibility = "visible";
    document.getElementById("textAreaMensaje").value = "";
}
