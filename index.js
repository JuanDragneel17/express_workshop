<<<<<<< HEAD
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const { use } = require('./routes/pokemon');
const app = express();
const pokemon = require('./routes/pokemon');

/*
Verbos HTTP
GET
HOST
PATCH
PUT
DELETE
*/

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenidos a la Pokedex");
});

app.use("/pokemon",pokemon);

app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running...");
=======
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { pokemon } = require('./pokedex.json');

/*
Verbos HTTP
GET
HOST
PATCH
PUT
DELETE
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
    return res.status(200).send("Bienvenidos a la Pokedex");
});

app.post("/pokemon", (req, res, next) => {
    return res.status(200).send(req.body);
});


app.get("/pokemon", (req, res, next) =>{
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',(req, res, next) => {
    const id = req.params.id -1;
    (id >= 0 && id <= 150) ?
        res.status(200).send(pokemon[req.params.id - 1]):
        res.status(404).send("Pokemon no encontrado");
});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) => {
    const name = req.params.name;

    const pk = pokemon.filter((p) => {
        return (p.name.toUpperCase() == name.toUpperCase()) && p;
    });

    (pk.length > 0) ?
        res.status(200).send(pk):
        res.status(404).send("Pokemon no encontrado");
})

app.listen(process.env.PORT || 3000, () =>{
    console.log("Server is running...");
>>>>>>> b4422bfff372b3433f00331d1f78772feb2e3068
});