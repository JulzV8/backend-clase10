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

app.set('views','./views');
app.set('view engine','pug');

app.get("/",(req,res)=>{
  res.render("main.pug");
})

server.on("error",(err)=>{
  console.log(`Error: ${err}`);
})