const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const exerciseSchema = new Schema ({
  type: {type: Text, required: true},
  cardio_name: {type: Text, required: true},
  distance: {type: Number, required: true},
  duration: {type: Number, required: true},
  name: {type: Text, required: true},
  weight: {type: Number, required: true},
  sets: {type: Number, required: true},
  reps: {type: Number, required: true},
  resistance_duration:{type: Number, required: true}
    });
 

const Exercise = mongoose.model('Excercise', exerciseSchema);

module.exports = Exercise;
