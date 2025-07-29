const http = require('http')
const fs = require('fs')
const port = 9080

const page = (req, res) => {
  let filename = ""
  switch (req.url) {
    case '/': filename = './index.html'
      break;
    case '/home': filename = './home.html'
      break;
  }

  fs.readFile(filename, (err, result) => {
    if (!err) {
      res.end(result)
    }
  })
}

const server = http.createServer(page)

server.listen(port, (err) => {
  !err ? console.log(`server start on port ${port}`) : console.log('server not started');
})