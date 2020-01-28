const Space = require("C:/Users/hoped/Documents/Practicum/API/nodejs-express-mysql/app/models/space.model.js");

//create and save a new space
exports.create = (req, res) => {
    //validate request
    if(!req.body){
        res.status(400).send({
            message: "content can not be empty!"
        });
    }

    //create a space
    const space = new Space({
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