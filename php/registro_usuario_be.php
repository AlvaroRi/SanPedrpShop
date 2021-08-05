<?php
	include 'conexion_be.php';
	
	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$usuario = $_POST['usuario'];
	$contrasena = $_POST['contrasena'];
	//encripta la contraseña
	$contrasena = hash('sha512', $contrasena);

	$query = "INSERT INTO usuarios(nombre, correo, usuario, contrasena, rol_id) 
	VALUES('$nombre', '$correo', '$usuario', '$contrasena', '')";

	
	//Verificar que el correo no se repita en la base de datos
	$verificarCorreo = mysqli_query($conexion, "SELECT * FROM usuarios where correo='$correo'");
	if(mysqli_num_rows($verificarCorreo) > 0){
		echo '
			<script>
				alert("Este Correo ya esta registrado, agrega uno distinto");
				window.location = "../user/iniciarsesion.php"
			</script>
		';
		exit();
	}
	//Verificar que el usuario no se repita en la base de datos
	$verificarUsuario = mysqli_query($conexion, "SELECT * FROM usuarios where usuario='$usuario'");
	if(mysqli_num_rows($verificarUsuario) > 0){
		echo '
			<script>
				alert("Este Usuario ya esta registrado, agrega uno distinto");
				window.location = "../users/iniciarsesion.php"
			</script>
		';
		exit();
	}

	$ejecutar = mysqli_query($conexion, $query);
	if($ejecutar){
		echo '
			<script>
				alert("Usuario Almacenado Exitosamente");
				window.location = "../users/iniciarsesion.php"
			</script>
		';
	}else{
		echo '
			<script>
				alert("Intentalo de nuevo");
				window.location = "../users/iniciarsesion.php"
			</script>
		';
	}

	mysqli_close($conexion);

?>