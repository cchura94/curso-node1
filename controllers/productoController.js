var productos = [];
function listar(req, res) {
  res.json(productos);
}

function guardar(req, res) {
  console.log(req.body);
  productos.push(req.body);
  res.json({ mensaje: "Producto registrado" });
}

function mostrar(req, res) {
  var id = req.params.id;

  res.send("Mostrando...");
}

function modificar(req, res) {
  res.send("Modificando...");
}

function eliminar(req, res) {
  var id = req.params.id;
  productos.splice(id, 1);
  res.json({ mensaje: "Producto eliminado" });
}

module.exports = {
  listar,
  guardar,
  mostrar,
  modificar,
  eliminar,
};
