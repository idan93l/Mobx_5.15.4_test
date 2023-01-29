const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: string,
  age: number
}, {timestamps: true});

const CustomerModel = mongoose.model("Customers", CustomerSchema)

module.exports = CustomerModel;

// Please comment out all your code when you are finished.
