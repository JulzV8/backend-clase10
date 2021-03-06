const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const productosRouter = require('./routes/productos')
const handlebars = require("express-handlebars")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/productos/",productosRouter)

const server = app.listen(PORT, ()=>{
  console.log(`escuchando ${PORT}`);
})

app.engine("jev",handlebars.engine({
  extname: ".jev",
  defaultLayout: "index.jev",
  layoutsDir: __dirname + "/views/layouts",
  partialsDir: __dirname + "/views"
}));

app.set('views','./views');
app.set('view engine','jev');

app.get("/",(req,res)=>{
  res.render("main");
})

server.on("error",(err)=>{
  console.log(`Error: ${err}`);
})