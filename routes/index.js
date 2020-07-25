const productoController = require("./../controllers/productoController.js");

module.exports.adicionar = (app) => {

    app.get("/producto", productoController.listar);
    app.post("/producto", productoController.guardar);
    app.get("/producto/:id", productoController.mostrar);
    app.put("/producto/:id", productoController.modificar);
    app.delete("/producto/:id", productoController.eliminar);

    /*app.get("/categoria", categoriaController.listar);
    app.post("/categoria", categoriaController.guardar);
    app.get("/categoria/:id", categoriaController.mostrar);
    app.put("/categoria/:id", categoriaController.modificar);
    app.delete("/categoria/:id", categoriaController.eliminar);*/

}