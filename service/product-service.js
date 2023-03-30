const listaProductos = () => fetch("https://my-json-server.typicode.com/Gerakun/AluraGeek-challenge/productos").then((respuesta) => respuesta.json()); 

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    return fetch("https://my-json-server.typicode.com/Gerakun/AluraGeek-challenge/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion, id: uuid.v4()})
    });
};

const eliminarProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/Gerakun/AluraGeek-challenge/productos/${id}`, {
        method: "DELETE",
    });
};

const detalleProducto = (id) => {
    return fetch(`https://my-json-server.typicode.com/Gerakun/AluraGeek-challenge/productos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto = (imagen, categoria, nombre, precio, descripcion, id) => {
    return fetch(`https://my-json-server.typicode.com/Gerakun/AluraGeek-challenge/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagen, categoria, nombre, precio, descripcion })
    }).then((respuesta) => respuesta).catch(err => console.log(err));
}

export const productServices = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};
 


