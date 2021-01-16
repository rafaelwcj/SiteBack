const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const contatoRouter = require('./routes/contato');

app.use('/api/contato', contatoRouter);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Escutando na porta: ' + port);
});