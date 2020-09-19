const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  
    name: {type: String},
    creationDate: {type: String},
    dateOfBirth: {type: String},
    price: {type: Number},
    stock: {type: Number},
    productStatus: {type: String}
});

module.exports = mongoose.model('Product', productSchema);