<?php
	session_start();
	if(!isset($_SESSION['usuario'])){
		header('location: ../users/iniciarsesion.php');
	}/*else{
	if($_SESSION['rol_id'] != 1){
		header('location: ../users/iniciarsesion.php');
		}
	}
*/
?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../estilos/estilos.css">
	<title>Admin</title>
</head>
<body>
 <header></header>

	<div id="sidebar" class="active">
			<div class="toggle-btn">
				<span>&#9776;</span>
			</div>
			<ul>
				<li>
					<img src="" alt="logotipo">
				</li>
				<li>Compras</li>
				<li>Ventas</li>
				<li>Inventario</li>
				<li>Alta de productos</li>
				<li>Baja de productos</li>
			</ul>
		</div>
	<section class="Baja">
		<p>Nombre del Productos</p>
	<input type="" name="">
	<p>Fecha ingreso</p>
	<input type="" name="">
	<p>Marca</p>
	<input type="" name="">
	<p>Tamaño</p>
	<input type="" name="">
	<button>dar de baja</button>
	</section>
	<br>
	<br>
	<section class="Alta">
		<h2>Ingreso de Mercancia</h2>
	<p>Nombre del Productos</p>
	<input type="" name="">
	<p>Cantidad de productos</p>
	<input type="" name="">
	<p>Fecha ingreso</p>
	<input type="" name="">
	<p>Marca</p>
	<input type="" name="">
	<p>Tamaño</p>
	<input type="">
	<p>Provedor</p>
	<input type="" name="">
	<p>Precio</p>
	<input type="" name="">
	<p>Descripcion</p>
	<input type="" name="">
	<br>
	<br>
	<button>Dar de alta</button>
	<button>Imprimir</button>
	<button>Hoja</button>
	<button>Volver</button>
	</section>



<!--
	<section>
		<ul>Compras</ul>
		<ul>Ventas</ul>
		<ul>Inventario</ul>
		<ul>Alta de productos</ul>
		<ul>Baja de productos</ul>
	</section>
	<section>
		
	</section>
	
-->	
</body>
</html>