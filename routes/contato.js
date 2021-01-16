const { database } = require('../config/database');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    database.query('select * from contato', (err, result) => {
        if(result) {
            res.json(result);
        } else {
            res.json(err);
        }
    });
});

router.post('/register', (req, res) => {
    
    let nome = req.body.nome;
    let email = req.body.email;
    let telefone = req.body.telefone;
    let descricao = req.body.descricao;

    let sql = `insert into contato (nome, email, telefone, descricao, data)
               values ('${nome}',
                       '${email}',
                       '${telefone}',
                       '${descricao}',
                       '${new Date().toLocaleDateString()}')`;

    database.query(sql, (err, result) => {
        if(result) {
            res.json({ status: true, message: 'Contato cadastrado com sucesso.' });
        } else {
            res.json({ status: false, message: err });
        }
    });    
    
});

module.exports = router;
