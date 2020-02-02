const sql = require("./db.js");

//constructor
const Space = function(space) {
    this.desc = space.Desc;
    this.status = space.Status;
    this.lat = space.Lat;
    this.long = space.Long;
    this.rowID = space.Rows_ID;
    this.lotID = space.Lots_ID;
    this.typeID = space.Type_ID;
};

Space.create = (newSpace, result) => {
    sql.query("INSERT INTO spaces SET ?", newSpace, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created space: ", {id: res.insertId, ...newSpace});
        result(null, { id: res.insertId, ...newSpace});
    });
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
    sql.query("SELECT * FROM spaces WHERE `Type_ID` <> 5", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 1 and `Type_ID` = 5", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 5", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 1 and `Rows_ID` = rowID", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 1 and `Lots_ID` = lotID", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 2", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 2 and `Lots_ID` = lotID", (err, res) => {
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
    sql.query("SELECT * FROM spaces WHERE `Status` = 2 and `Rows_ID` = rowID", (err, res) => {
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
    sql.query(
      "UPDATE spaces SET `Desc` = ?, `Status` = 1, `Lat` = ?, `Long` = ?, `Rows_ID` = ?, `Lots_ID` = ?, `Type_ID` = ? WHERE id = ?",
      [space.desc, space.lat, space.long, space.rowID, space.lotID, space.typeID, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Space with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        
      }
    );
    console.log("updated space: ", { id: id, ...space });
        result(null, { id: id, ...space });
  };


Space.markSpaceOcc = (id, space, result) => {
    sql.query(
      "UPDATE spaces SET `Desc` = ?, `Status` = 2, `Lat` = ?, `Long` = ?, `Rows_ID` = ?, `Lots_ID` = ?, `Type_ID` = ? WHERE id = ?",
      [space.desc, space.lat, space.long, space.rowID, space.lotID, space.typeID, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Space with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
      }
    );
    
    console.log("updated space: ", { id: id, ...space });
    result(null, { id: id, ...space });
  };

  Space.markSpaceClosed = (id, space, result) => {
    sql.query(
      "UPDATE spaces SET `Desc` = ?, `Status` = 4, `Lat` = ?, `Long` = ?, `Rows_ID` = ?, `Lots_ID` = ?, `Type_ID` = ? WHERE id = ?",
      [space.desc, space.lat, space.long, space.rowID, space.lotID, space.typeID, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Space with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
      }
    );
    
    console.log("updated space: ", { id: id, ...space });
    result(null, { id: id, ...space });
  };

  Space.markSpaceReserved = (id, space, result) => {
    sql.query(
      "UPDATE spaces SET `Desc` = ?, `Status` = 3, `Lat` = ?, `Long` = ?, `Rows_ID` = ?, `Lots_ID` = ?, `Type_ID` = ? WHERE id = ?",
      [space.desc, space.lat, space.long, space.rowID, space.lotID, space.typeID, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Space with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
      }
    );
    
    console.log("updated space: ", { id: id, ...space });
    result(null, { id: id, ...space });
  };

  Space.findReservedSpaces = result => {
    sql.query("SELECT * FROM spaces WHERE `Status` = 3", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces: ", res);
        result(null, res);
    });
}

Space.findReservedSpacesInLot = (lotID, result) => {
    sql.query("SELECT * FROM spaces WHERE `Status` = 3 and `Lots_ID` = lotID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces in lot " + lotID + ": ", res);
        result(null, res);
    });
};

Space.findReservedSpacesInRow = (rowID, result) => {
    sql.query("SELECT * FROM spaces WHERE `Status` = 3 and `Rows_ID` = rowID", (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("Closed spaces in row " + rowID + ": ", res);
        result(null, res);
    });
};

module.exports = Space;