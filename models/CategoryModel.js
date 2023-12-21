var mongoose = require('mongoose');
var CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'categories name must be at least 3 characters'],
        maxlength: 20
     },
});
var CategoryModel = mongoose.model('categoriess', CategorySchema);
module.exports = CategoryModel;