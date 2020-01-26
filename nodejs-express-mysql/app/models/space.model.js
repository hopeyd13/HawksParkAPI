const sql = require("C:/Users/hoped/Documents/Practicum/API/nodejs-express-mysql/app/models/db.js");

//constructor
const Space = function(space) {
    this.id = space.ID;
    this.desc = space.Desc;
    this.status = space.Status;
    this.lat = space.Lat;
    this.long = space.Long;
    this.rowID = spaces.Rows_ID;
    this.lotID = spaces.Lots_ID;
    this.typeID = spaces.Type_ID;
};

Space.getAll = result => {
    sql.query("SELECT * FROM spaces", (err, res) => {
        if(err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        console.log("All spaces: ", res);
        result(null, res);
    });
};

Space.findAvail = result => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 1 and space.Type_ID <> 5", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Available spaces: ", res);
        result(null, res);
    });
};

Space.findAvailHandicap = result => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 1 and space.Type_ID = 5", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Available Handicap spaces: ", res);
        result(null, res);
    });
};

Space.findOccupied = result => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 5", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("All Occupied spaces: ", res);
        result(null, res);
    });
};

Space.findAvailSpacesInRow = (rowID, result) => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 1 and space.Rows_ID = rowID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Available spaces in row " + rowID + ": ", res);
        result(null, res);
    });
};

Space.findAvailSpacesInLot = (lotID, result) => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 1 and space.Lots_ID = lotID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Available spaces in lot " + lotID + ": ", res);
        result(null, res);
    });
};

Space.findClosedSpaces = result => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 2", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces: ", res);
        result(null, res);
    });
}

Space.findClosedSpacesInLot = (lotID, result) => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 2 and space.Lots_ID = lotID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces in lot " + lotID + ": ", res);
        result(null, res);
    });
};

Space.findClosedSpacesInRow = (rowID, result) => {
    sql.query("SELECT * FROM spaces WHERE space.Status = 2 and space.Rows_ID = rowID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces in row " + rowID + ": ", res);
        result(null, res);
    });
};

Space.markSpaceAvail = (id, space, result) => {
    sql.query("UPDATE spaces SET space.Status = 1", (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if(res.affectedRows == 0){
            //not found Space with the ID
            result({kind: "not_found"}, null);
            return;
        }
        
        console.log("updates space: ", {id: id, ...space});
        result(null, {id: id, ...space});
    }
    );
};