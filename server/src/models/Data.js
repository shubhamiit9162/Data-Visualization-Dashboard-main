const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    date: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    no2: { type: Number, required: true },
    voc: { type: Number, required: true },
    c2h5oh: { type: Number, required: true },
    temperature: { type: Number, required: true },
    humidity: { type: Number, required: true },
    pressure: { type: Number, required: true },
    timeLabels: { type: [String], required: true },
    no2Levels: { type: [Number], required: true },
    vocLevels: { type: [Number], required: true },
    tempLevels: { type: [Number], required: true }
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
