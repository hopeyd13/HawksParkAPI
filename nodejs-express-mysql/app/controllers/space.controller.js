const Space = require("../models/space.model.js");

//retrieve all spaces from database
exports.findAll = (req, res) => {
    Space.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving spaces."
            });
         else res.send(data);
    });
};

//update a space
exports.update = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    Space.markSpaceAvail(
        req.params.spaceID,
        new Space (req.body),
        (err, data) => {
            if(err){
                if(err.kind === "not_found"){
                    res.status(404).send({
                        message: `Not found space with id ${req.params.spaceID}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Space with id " + req.params.spaceID
                    });
                }
            } else res.send(data);
        }
    );
};