
function RealizarResumen() 
{

    var valor = document.getElementById("pase_dia").value;
    var valor2 = document.getElementById("pase_completo").value;
    var valor3 = document.getElementById("pase_dosdias").value;

    var total = parseInt(valor)*30 + parseInt(valor2)*50 + parseInt(valor3)*45;

    mensaje = valor  +" boletos Pase por día <br/>"  + 
              valor2 +" boletos pase todos los dias <br/>" +
              valor3 +" boletos pase viernes y sabados";
           document.getElementById("lista-productos").innerHTML = mensaje;

    document.getElementById("suma-total").innerHTML = total;       
}


