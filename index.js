const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("hello from middlewarE");
    next();
});
app.use((req,res,next) => {
   console.log("hello from another middleware");
   res.send('<h1>hello from Express</h1>');
})




const server = http.createServer(app);
server.listen(3000)
