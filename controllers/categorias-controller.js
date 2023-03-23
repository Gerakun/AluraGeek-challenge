import {productServices} from "../service/product-service.js"

const crearNuevaLinea = (imagen, nombre, precio, id) => {
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

const productosStarWars = document.querySelector("[data-star-wars]");
const productosConsolas = document.querySelector("[data-consolas]");
const productosDiversos = document.querySelector("[data-diversos]");


productServices.listaProductos().then((data) => {
    data.forEach(({imagen, nombre,precio,categoria,id}) => {

        if(categoria === "Star Wars"){
            const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
            productosStarWars.appendChild(nuevaLiena);
        }else if(categoria === "Consolas"){
            const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
            productosConsolas.appendChild(nuevaLiena);
        }else if(categoria === "Diversos"){
            const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
            productosDiversos.appendChild(nuevaLiena);
        }
        
    });
}).catch((error) => alert("Ocirrió un error"));


     

