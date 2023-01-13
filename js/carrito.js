//Guardo los productos de mi LocalStorage.
const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}
// Cargo los productos.
const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
//Busco si mi producto esta en el carrito.
const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);
}
//Agrego producto al carrito.
const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();

    if (estaEnElCarrito(id)) {
        let pos = productos_carrito.findIndex(item => item.id === id);
        productos_carrito[pos].cantidad += 1;
    } else {
        const producto = productos.find(item => item.id === id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }   
    
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}
//Defino una funcion para poder eliminar productos no deseados.
const eliminarProducto = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const productos = productos_carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    renderProductosCarrito();
    renderBotonCarrito();
}
//Vacio mi carrito en su totalidad.
const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}
//Doy la suma total del carrito.
const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad, 0);
}
//Cargo los productos a mi carrito para su suma y resta.
const sumaCarrito = () => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.reduce((total, item) => total += item.cantidad * item.precio, 0);
}
//Agrego el badge del carrito para los htmls.
const renderBotonCarrito = () => {
    let salida = `<button type="button" class="btn btn-success position-relative">
        <img src="images/carrito.png" alt="Carrito" width="30">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
    </button>`;
    document.getElementById("boton_carrito").innerHTML = salida;
}