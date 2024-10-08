"use strict";

// const contenedorProductos = document.querySelector(".main__secondsection-products-links");
// const barraBusqueda = document.querySelector(".main__secondsection-container-searchbar")

// const verificarProductos = Array.from(contenedorProductos.children).find(elemento =>{
//     return elemento.querySelector(".main__secondsection-products-button").textContent === titulo
// })

// verificarProductos = barraBusqueda.value

// if (verificarProductos){
//     elemento.style.display = "block"
// } else {
//     elemento.style.display = "none"
// }




// const contenedorProductos = document.querySelector(".main__secondsection-products-links");
// const barraBusqueda = document.querySelector(".main__secondsection-container-searchbar");

// barraBusqueda.addEventListener("input", () => {
//     const terminoBusqueda = barraBusqueda.value.toLowerCase(); // Tomamos el valor del input y lo pasamos a minúsculas

//     // Asegurarnos de que contenedorProductos y sus hijos existan
//     if (contenedorProductos && contenedorProductos.children) {
//         // Iteramos sobre cada producto
//         Array.from(contenedorProductos.children).forEach(elemento => {
//             const botonProducto = elemento.querySelector(".main__secondsection-products-button");
            
//             if (botonProducto) {
//                 const tituloProducto = botonProducto.textContent.toLowerCase(); // Obtenemos el texto del botón

//                 // Verificamos si el título contiene el término de búsqueda
//                 if (tituloProducto.includes(terminoBusqueda)) {
//                     elemento.style.display = "block"; // Mostrar si coincide
//                 } else {
//                     elemento.style.display = "none"; // Ocultar si no coincide
//                 }
//             } else {
//                 console.warn("No se encontró el botón en uno de los productos.");
//             }
//         });
//     } else {
//         console.error("El contenedor de productos no se encuentra o no tiene hijos.");
//     }
// });


const products = document.querySelectorAll(".main__secondsection-products-container")
const searchInput = document.querySelector(".main__secondsection-container-searchbar");

const buscarProducto = ()=>{
    const searchTerm = searchInput.value.toLowerCase(); 

    // Recorre todos los productos y oculta o muestra según el término de búsqueda
    Array.from(products).forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase(); // Obtiene el texto del título en minúsculas
        if (title.includes(searchTerm)) {
            product.style.display = 'block'; // Muestra el producto
        } else {
            product.style.display = 'none'; // Oculta el producto
        }
    });
}

const botonBuscar = document.querySelector(".botonBuscar");
botonBuscar.addEventListener("click", buscarProducto);
  

  