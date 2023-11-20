// Importar o modulo de Router do express
const { Router } = require('express');

// Instanciar o Router na variável router
const router = Router();

router.get('/listar', (request, response) => {
    response.send('Método GET: listar produtos');
});
router.post('/cadastrar', (request, response) => {
    response.send('Método POST: cadastrar produto');
});
router.put('/user/:id', (request, response) => {
    response.send('Método PUT: editar produto');
});
router.delete('/user/:id', (request, response) => {
    response.send('Método DELETE: deletar produto');
});

module.exports = router;
