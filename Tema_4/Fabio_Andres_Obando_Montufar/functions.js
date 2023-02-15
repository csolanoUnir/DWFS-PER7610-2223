function cambiarEstilo() {
var modo = document.getElementsByTagName('link')[0];
var texto = document.getElementById('modo_1')
	if (modo.getAttribute('href') == 'hojaDeEstilos.css') {
		modo.setAttribute('href', 'hojaDeEstilosOscuro.css');
		texto.innerHTML="Volver Modo Normal";
	} else 
	{
		modo.setAttribute('href', 'hojaDeEstilos.css');
		texto.innerHTML="Activar Modo Oscuro";
	}
}

window.onload=function(){
/*Recorremos el arbol por tres niveles*/
	var htmlBody=document.body.childNodes;
	/*NIVEL 1*/
	for (var i=0; i<htmlBody.length;i++){
		console.log(htmlBody[i].nodeName)		
		var htmlBodyChild=htmlBody[i].childNodes;
		/*NIVEL 2*/
		for (var j=0; j<htmlBodyChild.length;j++){
			console.log('	', htmlBodyChild[j].nodeName)
			var bodyChild=htmlBodyChild[j].childNodes;
			/*NIVEL 3*/
			for (var k=0; k<bodyChild.length;k++){
				console.log('		', bodyChild[k].nodeName)
			}
		}
	}
}