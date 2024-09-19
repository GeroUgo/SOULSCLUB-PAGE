// // Seleccionamos los botones y el contenedor de imágenes
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const imagesContainer = document.querySelector('.main__producto-images-container');
// const images = document.querySelectorAll('.main__producto-images-container img');

// let currentIndex = 0; // Índice de la imagen que se está mostrando

// // Función para actualizar la posición del carrusel
// function updateCarousel() {
//     const width = images[0].clientWidth; // Ancho de una imagen
//     imagesContainer.style.transform = `translateX(${-currentIndex * width}px)`;
// }

// // Función para moverse a la imagen siguiente
// nextBtn.addEventListener('click', () => {
//     if (currentIndex < images.length - 1) {
//         currentIndex++; // Avanzamos al siguiente índice
//     } else {
//         currentIndex = 0; // Volvemos al inicio si llegamos al final
//     }
//     updateCarousel(); // Actualizamos la posición del carrusel
// });

// // Función para moverse a la imagen anterior
// prevBtn.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--; // Retrocedemos al índice anterior
//     } else {
//         currentIndex = images.length - 1; // Volvemos al final si estamos en el inicio
//     }
//     updateCarousel(); // Actualizamos la posición del carrusel
// });


// ----------------------- MENU HAMBURGUESA -----------------------

const menuDesplegable = document.querySelector(".header__nav-container")
const botonMenuDesplegable = document.querySelector(".header__bgmenu-label")

menuDesplegable.classList.add("header__nav-container-remove")
menuDesplegable.classList.remove("header__nav-container")

botonMenuDesplegable.addEventListener("click",()=>{
    menuDesplegable.classList.remove("header__nav-container-remove")
    menuDesplegable.classList.add("header__nav-container")
})




// REVISAR ESTO, ES PARA QUE NO SE PUEDE BAJAR EN LA PAGINA CUANDO ABRO EL MENU

const body = document.body

let estado = false

const cambioEstado = ()=>{
    if(estado = false){
        body.style.overflow = "hidden"
        estado = true
    } else {
        body.style.overflow = "auto"
        estado = false
    }
}

botonMenuDesplegable.addEventListener("click", cambioEstado)





// --------------------------- PRODUCTOS ---------------------------

const productsMain = document.querySelector(".main__secondsection-wrapper");

// Crear el fragmento
const fragment = document.createDocumentFragment();

const productCreator = (imagen, titulo, precio, claseExtra, link, alt) => {
    // Crear los elementos necesarios
    const productContainer = document.createElement("DIV");
    const linkContainer = document.createElement("A");
    const imagesElement = document.createElement("IMG");
    const titleElement = document.createElement("H3");
    const precioElement = document.createElement("P");

    // Asignar clases
    productContainer.classList.add("main__secondsection-products-container");
    linkContainer.classList.add("main__secondsection-products-links");
    imagesElement.classList.add("main__secondsection-products-images");

    // Asignar los valores recibidos como parámetros a los elementos
    titleElement.innerHTML = titulo;  // Asignar el título
    imagesElement.src = imagen;       // Asignar la fuente de la imagen
    imagesElement.alt = alt
    precioElement.innerHTML = precio; // Asignar el precio
    linkContainer.href = link;
    
    if (claseExtra) {
        linkContainer.classList.add(claseExtra);
    }

    // Añadir los elementos al fragmento
    productContainer.appendChild(linkContainer);
    linkContainer.appendChild(imagesElement);
    linkContainer.appendChild(titleElement);
    linkContainer.appendChild(precioElement);
    
    // Añadir el contenedor del producto al fragmento
    fragment.appendChild(productContainer);
}

// ------------------------------------ AGREGAR PRODUCTOS ACA ------------------------------------

productCreator("images/mysaint1.webp", "Remera NEGRA", "$25.000", "remera-rosaaaaaaaaaaaaaaaaaaaa", "productosPagesHtml/remeraEysBlanca.html", "Remera de Blanca con estampado negro");
productCreator("images/mysaint1.webp", "Remera AZUL", "$27.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Blanca");
productCreator("images/mysaint1.webp", "Remera ROSA", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html");
productCreator("images/mysaint1.webp", "Remera NEGRA", "$25.000", "remera-rosaaaaaaaaaaaaaaaaaaaa", "productosPagesHtml/remeraEysBlanca.html", "Remera Blanca");
productCreator("images/mysaint1.webp", "Remera AZUL", "$27.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Blanca");
productCreator("images/mysaint1.webp", "Remera ROSA", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Blanca");
productCreator("images/mysaint1.webp", "Remera NEGRA", "$25.000", "remera-rosaaaaaaaaaaaaaaaaaaaa", "productosPagesHtml/remeraEysBlanca.html", "Remera Blanca");

// Finalmente, añadir el fragmento completo al DOM
productsMain.appendChild(fragment);


// ----------------------- BARRA DE BUSQUEDA EN PAGINA DE PRODUCTOS -----------------------

// const barraProductosPagina = document.querySelector(".main__secondsection-container-searchbar");

// barraProductosPagina.addEventListener("input", () => {
//     const inputValue = barraProductosPagina.value.toLowerCase(); // Obtener el valor de la barra de búsqueda y convertirlo a minúsculas

//     productsMain.forEach((productContainer) => {
//         const titleElement = productContainer.querySelector("h3"); // Seleccionar el título del producto

//         // Verificar si el título del producto coincide con el valor de entrada
//         if (titleElement && titleElement.textContent.toLowerCase().includes(inputValue)) {
//             productContainer.style.display = "flex";  // Mostrar el producto si coincide
//         } else {
//             productContainer.style.display = "none";  // Ocultar el producto si no coincide
//         }
//     });
// });



// -------------------------------NIGTHMODE -------------------------------------

// const nigthModeContainer = document.querySelector(".nigthmode__container")
// const nigthMode = document.querySelector(".nigthmode")


// let estadoNigthMode = false

// nigthModeContainer.addEventListener("click", ()=>{
//     if(estadoNigthMode){
//         nigthMode.classList.remove("nigthmode__animation");
//         document.body.style.setProperty('--brand-color', '#452b1a');
//         document.body.style.setProperty('--secondary-color', '#fdfdfd');
//         estadoNigthMode = false;
//     } else {
//         nigthMode.classList.add("nigthmode__animation");
//         document.body.style.setProperty('--brand-color', '#fdfdfd');
//         document.body.style.setProperty('--secondary-color', '452b1a');
//         estadoNigthMode = true
//     }
// })


