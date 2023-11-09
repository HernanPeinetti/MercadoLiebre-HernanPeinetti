const express = require("express");
const path = require("path");
const app = express();

let pathPublic = path.resolve("public");
app.use(express.static(pathPublic));

 let pathPublic2 = path.resolve("views");
 app.use(express.static(pathPublic2));



app.listen(3000, () =>{
    console.log("Servidor Levantado");
})

app.get("/", (req, res)=>{
    let homeHtml = path.resolve(__dirname, "./views/home.html");
    res.sendFile(homeHtml);

});

app.get("/login", (req, res) =>{
    let loginHtml = path.resolve(__dirname, "./views/login.html");
    res.sendFile(loginHtml);
});



    



