function cambiarColor(){
    var respuesta = document.getElementById("respuestaBtn").value;
    var colorBody = document.getElementById("colorBody");

    if(respuesta){
        colorBody.style.backgroundColor = `${respuesta}`;
    }else{
        colorBody.style.backgroundColor = "white";
    }

    if(respuesta === "black"){
        colorBody.style.color = "white";
    }else{
        colorBody.style.color = "black";
    }
}

function cambiarLink(){
    var respuesta2 = document.getElementById("respuestaLink").value;
    var linkDato = document.getElementById("link");

    if(respuesta2){
        linkDato.innerText = `${respuesta2}`;
    }
    
}

function crearPagina(){
    cambiarLink();
    cambiarColor();
}