var express = require ('express') ; 
var mysql = require ('mysql') ; 


var app = express() ; 



//Constantes para conectarse a la Base de Datos
var connection = mysql.createConnection({


	host: "localhost",

	user:"root",
	
	password: "",

	database: "nodemysql"


}) ; 

//Conectarse a MySQL
connection.connect( function (error) {

		if(!!error)
		{

				console.log('Error') ;

		} else{

			console.log('Connectado') ;

		}

}) ; 






//Crear base de datos
app.get ('/crearBD', function(req, res) {

	let sql='CREATE DATABASE nodemysql';

	connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			console.log(result);
			res.send('Base de datos creada') ;

		}
	});


}) 









//Crear tabla
app.get ('/crearTabla', function(req, res) {

	let sql='CREATE TABLE tabla(id int AUTO_INCREMENT, nombre VARCHAR(255), PRIMARY KEY(id) )';

	connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			console.log(result);
			res.send('Tabla creada') ;

		}
	});


}) 










//Insertar datos
app.get ('/insertarDatos', function(req, res) {

	let post ={nombre: "Fernando Fernandez"} ;
	let sql ='INSERT INTO tabla SET ?';
	let query = connection.query(sql, post, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			console.log(result);
			res.send('Registro insertado') ;

		}
	});


}) 










//Ver los registros
app.get ('/verDatos', function(req, res) {

	
	let sql ='SELECT * FROM tabla';
	let query = connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			
			res.send(result) ;

		}
	});


}) 





//Actualizar los registros por id
app.get ('/actualizar/:id', function(req, res) {

	let actualizacion = "Juan Martinez"
	let sql = `UPDATE tabla SET nombre= '${actualizacion}' WHERE id= ${req.params.id} `/*  ` <--- propiedad de ES6*/ ;
	let query = connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			
			res.send("Datos actualizados!") ;

		}
	});


}) 





 











/*





app.get ('/', function(req, resp) {

	connection.query("SELECT * FROM cursos ", function(error, rows, fields){
		if(!!error){

				
				console.log(error);
		}
		else
		{

			console.log(rows) ; 
			

		}

	}) ;

}) 

*/



app.listen(8080) ; 