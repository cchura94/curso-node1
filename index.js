var express = require("express");
var morgan = require("morgan");
//importar las rutas
var rutas = require("./routes/index.js");

var app = express();
app.use(morgan("dev"));

//Habilitar Peticiones en formato json
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded

//Habilitar las rutas
rutas.adicionar(app);

app.post("/profile", function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log("Servidor Levantado...");
});

//Ultimo linea agregada