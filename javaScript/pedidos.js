const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('lista-productos');
const listaProductos = document.querySelector('#lista-carrito');
const vaciarCarrito = document.getElementById('vaciar-carrito');
cargarEventos();

function cargarEventos(){
	productos.addEventListener('click', (e)=>{carro.comprarProducto(e)})

	carrito.addEventListener('click', (e)=>{carro.eliminarProducto});

	vaciarCarrito.addEventListener('click', (e)=>{carro.vaciarCarrito()});
}