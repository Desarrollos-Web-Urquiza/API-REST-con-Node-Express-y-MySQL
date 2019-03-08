
/*
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

/*

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
*/








																/*FUNCIONES*/




/*FUNCION PARA ELIMINAR NOMBRES*/
function eliminar(id_nombre)
{


			
//Mediante AJAX, eliminamos los registro recibiendo como argumento el id del nombre
var url = `http:////127.0.0.1:8080/eliminar/${id_nombre}`;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.send(null);














}









/*FUNCION PARA INSERTAR NOMBRES*/
function insertar(nombre)
{

//Mediante AJAX, insertamos el registro recibiendo como argumento el nombre pasado en el input de "index.html"
var url = `http:////127.0.0.1:8080/insertarDatos`;
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);

//Send the proper header information along with the request
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

xhr.send(`name=${nombre}`);














}



/*FUNCION PARA MODIFICAR NOMBRES*/
function editar(modificado, name)
{







//Mediante AJAX, insertamos el registro recibiendo como argumento el nombre pasado en el input de "index.html"


var url = `http:////127.0.0.1:8080/actualizar/${name}/${modificado}`;
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.send(null);














}




















//METODO AJAX PARA IMPRIMIR NOMBRES


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	
    	console.log('todo ok',  )
    	
  		
	let objeto = JSON.parse(this.responseText) // esto ya es un objeto normal
	console.log(objeto)




		
			
		//Mediante AJAX, traigo el registro de todos los nombres y los imprimo con este FOR
		for(let i in objeto){

			document.write(objeto[i].nombre) 
			
			var id_nombre = objeto[i].id
			
			
			//Botón para eleminar registros
			document.write( ` <input type='button' value='Eliminar' onclick=' eliminar(${id_nombre}) ' >`) 
			

			
			document.write("<br>")
			
			document.write( `   


<form action='sendbymail.php' name='frmInsertar' method='post'>

				<br>
				¿Desea cambiar este nombre?<input type='text' name="nombreModificado${[i]}"  >


				<input type='button' value='Editar' onclick ='editar(document.frmInsertar.nombreModificado${[i]}.value, ${id_nombre})' > 
			




				`) 
			



			document.write("<br>")
			
			document.write("<br>")
			
			
		}








    }
  };



  
  xhttp.open("GET", "http://127.0.0.1:8080/verDatos", false);

  xhttp.send();
  















































// Trabajando con objetos y strings

// string a objeto





// // objeto a string
// let stringOtraVez = JSON.stringify(objeto)
// console.log(stringOtraVez)
