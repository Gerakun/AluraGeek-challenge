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

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id === null){
        console.log("Hubo error al momento de buscar el producto")
      }

      try{
        const producto = await productServices.detalleProducto(id);

        if(producto.imagen && producto.nombre && producto.precio && producto.descripcion){
            
            const seleccionado = document.querySelector("[data-producto]");

            const contenido = `<div class="verProducto__container-verProducto">
            <img class="verProducto__img"  src="${producto.imagen}">
            <span class="verProducto__span">
            <p class="verProducto__titulo">${producto.nombre}</p>
            <p class="verProducto__precio">${producto.precio}</p>
            <p class="verProducto__descripcion">${producto.descripcion}</p>
            </span>
            </div>`

            seleccionado.innerHTML = contenido;

            const categoriaSolicitada = producto.categoria;
            const idProductoVisto = producto.id;

            const productosSimilares = document.querySelector("[data-productos-similares]");

            productServices.listaProductos().then(data => {
                data.forEach(({imagen, nombre, precio, id, categoria}) => {
                    if(categoria === "Star Wars" && categoriaSolicitada === "Star Wars" && idProductoVisto != id){
                        const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
                        productosSimilares.appendChild(nuevaLiena);
                    }else if(categoria === "Consolas" && categoriaSolicitada === "Consolas" && idProductoVisto != id){
                        const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
                        productosSimilares.appendChild(nuevaLiena);
                    }else if(categoria === "Diversos" && categoriaSolicitada === "Diversos" && idProductoVisto != id){
                        const nuevaLiena = crearNuevaLinea(imagen,nombre,precio,id);
                        productosSimilares.appendChild(nuevaLiena);
                    }
            });
    

      }).catch(error => alert("Ocirrió un error"));   
}else{
    throw new error();
}
}catch(error){
    console.log("catch error", error);
  }
} 
obtenerInformacion();


