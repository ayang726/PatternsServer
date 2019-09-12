const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const routineSchema = new Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    beats: Number,
    goalTempo: Number,
    timePracticed: Number,
    startDate: Date,
    fluentTempo: Number
});

const Routine = mongoose.model("Routine", routineSchema);

module.exports = Routine;
