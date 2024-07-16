const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    title: String,
    address: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: Number,
    chekOut: Number,
    maxGuests: Number,
    price: Number,
});

const Placemodel = mongoose.model('Place', PlaceSchema);

module.exports = Placemodel;