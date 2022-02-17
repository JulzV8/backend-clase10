const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const productosRouter = require('./routes/productos')
const handlebars = require("express-handlebars")

console.log(arrayProductos);

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/productos",productosRouter)

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
// app.set('view engine','pug');
app.set('view engine','ejs');
app.set('view engine','jev');

// app.get("/hello",(req,res)=>{
//   res.render("hello.pug", {mensaje:"asdsada"});
// })

app.get("/hello",(req,res)=>{
  res.render("test", {mensaje:"ejsss"});
})

app.get("/",(req,res)=>{
  res.render("main", {mensaje:"jghjgjghfgh"});
})

server.on("error",(err)=>{
  console.log(`Error: ${err}`);
})