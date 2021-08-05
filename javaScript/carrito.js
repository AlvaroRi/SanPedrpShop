class Carrito{
	//Añadir el producto al carrito
	comprarProducto(e){
		e.preventDefault();
		if (e.target.classlist.contains('agregar-carrito')){
			const producto = e.target.parentElement.parentElement;
			this.leerDatosProductos(producto);
			Console.log(producto);
		}
	}
	leerDatosProducto(producto){
		const infoProducto = {
			imagen : producto.querySelector('img').src,
			titulo : producto.querySelector('h3').textContent,
			precio : producto.querySelector('.precio span').textContent,
			id : producto.querySelector('button').getAttribute('data-id'),
			cantidad : 1
		}
		this.insertarCarrito(infoProducto);
	}
	insertarCarrito(producto){
		const row = document.createElement('');
		row.innerHTML = `
			<td>
				<img src="${producto.imagen}" width-100>
			</td>
			<td>${producto.titulo}</td>
			<td>${producto.precio}</td>
			<td>
				<a href="#" class"borrar-producto fas fa-times-circle" data-id="${producto.id}"
			</td>

		`;
		listaProductos.appendChild(row);
	}
	eliminarProducto(e){
		e.preventDefault();
		let producto, productoID;
		if (e.target.classlist.contains('borrar-producto')){
			e.target.parentElement.parentElement.remove();
			producto = e.target.parentElement.parentElement;
			productoID = producto.querySelector('a').getAttribute('data-id');
		}
	}	vaciarCarrito(e){
		e.preventDefault();
		while(listaProductos.firstChild){
			listaProductos.removerChild(listaProductos.firstChild)
		}
	}
}	
