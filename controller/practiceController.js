const db = require("../models");
const Model = db.Practice
const log = require("../server").log || true

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
        if (log) console.log("Creating new record ")
        if (log) console.log(req.body)
        Model
            .create(req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        if (log) console.log('Updating record by Id: ');
        if (log) console.log(req.params.id)
        Model
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        if (log) console.log('Deleting record by Id: ');
        if (log) console.log(req.params.id)
        Model
            .findByIdAndDelete(req.params.id)
            .then(response => res.json(response))
            .catch(err => res.status(422).json(err));
    }
};
