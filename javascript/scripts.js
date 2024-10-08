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



// MENU DE CARRITO DE COMPRAS ANIMACION

const iconoCarrito = document.querySelector(".header__interaccion-cart-icon")
let carritoMenu = document.querySelector(".header__interaccion-cart-menu")


iconoCarrito.addEventListener("click", ()=>{
    carritoMenu.classList.add("header__interaccion-cart-menu-abrir")
})



// --------------------------- PRODUCTOS ---------------------------

const productsMain = document.querySelector(".main__secondsection-wrapper");

// Crear el fragmento
const fragment = document.createDocumentFragment();

const productCreator = (imagen, imagenDos, titulo, precio, claseExtra, link, alt) => {
    // Crear los elementos necesarios
    let productContainer = document.createElement("DIV");
    let linkContainer = document.createElement("A");
    let imagesElement = document.createElement("IMG");
    let titleElement = document.createElement("H3");
    let precioElement = document.createElement("P");
    let botonCompraRapida = document.createElement("BUTTON");

    // Asignar clases
    productContainer.classList.add("main__secondsection-products-container");
    linkContainer.classList.add("main__secondsection-products-links");
    imagesElement.classList.add("main__secondsection-products-images");
    botonCompraRapida.classList.add("main__secondsection-products-button");
    titleElement.classList.add("main__secondsection-products-title")

    // Asignar los valores recibidos como parámetros a los elementos
    titleElement.innerHTML = titulo;  
    imagesElement.src = imagen;        
    imagesElement.alt = alt;
    precioElement.innerHTML = precio; 
    linkContainer.href = link;
    botonCompraRapida.textContent = "Compra rápida";
    
    if (claseExtra) {
        linkContainer.classList.add(claseExtra);
    }

    // Evento para agregar el producto al carrito al hacer clic en "Compra rápida"
    botonCompraRapida.addEventListener('click', () => {
        agregarAlCarrito(imagen, titulo, precio);
    });

    // Añadir los elementos al fragmento
    productContainer.appendChild(linkContainer);
    productContainer.appendChild(botonCompraRapida);
    linkContainer.appendChild(imagesElement);
    linkContainer.appendChild(titleElement);
    linkContainer.appendChild(precioElement);

    // Añadir el contenedor del producto al fragmento
    fragment.appendChild(productContainer);

    // Cambio de imagen en hover
    imagesElement.addEventListener("mouseover", () => {
        imagesElement.src = imagenDos;  
    });

    imagesElement.addEventListener("mouseout", () => {
        imagesElement.src = imagen;  
    });
};

// ------------------------------------ AGREGAR PRODUCTOS ACA ------------------------------------

