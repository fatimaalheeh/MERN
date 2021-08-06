const Author = require('../models/author.model');

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err));
};

module.exports.createAuthor = (req, res) => {
    const {name} = req.body;
    Author.create({
       name,
    })
    .then( author => res.json(author))
    .catch(err => {
        res.status(400).json(err);
        console.log(err);
    });//.status(400)   *this is new
};

module.exports.getAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.json(err));
};

module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}

// module.exports.updateAuthor = (req, res) => {
//     const {title, price, description} = req.body;
//     Author.update({ title, price, description })
//     .then( author => res.json(author))
//     .catch(err => res.json(err));
// };
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}