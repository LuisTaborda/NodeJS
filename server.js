const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
// Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());
// Iniciando o Banco de dados
mongoose.connect(
"mongodb://192.168.99.100:27017/nodeapi",
{
    useNewUrlParser:true,
    useUnifiedTopology: true }
);

requireDir('./src/models');

const Product = mongoose.model("Product");

//primeira Rota
app.use('/api', require("./src/routes"));

app.listen(3001);