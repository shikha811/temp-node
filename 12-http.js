const http = require(`http`);

const server = http.createServer((req,res)=>{
if(req.url === `/`){
    res.end('welcome to our page')
}

if(req.url === `/about`){
    res.end('here is about page')
}
    //res.write('welcome to our homepage')
res.end(`
<h1>oops!!</h1>
<p>we can not seem to find the page you are looking for</p>`)
})
server.listen(5000)
