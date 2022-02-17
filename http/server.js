const http = require('http')
const server = http.createServer((req,res)=>{
  if (req.url === '/') {
    res.write('sdasd')
    res.end()
  }
})

const PORT = process.env.PORT || 8080
server.listen(PORT)
console.log(`escuchando ${PORT}`);