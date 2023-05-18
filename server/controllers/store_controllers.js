const Store = require("../models/store_models")


// READ All Stores
module.exports.allStores = (req, res) => {
    Store.find()      // return an array of objects
        .then(storesList => res.json(storesList))
        .catch(err => res.status(400).json(err))
}

// READ ONE Store

module.exports.oneStore = (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then(foundStore => res.json(foundStore))
        .catch(err => res.status(400).json(err))
}


// CREATE A Store

module.exports.addStore = (req, res) => {
    Store.create(req.body)   // return new object
        .then(newStore => res.json(newStore))
        .catch(err => res.status(400).json(err))
}

// UPDATE Store

module.exports.editStore = (req, res) => {
    Store.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedStore => {
            res.json(updatedStore)
        })
        .catch(err => res.status(400).json(err))
}

// DELETE Store

module.exports.removeStore = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(status => res.json(status))
        .catch(err => res.status(400).json(err))

}