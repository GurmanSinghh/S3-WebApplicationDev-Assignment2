let mongoose = require('mongoose');

let businessModel = mongoose.Schema({

    name: String,
    contact: String,
    email: String,
   



},
{

    collection: "business_list1"

});

module.exports= mongoose.model('Business', businessModel);