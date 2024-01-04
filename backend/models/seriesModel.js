const mongoose = require('mongoose');

const seriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image:{
        type:String,
        required:true,
    },
    drinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drink',
        required: true,
    }],
    franchise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Series', seriesSchema);
