

var persona =  {


	name: "lucas" ,
	age: 23 ,
	cats: 
	[
		{

			name: "sara" , 
			color: "gris" 

		},	
	

		{

			name: "ema" , 
			color: "blanco" 

		}

	]



} ;
 

/*

//FOR para recorrer objetos 
for(let i in persona){


	console.log(i , persona[i] )

}
*/



console.log("Buscando color de ema", obtenerColor("ema"))
	
function obtenerColor(nombre) {

	let resultado

	//FOR para recorrer arrays
	for(let i in persona.cats){


		console.log(i , persona.cats[i] )



		if (persona.cats[i].name==nombre) {



			//console.log("Se encontro el gato, el color es:" + persona.cats[i].color)
			resultado =  persona.cats[i].color
			break
		}

	}

	resultado = "el color es: " + resultado
	return resultado

}



//document.write(persona.cats[0].name) ;




//METODO AJAX
loadDoc()


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log('todo ok', this.responseText)
    }
  };

  xhttp.open("GET", "http://127.0.0.1:8080/verDatos", false);
  xhttp.send();
}


// Trabajando con objetos y strings

// string a objeto
let objetoEnString = '{"name": "lucas", "age": "23"}'
let objeto = JSON.parse(objetoEnString) // esto ya es un objeto normal
console.log(objeto)

// objeto a string
let stringOtraVez = JSON.stringify(objeto)
console.log(stringOtraVez)
