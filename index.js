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
import express from 'express';
import  bodyParser  from 'body-parser';
import { handleResponses, handleRequests } from 'express-oas-generator';
import { retrieve, create, deleteOne, update} from "./inventory-crud.js";

const {json} = bodyParser;
const port = 3000;
const app = express();
handleResponses(app,{});
app.use(json());

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
    
    
    res.json(retrieve(null, null) );
    next();
});

app.post("/inventory", (req, res, next) => {
    console.log(req.body);
    let created = create(req.body);
    res.json(created);
    next();
});

/**
 * GET /inventory/{inventoryId}
 * PUT /inventory/{inventoryId}
 * DELETE /inventory/{inventoryId}
 */

app.get("/inventory/:inventoryId", (req, res, next) => {
    const { inventoryId } = req.params;
    let results = retrieve((+inventoryId), null);
    console.log("retrieve by id", (+inventoryId), results);
    res.json(results);
    next();
});

app.get("/inventory_creds", (req, res, next) => {
    const { secret_user } = req.params;
    let results = retrieve(secret_user, req.body);
    console.log("retrieve password from user", secret_user, results);
    res.json(results);
    next();
})

app.put("/inventory/:inventoryId", (req, res, next) => {
    console.log(req.body);
    const { inventoryId } = req.params;
    let updatedInventory = update((+inventoryId), req.body);
    res.json(updatedInventory);
    next();
});

app.delete("/inventory/:inventoryId", (req, res, next) => {
    const { inventoryId } = req.params;
    console.log("delete " + inventoryId);
    let deleted = deleteOne((+inventoryId)) /* The ((+variable)) will change something to "int" in case it was accidentally
    a string. Matthew said to not make it look like you are concatanating stuff*/
    res.json(deleted);
    next();
});


handleRequests();
app.listen(port, () => {
    console.log(`Net Device Api has started on http://localhost:${port}`);
});