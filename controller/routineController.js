const db = require("../models");
const Model = db.Routine
const log = require("../server").log || true
// Defining methods for the booksController
module.exports = {
    findAllByUser: function (req, res) {
        if (log) console.log("Finding all by User: ")
        if (log) console.log(req.params.userId);
        Model
            .find({ userId: req.params.userId })
            .then(dbModel => {
                if (log) console.log(dbModel);
                return res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        if (log) console.log("Finding by Id: ")
        if (log) console.log(req.body.id);
        Model
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        if (log) console.log("Creating new routine ")
        if (log) console.log(req.body.startDate)
        Model
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        if (log) console.log('Updating routine by Id: ');
        if (log) console.log(req.params.id)
        Model
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        if (log) console.log('Deleting routine by Id: ');
        if (log) console.log(req.params.id)
        Model
            .findByIdAndDelete(req.params.id)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    }
};
