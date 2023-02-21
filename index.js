// dependencies
const http = require('http')

// app object - module scaffolding
const app = {}

// confiuration
app.config = {
  port: 3000,
}

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes)
  server.listen(app.config.port, () => {
    console.log(`server is listeing to port ${app.config.port}`)
  })
}

// handle request response
app.handleReqRes = (req, res) => {
  // respose handle
  res.end('hello, world!')
}

// run server
app.createServer()
