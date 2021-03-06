const express = require('express');

const app = express();

const PORT = 8000;
const routes = require('./routes/index');

// Adding the CORS policy setting

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Adding the body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(process.env.PORT || PORT, () => {
    console.log(`APP is running. listening at http://localhost:${PORT}`);
})
