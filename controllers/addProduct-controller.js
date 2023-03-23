import { productServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const imagen = document.querySelector("[data-img]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-producto]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    productServices.crearProducto(imagen, categoria, nombre, precio, descripcion).then(() => {
        window.location.href = "/screens/registroCompletado.html"
    }).catch(err => console.log(err));
});