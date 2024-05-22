alert('Los productos se mostraran en consola con su respectivo id')
// Definir productos
const productosDisponibles = [
      { id: 1, nombre: 'Pc Lenovo', precio: 1000000 },
      { id: 2, nombre: 'Pc HP', precio: 1250000 },
      { id: 3, nombre: 'Pc Gamer', precio: 3000000 },
      { id: 4, nombre: 'Pc Alienware', precio: 2000000 },
      { id: 5, nombre: 'Pc Asus', precio: 1500000 },
      { id: 6, nombre: 'Pc Mac', precio: 2500000 },
      ];

// Definir variable Carrito
let carrito = [];

// Agregar productos
function agregarAlCarrito(productId) {
    const producto = productosDisponibles.find(p => p.id === productId);
        if (producto) {
            carrito.push(producto);
            console.log(`${producto.nombre} ha sido agregado al carrito.`);
        } else {
            console.log('Producto no encontrado.');
          }
      }

// Eliminar productos
function eliminarDelCarrito(productId) {
    carrito = carrito.filter(producto => producto.id !== productId);
    console.log(`Producto con id ${productId} ha sido eliminado del carrito.`);
}

// Listar productos
function listarCarrito() {
    console.log('Productos en el carrito:');
    carrito.forEach(producto => {
        console.log(`- ${producto.nombre}: $${producto.precio}`);
    });
    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    console.log(`Total: $${total}`);
}

// Mostrar productos disponibles por consola
function mostrarProductosDisponibles() {
    console.log('Productos disponibles:');
    productosDisponibles.forEach(producto => {
        console.log(`ID: ${producto.id} - ${producto.nombre}: $${producto.precio}`);
    });
  };

// Iniciar el carrito
function iniciarCarrito() {
    let opcion;
    do {
        opcion = prompt(
            'Elige una opción:\n' +
            '1. Agregar producto al carrito\n' +
            '2. Eliminar producto del carrito\n' +
            '3. Listar productos en el carrito\n' +
            '4. Salir'
        );

        switch (opcion) {
            case '1':
                mostrarProductosDisponibles();
                const idAgregar = parseInt(prompt('Introduce el ID del producto a agregar:'));
                agregarAlCarrito(idAgregar);
                break;
            case '2':
                mostrarProductosDisponibles();
                const idEliminar = parseInt(prompt('Introduce el ID del producto a eliminar:'));
                eliminarDelCarrito(idEliminar);
                break;
            case '3':
                listarCarrito();
                break;
            case '4':
                console.log('Saliendo...');
                break;
            default:
                console.log('Opción no válida.');
                break;
        }
    } while (opcion !== '4');
}

// Comenzar el programa
iniciarCarrito();