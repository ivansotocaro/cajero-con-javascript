class Billete
{

    constructor(v , c)
    {
        this.valor = v;
        this.cantidad = c;
    }

}

function extraerDinero()
{
    var can = $("#dinero").val();
    dinero = parseInt(can);
    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;

            }
            else
            {
                papeles = div;
            }

            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }

    
    if(dinero > 0)
    {
      $("#contenedor").empty().append("No tiene suficiente dinero para entregarte"); 
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                $("#contenedor").append(e.cantidad + "billete de $" + e.valor + "<br/>");
            }
            
        }
    }
}



var caja = [];
var entregado = [];

caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 5) );
caja.push( new Billete(5, 6) );

// var dinero = 210;
var div = 0;
var papeles = 0;


$(document).on("click", "#extraer", function(){
   extraerDinero();
});
