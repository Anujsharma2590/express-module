const express = require('express');

const users = require('./data.json')
const app = express();

//using the middleware 
//app.use(logger)

 app.use(express.json());


app.get('/', (req, res) => {
    res.send("Welcome to HomePage");

})
app.get('/users',logger, (req, res) => {
    console.log(req.name);
    res.send(users);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("hello post")
})

app.patch("/users/:id", (req, res) => {
    res.send("testing patch");
})

app.delete("/users/:id", logger, (req, res) => {
    let key = req.params.id;
     for( let i=0; i<users.length; i++){
        if( users[i].id === key ){
            users.splice(i,1);
        }
    }
    res.send(`${key} users object has been deleted`);
})

//middleware function
 function logger(req, res, next) {
     req.name = "anuj sharma";
     console.log("start logger");
     next();
 }

app.listen(1234, () => {
    console.log("listening to port 1234 .....")
})