var express = require ('express') ; 
var mysql = require ('mysql') ; 


var app = express() ; 




var connection = mysql.createConnection({


	host: "localhost",

	user:"root",
	
	password: "",

	database: "nodemysql"


}) ; 


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
			res.send('base de datos creada') ;

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
			res.send('tabla creada') ;

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
			res.send('registro insertado') ;

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