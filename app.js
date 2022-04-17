const express = require('express');
const app = express();
function isAuthorized(req, res, next) {
    const auth = req.headers.authorization
    if (auth == 'secretPassword'){
        next();
    }else{
        res.statusCode = 401
        res.send("Not Permitted");
    }
}
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello, moon')
});
app.get('/products', (req, res) => {
   const products = [
       {
           id: 1,
           name: "hammer"
       },
       {
           id: 2,
           name: "wrench"
       },
       {
           id: 3,
           name: "spade"
       }
   ]
    res.json(products);
});
app.get('/users', isAuthorized, (req, res) => {
    res.json([
        {
            id: 1,
            name: 'ian moon'
        }
    ])
})
app.listen(port, () => {
    console.log(`connected to server at port: ${3000}`)
});