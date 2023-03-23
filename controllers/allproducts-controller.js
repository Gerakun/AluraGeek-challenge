import {productServices} from "../service/product-service.js"
 
const crearNuevaLinea = (imagen, nombre, precio,id) => {
    const linea = document.createElement("div")
    const contenido = `<div class="galeriaProductos__container__caja">
                    <img class="galeriaProductos__container__caja-img" src="${imagen}">
                    <p class="galeriaProductos__container__caja-titulo">${nombre}</p>
                    <p class="galeriaProductos__container__caja-precio">${precio}</p>
                    <p class="galeriaProductos__container__caja-producto"><a href="../screens/verProducto.html?id=${id}">Ver producto</a></p>
                </div>`;
                linea.innerHTML = contenido;
                return linea;
}

const todos = document.querySelector("[data-todos]");

productServices.listaProductos().then((data) => {
    data.forEach(({imagen, nombre,precio,id}) => {
        const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
            todos.appendChild(nuevaLiena);
        });
    }).catch((error) => alert("Ocirrió un error"));