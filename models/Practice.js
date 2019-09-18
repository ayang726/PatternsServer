const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const effectivenessSchema = new Schema({
    rating: Number,
    effectiveTempo: Number,
    message: String
});

const routineSchema = new Schema({
    userId: { type: String, required: true },
    routineId: { type: String, required: true },
    dateTime: Date,
    practiceTime: Number,
    practiceTempo: Number,
    effectiveness: effectivenessSchema
});


const Routine = mongoose.model("Practice", routineSchema);

module.exports = Routine;
