var express = require ('express') ; 
var mysql = require ('mysql') ; 
const cors = require("cors")

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
app.post ('/crearTabla', function(req, res) {

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








/*

//Insertar datos
app.post ('/insertarDatoss', function(req, res) {
	let nombre  = req.body.params
	let post ={nombre: nombre} ;
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

*/


//Insertar datos
/*No funciona con POST -->*/app.get('/insertarDatos', function(req, res) {

	let post ={nombre: "Gonzalo Gonzalez"} ;
	let sql ='INSERT INTO tabla SET ?';
	let query = connection.query(sql, post, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			console.log(result);
			res.send('registro insertado') ;

		}
	});


}) 









//Permisos para AJAX
app.use(cors())





//Ver los registros
app.get ('/verDatos', function(req, res) {

	let sql ='SELECT * FROM tabla';
	let query = connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err)
			res.send(err)

		}
		else
		{

			
			res.send(result) ;

		}
	});






}) 





//Actualizar los registros por id
app.get ('/actualizar/:id', function(req, res) {

	let actualizacion = "Gonzalo Gonzales"
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





 

//Eliminar los registros por id
app.get ('/eliminar/:id', function(req, res) {


	let sql = `DELETE FROM tabla WHERE id= ${req.params.id} `/*  ` <--- propiedad de ES6*/ ;
	let query = connection.query(sql, function(err, result){


		if(err)
		{

			console.log(err);

		}
		else
		{

			
			res.send("Dato eliminado!") ;

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