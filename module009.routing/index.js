const express = require('express');
const app = express();

app.get("/", (req, res) => {
    try{
        return res.sendFile(__dirname + "/index.html");
    } catch(err) {
        return res.send("404 NOT FOUND");
    }
});

app.get("/hello", (req, res) => {
    if (req.aa) {
        console.log(req.aa);
    }
    return res.json({hello: "hello"});
});

app.listen(8000, () => console.log('port : 8000'));