const renderProductos = () => {
    const productos = cargarProductosLS();
    let salida = "";

    for (let producto of productos) {
        salida += `<div class="col-lg-4 col-4 mgb">
            <div class="card text-center border border-0">
                <img src="images/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio}</p>
                <a href="#" class="btn btncolor" onClick="agregarAlCarrito(${producto.id});">Agregar al Carrito</a>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

renderProductos();
renderBotonCarrito();