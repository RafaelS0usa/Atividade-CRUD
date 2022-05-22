const express = require('express');
const app = express(); 
const port = 2022;

app.use(express.json());

let produtos = [
    {id: 001, nome: 'Cabo Lightning', valor: 'R$200'},
    {id: 002, nome: 'Cabo USB-C', valor: 'R$50'},
    {id: 003, nome: 'Case Pastel-azul', valor: 'R$20'},
    {id: 004, nome: 'Fone de ouvido intraurricular', valor: 'R$10'},
    {id: 005, nome: 'Carregador Motorola', valor: 'R$100'},
    {id: 006, nome: 'Caneta touch', valor: 'R$35'}
]

app.get('/pegando-produtos', (req, res)=>{
    return res.json(produtos)
});

app.post('/adicionando-produtos', (req, res) => {
    const produto = req.body;
    produtos.push(produto);

    return res.status(201).send('Produtos cadastrado com sucesso!');
});

app.put('/alterando-produto', (req, res)=>{
    const {id, nome, valor} = req.body;
    const produtosIndice = produtos.findIndex((user) => user.nome === nome);

    produtos[produtosIndice] = {
        id: id,
        nome: nome,
        valor: valor
    }

    return res.json({produtos});
});

app.delete('/deletando-produto', (req, res)=>{
    const {id} = req.body;
    const produtosIndice = produtos.findIndex((user) => user.id === id);

    produtos.splice(produtosIndice)
    return res.status(201).send({message: `Produto deletado com sucesso! ${id}`})
})

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta: ${port}`)
})