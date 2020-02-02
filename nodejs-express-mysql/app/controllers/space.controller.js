const Space = require("../models/space.model.js");

//create and save a new space
exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty!"
        });
    }

    //create a space
    const Space = new Space({
        desc: req.body.desc,
        status: req.body.status,
        lat: req.body.lat,
        long: req.body.long,
        rowID: req.body.rowID,
        lotID: req.body.lotID,
        typeID: req.body.typeID
    });

    //save space in the database
    Space.create(space, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Space."
        });
        else res.send(data);
    });
};

//retrieve node all spaces from database
exports.findAll = (req, res) => {
    Space.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving all spaces."
            });
         else res.send(data);
    });
};

exports.findAvail = (req, res) => {
    Space.findAvail((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available spaces"
            });
        else res.send(data);
    });
}

exports.findAvailHandicap = (req, res) => {
    Space.findAvailHandicap((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findOccupied = (req, res) => {
    Space.findOccupied((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findAvailSpacesInRow = (req, res) => {
    Space.findAvailSpacesInRow((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findAvailSpacesInLot = (req, res) => {
    Space.findAvailSpacesInLot((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findClosedSpaces = (req, res) => {
    Space.findClosedSpaces((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findClosedSpacesInRow = (req, res) => {
    Space.findClosedSpacesInRow((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findClosedSpacesInLot = (req, res) => {
    Space.findClosedSpacesInLot((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};


//mark a space available
exports.markAvail = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
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

exports.markOcc = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceOcc(
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

exports.markClosed = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceClosed(
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

exports.markReserved = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceReserved(
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

exports.findReservedSpaces = (req, res) => {
    Space.findReservedSpaces((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findReservedSpacesInRow = (req, res) => {
    Space.findReservedSpacesInRow((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

exports.findReservedSpacesInLot = (req, res) => {
    Space.findReservedSpacesInLot((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};