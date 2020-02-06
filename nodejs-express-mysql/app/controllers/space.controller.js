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

//retrieve all spaces from database
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

//returns all available spaces in db
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

//returns available spaceas in row
exports.findAvailSpacesInRow = (req, res) => {
    Space.findAvailSpacesInRow(
        req.params.rowID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns available spaces in a lot
exports.findAvailSpacesInLot = (req, res) => {
    Space.findAvailSpacesInLot(
        req.params.lotID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns handicap spaces
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

//returns all occupied spaces in db
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

//returns occupied spaces in a row
exports.findOccupiedSpacesInRow = (req, res) => {
    Space.findOccSpacesInRow(
        req.params.rowID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns occupied spaces in a lot
exports.findOccupiedSpacesInLot = (req, res) => {
    Space.findOccSpacesInLot(
        req.params.lotID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns all reserved spaces in db
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

//returns reserved spaces in a row
exports.findReservedSpacesInRow = (req, res) => {
    Space.findReservedSpacesInRow(
        req.params.rowID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns reserved spaces in a lot
exports.findReservedSpacesInLot = (req, res) => {
    Space.findReservedSpacesInLot(
        req.params.lotID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns all closed spaces in db
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

//returns closed spaces in a row
exports.findClosedSpacesInRow = (req, res) => {
    Space.findClosedSpacesInRow(
        req.params.rowID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};

//returns closed spaces in a lot
exports.findClosedSpacesInLot = (req, res) => {
    Space.findClosedSpacesInLot(
        req.params.lotID,
        (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving available handicapped spaces"
            });
        else res.send(data);
    });
};


//sets a space's status to available
exports.markAvail = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceAvail(
        req.params.spaceID,
        req.body,
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

//sets a space's status to occupied
exports.markOcc = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceOcc(
        req.params.spaceID,
        req.body,
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

//sets a space's status to reserved
exports.markReserved = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceReserved(
        req.params.spaceID,
        req.body,
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

//sets a space's status to closed
exports.markClosed = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Space.markSpaceClosed(
        req.params.spaceID,
        req.body,
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