/* 
This project sets up a javascript application.  This file will run as a script (top to bottom).  

Behind the scenes the express framework sets up low level resources such as sockets, file handlers, 
and an application configuration that allows two way http communication between logical paths within the application.  
Http Verbs will be used to further configure the paths to their appropriate transactions.

Server is just socket connnections and file handlers.  Essentially files are sent back and forth from the socket, and 
are delivered utilizing network layer via TCP/IP to communicate with remote computers. 

HTTP protocol incoming traffic is shaped like a file that has different parts including headers and a body. 
Headers provide a means for the server to route traffic to the appropriate application functions.  

The body (if present) is sent / received between the two communicating applications.

Verbs combined with paths will represent transactions.

http verbs: part of the http standard --> "Get", "Head", "Post", "Put", "Delete", "Options". 
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const expressOasGenerator = require('express-oas-generator');
expressOasGenerator.handleResponses(app,{});
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.json({
        message: "Hello World"
    });
    //res.send("Hello World");
    next();
});

app.get("/path1", (req, res, next) => {
    res.json({
        message: "Hello World from Path 1"
    });
    //res.send("Hello World");
    next();
});

app.get("/path1/:pathVar1", (req, res, next) => {

    const { pathVar1 } = req.params; //object deconstructor -> inside the curly bracecs, each field is mapped to it's corresponding variable name (variable name is the same as the field)
    
    console.log(pathVar1, req.params);
    res.json({
        message: `Hello ${pathVar1}`
    });
    //res.send("Hello World");
    next();
});

app.get("/inventory", (req, res, next) => {
    
    let inventoryCollection = [];
    res.json(inventoryCollection);
    next();
});

app.post("/inventory", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
    next();
});


expressOasGenerator.handleRequests();
app.listen(port, () => {
    console.log(`Net Device Api has started on http://localhost:${port}`);
});