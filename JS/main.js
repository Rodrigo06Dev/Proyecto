var contador, p1, p2;
contador = 1;
function mostrar(id){
	if (contador == 1){
		switch(id){
		case "btn1":
			document.getElementById('lado1').style.display = "none";
			document.getElementById('lado2').style.display = "block";
			p1 = 1;
			contador = contador + 1;		
			break;

		case "btn2":
			document.getElementById('lado1').style.display = "none";
			document.getElementById('lado2').style.display = "block";
			p1 = 2;
			contador = contador + 1;
			break;

		case "btn3":
			document.getElementById('lado1').style.display = "none";
			document.getElementById('lado2').style.display = "block";
			p1 = 3;
			contador = contador + 1;
			break;		
		}
	}
	else if(contador == 2){
		document.getElementById('header1').style.display = "block";
		document.getElementById('header2').style.display = "none";
		switch(id){
		case "btn1":
				document.getElementById('lado1').style.display = "none";
				document.getElementById('lado2').style.display = "none";
				document.getElementById('seccion').style.display = "block";
				p2 = 1;
				if(p1 == 1){
					document.getElementById('seccion').innerHTML= ("EMPATE");
					document.getElementById('lado3').style.display = "block";
					document.getElementById('seccion3').style.display = "block";
				}
				else if(p1==2){
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 2");
					document.getElementById('lado5').style.display = "block";
					document.getElementById('seccion2').style.display = "block";
				}
				else{
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 1");
					document.getElementById('lado4').style.display = "block";
					document.getElementById('seccion2').style.display = "block";	
				}
				
				break;

			case "btn2":
				document.getElementById('lado1').style.display = "none";
				document.getElementById('lado2').style.display = "none";
				document.getElementById('seccion').style.display = "block";
				p2 = 2;
				if(p1 == 1){
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 1");
					document.getElementById('lado4').style.display = "block";
					document.getElementById('seccion2').style.display = "block";
				}
				else if(p1==2){
					document.getElementById('seccion').innerHTML= ("EMPATE");
					document.getElementById('lado3').style.display = "block";
					document.getElementById('seccion3').style.display = "block";
				}
				else{
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 2");
					document.getElementById('lado5').style.display = "block";	
					document.getElementById('seccion2').style.display = "block";
				}
				break;

			case "btn3":
				document.getElementById('lado1').style.display = "none";
				document.getElementById('lado2').style.display = "none";
				document.getElementById('seccion').style.display = "block";
				p2 = 3;
				if(p1 == 1){
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 2");
					document.getElementById('lado5').style.display = "block";
					document.getElementById('seccion2').style.display = "block";
				}
				else if(p1==2){
					document.getElementById('seccion').innerHTML= ("GANA JUGADOR 1");
					document.getElementById('lado4').style.display = "block";
					document.getElementById('seccion2').style.display = "block";
				}
				else{
					document.getElementById('seccion').innerHTML= ("EMPATE");
					document.getElementById('lado3').style.display = "block";
					document.getElementById('seccion3').style.display = "block";	
				}
				break;		
		}		
	}	
}


$(document).ready(function(){
	var sonido = document.getElementById("sonido");
});

$(document).ready(function(){
	var sonido = document.getElementById("sonido2");
});


function reiniciar(){
	p1 = 0;
	p2 = 0;
	contador = 1;
	document.getElementById('header2').style.display = "block";
	document.getElementById('header1').style.display = "none";
	document.getElementById('seccion').style.display = "none";
	document.getElementById('seccion2').style.display = "none";
	document.getElementById('seccion3').style.display = "none";
	document.getElementById('lado1').style.display = "block";
	document.getElementById('lado3').style.display = "none";
	document.getElementById('lado4').style.display = "none";
	document.getElementById('lado5').style.display = "none";



}