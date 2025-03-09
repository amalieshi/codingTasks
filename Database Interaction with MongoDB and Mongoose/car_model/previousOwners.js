const mongoose = require('mongoose');

// Define Mongoose schema with previous owners
const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  previousOwners: [String] // Array of previous owner names
});

const Car = mongoose.model('Car', carSchema);
