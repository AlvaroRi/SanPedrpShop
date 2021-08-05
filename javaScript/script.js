document.getElementById("btn_iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn_registrarse").addEventListener("click", register);
document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);
//declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__loging-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-registrar");

function iniciarSesion(){
	/*var sCorreo = '';
	var SContrasena = '';
	var bAcceso = false;

	sCorreo = document.querySelector('#txtCorreo').value;
	SContrasena = document.querySelector('#txtPassword').value;

	bAcceso = validarCredenciales(sCorreo, SContrasena);
	console.log(bAcceso);
	//Redirecionamiento tipo usuario
	if(bAcceso == true){
		ingresar();
	}*/

	//Animacion para la caja iniciar sesión
	if (window.innerWidth > 850) {
		formulario_register.style.display = "none";
	contenedor_login_register.style.left = "10px";
	formulario_login.style.display = "block";
	caja_trasera_register.style.opacity = "1";
	caja_trasera_login.style.opacity = "0";
}else{
	formulario_register.style.display = "none";
	contenedor_login_register.style.left = "10px";
	formulario_login.style.display = "block";
	caja_trasera_register.style.display = "block";
	caja_trasera_login.style.display = "none";
}
}
/*
//redireciona segun el tipo de rol admin/cliente
function ingresar(){
	var rol = sessionStorage.getItem('rolUsuarioActivo');
	switch(rol){
		case '1':
		window.location.href = '../admin/admin.html';
		break;
		case '2':
		window.location.href = '../users/micuenta.html';
		break;
		default:
		window.location.href = '../tienda.html';
		break;
	}
}*/
function register(){
	//Animacion para la caja Registrarse
	if (window.innerWidth > 850){
		formulario_register.style.display = "block";
	contenedor_login_register.style.left = "410px";
	formulario_login.style.display = "none";
	caja_trasera_register.style.opacity = "0";
	caja_trasera_login.style.opacity = "1";
	}
	else{
		formulario_register.style.display = "block";
	contenedor_login_register.style.left = "0px";
	formulario_login.style.display = "none";
	caja_trasera_register.style.display = "none";
	caja_trasera_login.style.display = "none";
	caja_trasera_login.style.opacity = "1";
	}
	
}
/*
/*ROLES 
	1: admin
	2: cliente

function obtenerListaUsuarios(){
	var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));

	if(listaUsuarios == null){
		listaUsuarios = [
		//id, nombre, apellido, correo, contraseña, fecha nac, rol
		['1','Alvaro','Gutierrez','mgral091@gmail.com','Alv123', '1999/05/22', '1'],
		['2','Luis','Labrada','luisdilan12@gmail.com','lui123', '1999/09/15', '2']
	]
	}
	return listaUsuarios;
}
function validarCredenciales(pCorreo, pContrasena){
	var listaUsuarios = obtenerListaUsuarios();
	var bAcceso = false;

	for(var i = 0; i < listaUsuarios.length; i++){
		if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]){
			bAcceso = true;
			sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
			sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
		}
	}
	return bAcceso;
}
*/