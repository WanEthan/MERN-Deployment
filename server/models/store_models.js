const mongoose = require('mongoose');


const StoreSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Store name is required"],
        minlength: [3, "Name must be at least 3 characters long."]
    },
    number: {
        type: Number,
        required: [true, "Store number is required"],
        min: [0, "Store number must be greater than 0."]
    },

    isOpen: {
        type: Boolean
    }

}, { timestamps: true })


module.exports = mongoose.model('Store', StoreSchema);