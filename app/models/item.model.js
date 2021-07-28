const mongoose = require('mongoose');
 
const ItemSchema = mongoose.Schema({
    name: String,
    item_id: Number,
    address: String,
    category: String,
    limit_stock: Number,
    open_stock: Number,
    price: Number,
  
});

module.exports = mongoose.model('Item', ItemSchema);