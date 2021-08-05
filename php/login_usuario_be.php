<?php
	include 'conexion_be.php';
	
	session_start();

	$correo = $_POST['Correo'];
	$contrasenna = $_POST['Contrasena'];
	$contrasenna = hash('sha512', $contrasenna);
	$validarLogin = mysqli_query($conexion, "SELECT * FROM usuarios where correo='$correo' and contrasena='$contrasenna'");

	if(mysqli_num_rows($validarLogin) > 0){
		$_SESSION['usuario'] = $correo;
		header("location:../users/micuenta.php");
		exit;
	}else{
		echo '
			<script>
				alert("Usuario no existe, Verifique los datos indroducidos");
				window.location="../users/iniciarsesion.php"
			</script>
		';
		exit;
	}
/*
	if(isset($_GET['cerrar_sesion'])){
		session_unset();

		session_destroy();
	}

	if (isset($_SESSION['rol_id'])) {
		// code...
		switch($_SESSION['rol_id']){
			case '1':
				header("location: ../admin/admin.php");
				break;
			case '2':
				header("location: ../users/micuenta.php");
				break;
			
			default:
				
		}
	}

	if(isset($_POST['Correo']) && isset($_POST['Contrasena'])){
		$correo = $_POST['Correo'];
		$contrasenna = $_POST['Contrasena'];

		$conectar = mysqli_query($conexion, "SELECT * FROM usuarios WHERE correo='$correo' and contrasena='$contrasenna'");

		$row = $conectar->fetch_array(PDO::FETCH_NUM);
		if($row == true){
			//validar rol
			$rol = $row[5];
			$_SESSION['rol_id'] = $rol;

			switch($_SESSION['rol_id']){
			case '1':
				header("location: ../admin/admin.php");
				break;
			case '2':
				header("location: ../users/micuenta.php");
				break;
			
			default:
			}
		}else{
			echo 'EL usuario o contraseña son incorrectos';
		}
	
	}
*/	
?>