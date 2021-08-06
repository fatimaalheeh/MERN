const  {Author}   = require('../models/authr.model');

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name,
    })
        
        .then(authr => res.json(authr))
        .then(
            ()=> 
            {
            console.log("author entered the base!")
            }
        )
        .catch(err => {
            res.status(400).json(err);
            console.log(err);
        })
}
module.exports.getAllAuthors = (request, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}
module.exports.getAuthor = (request, res) => {
    Author.findOne({_id:request.params._id})
        .then(author => res.json(author))
        .then( console.log("we got the author "))
        .catch(err => res.json(err))
}
module.exports.updateAuthor = (request, res) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true,runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => {
            res.status(400).json(err);
        })
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}