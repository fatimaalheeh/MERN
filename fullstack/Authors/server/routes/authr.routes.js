const AuthorController = require('../controllers/authr.controller');

module.exports = function(app){
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:_id',AuthorController.getAuthor);
    app.put('/api/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);

}