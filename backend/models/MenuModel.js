// deleve the menu model containing the series and series contains the drinks for that serris 
const mongoose = require('mongoose');


const menuSchema = mongoose.Schema({
    series: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Series',
        required: true,
    }
],
    franchise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Menu', menuSchema);