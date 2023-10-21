const express = require('express');
const cors = require('cors');
const homes = require('./routes/homes');
const app = express();
const port = 3200;

app.use(cors());
app.use(express.json());
app.use('/homes', homes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/homes', (req, res) => {
//     res.json(locations);
// });

// app.get('/homes/:id', (req, res) => {
//     const location = locations.filter(location => location.id === Number(req.params.id));
//     res.json(location[0]);
// });

let myHomes = [];
app.get('/my-homes', (req, res) => {
    res.json(myHomes);
});
app.post('/my-homes', (req, res) => {
    console.log(req.body)
    myHomes.push(req.body);
    res.sendStatus(202);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});