productCreator("images/soulsclub1.png", "images/soulsclub2.png", "Remera NEGRA", "$25.000", "", "productosPagesHtml/remeraEysBlanca.html", "Remera de Blanca con estampado negro");
productCreator("images/mysaint1.webp", "images/soulsclub2.png", "Remera ROSA", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Violeta");
productCreator("images/mysaint1.webp", "images/soulsclub2.png", "Remera VERDE", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Violeta");
productCreator("images/mysaint1.webp", "images/soulsclub2.png", "Remera BLANCA", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Violeta");
productCreator("images/mysaint1.webp", "images/soulsclub2.png", "Remera BEIGE", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Violeta");
productCreator("images/mysaint1.webp", "images/soulsclub2.png", "Remera VIOLETA", "$32.500", "", "productosPagesHtml/remeraEysBlanca.html", "Remera Violeta");



// Finalmente, añadir el fragmento completo al DOM
productsMain.appendChild(fragment);


// ------------------------------------- AGREGAR AL CARRITO ------------------------------------

const carritoContainerMayor = document.querySelector(".header__interaccion-cart");
const menuCarrito = document.querySelector(".header__interaccion-cart-msj-container");
const carritoVacio = document.querySelector(".header__interaccion-cart-msj");
const contenedorElementosCarrito = document.querySelector(".header__interaccion-cart-info-main-container");

// MENSAJE CARRITO VACIO DOM

const mensajeCarritoVacio = document.querySelector(".header__interaccion-cart-msj-container")

// MENSAJES DE PRODUCTO YA EN CARRITO Y DE AGREGADO CORRECTAMENTE

let exitoAgregado= document.querySelector(".exitoAlert")
let errorDuplicadoEntrada = document.querySelector(".errorAlert")
let errorDuplicadoSalida = document.querySelector(".errorAlert")


let cantidadInicial = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(imagen, titulo, precio) {
    exitoAgregado.classList.add("header__interaccion-cart-mensaje-exito-entrada");
    setTimeout(() => {
        exitoAgregado.classList.add("header__interaccion-cart-mensaje-exito-salida");
    }, 3000);
    
    setTimeout(() => {
        exitoAgregado.classList.remove("header__interaccion-cart-mensaje-exito-salida");
        exitoAgregado.classList.remove("header__interaccion-cart-mensaje-exito-entrada");
    }, 4000); // Se da un poco más de tiempo para quitar la animación de salida
    
    // Verificación de producto duplicado en el carrito
    const productoDuplicado = Array.from(contenedorElementosCarrito.children).find(elemento => {
        return elemento.querySelector(".header__interaccion-cart-info-title").textContent === titulo;
    });
    
    if (productoDuplicado) {
        // Mostrar mensaje de error de duplicado
        errorDuplicadoEntrada.classList.add("header__interaccion-cart-mensaje-error-entrada");
    
        setTimeout(() => {
            errorDuplicadoEntrada.classList.add("header__interaccion-cart-mensaje-error-salida");
        }, 3000);
    
        setTimeout(() => {
            errorDuplicadoEntrada.classList.remove("header__interaccion-cart-mensaje-error-entrada");
            errorDuplicadoEntrada.classList.remove("header__interaccion-cart-mensaje-error-salida");
        }, 4000); // Similarmente, esperamos un poco más para limpiar la clase de salida
    
        return; // No continuar si ya hay un duplicado
    }

    cantidadInicial = 1;   
    const contenedor = document.createElement('div');
    contenedor.classList.add('header__interaccion-cart-info-container');

    contenedor.innerHTML = `
        <div class="header__interaccion-cart-info-wrapper">
            <img class="header__interaccion-cart-info-image" src="${imagen}" alt="${titulo}">
            <div class="header__interaccion-cart-info-containerDos">
                <div class="header__interaccion-cart-info">
                    <h2 class="header__interaccion-cart-info-title">${titulo}</h2>
                    <p class="header__interaccion-cart-info-price">${precio}</p>
                </div>
                <div class="header__interaccion-cart-info-cant-container">
                    <button class="header__interaccion-cart-info-cant-menos-button">-</button>
                    <p class="header__interaccion-cart-info-cant">${cantidadInicial}</p>
                    <button class="header__interaccion-cart-info-cant-mas-button">+</button>
                </div>
            </div>
        </div>
    `;

    // Agregar el nuevo contenedor al carrito
    contenedorElementosCarrito.appendChild(contenedor);

    // Obtener los botones de sumar/restar cantidad dentro de este nuevo contenedor
    const agregarPrenda = contenedor.querySelector(".header__interaccion-cart-info-cant-mas-button");
    const sacarPrenda = contenedor.querySelector(".header__interaccion-cart-info-cant-menos-button");
    const cantidadTexto = contenedor.querySelector(".header__interaccion-cart-info-cant");

    let carritoVacio = true

    if(contenedorElementosCarrito.children.length > 0 ){
        carritoVacio = false;
        mensajeCarritoVacio.style.display = "none";
    } else {
        carritoVacio = true;
        mensajeCarritoVacio.style.display = "flex"
    }



    agregarPrenda.addEventListener("click", () => {
        cantidadInicial++;
        cantidadTexto.textContent = cantidadInicial; // Actualizar cantidad visualmente

        // Obtener el precio original desde el DOM (sin símbolos como '$')
        let precioOriginal = parseFloat(precio.replace('$', '').replace('.', ''));
        
        // Multiplicar el precio por la cantidad
        let precioTotal = precioOriginal * cantidadInicial;
        
        // Actualizar el precio total en el carrito
        const precioElement = contenedor.querySelector('.header__interaccion-cart-info-price');
        precioElement.textContent = `$${precioTotal.toLocaleString()}`;
    });
    

    sacarPrenda.addEventListener("click", () => {
        if (cantidadInicial > 1) {
            cantidadInicial--;
            cantidadTexto.textContent = cantidadInicial; // Actualizar cantidad visualmente
            
            // Obtener el precio original desde el DOM
            let precioOriginal = parseFloat(precio.replace('$', '').replace('.', ''));
            
            // Multiplicar el precio por la cantidad
            let precioTotal = precioOriginal * cantidadInicial;
            
            // Actualizar el precio total en el carrito
            const precioElement = contenedor.querySelector('.header__interaccion-cart-info-price');
            precioElement.textContent = `$${precioTotal.toLocaleString()}`;
        }
    });


    const precioTotalNumero = ()=>{
        const contenedorCarrito = document.querySelector(".header__interaccion-cart-info-wrapper")
        let precioFinalCarrito = document.createElement("DIV")
        precioFinalCarrito.classList.add("precioFinalCarrito")
        contenedorCarrito.appendChild(precioFinalCarrito)
        precioFinalCarrito.innerHTML = precioTotal
    }

    precioTotalNumero()

}


// const crearProductoCarrito = ()=>{




    // const productoCarrito = document.createElement("DIV")

    // productoCarrito.classList.add("carrito__container");

    // menuCarrito.appendChild(productoCarrito)

    // const imagenCarrito = productCreator(imagen)
    // const tituloCarrito = productCreator(titulo)
    // const precioCarrito = productCreator(precio)

    // productoCarrito.appendChild(imagenCarrito);
    // imagenCarrito.classList.add("imagenCarrito");
    // productoCarrito.appendChild(tituloCarrito);
    // tituloCarrito.classList.add("tituloCarrito");
    // productoCarrito.appendChild(precioCarrito);
    // precioCarrito.classList.add("precioCarrito")

// }



    // let mensajeErrorContainer = document.createElement("DIV");
    // mensajeErrorContainer.classList.add("carrito__mensaje-error-container");
    // let mensajeError = document.querySelector("P");
    // mensajeError.classList.add("carrito__mensaje-error");
    // mensajeErrorContainer.appendChild(mensajeError)
    // mensajeError.innerHTML = "El producto ya esta en el carrito"
    // carritoContainerMayor.appendChild(mensajeErrorContainer)
    
    // let estadoCarrito = false


    // if(estadoCarrito == false){
    //     crearProductoCarrito()   
    //     estadoCarrito = true
    // } else {
    //     mensajeError.style.display = "flex"
    //     return mensajeErrorContainer;
    // }

    // if (productoEnCarrito) {
    //     setTimeout(() => {
    //         mensajeErrorContainer.style.display = "none";
    //     }, 500);
    // }})



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
