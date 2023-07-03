const mongoose = require("mongoose");

const Employees = new mongoose.Schema({
    name:String,
    email:String,
    Number:Number
});

const empModel = mongoose.model("employee",Employees);

module.exports = empModel;