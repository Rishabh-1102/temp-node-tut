const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.end("Welcome to our home page") 
    }
    else if(req.url === '/about'){
        res.end("Here is a short history of our page")
    }
    else{
        res.end(`
            <h1>OOPS!!</h1>
            <p>We cant seem to find the page you are looking for
            <a href='/'>Back home</a>
    `)}
}).listen(5000);