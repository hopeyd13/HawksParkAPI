module.exports = app => {
    const spaces = require("../controllers/space.controller.js");

    //create a new space
    app.post("/spaces/create", spaces.create);
    
    //get all spaces
    app.get("/spaces/findAll", spaces.findAll);

    // //get all available spaces
    app.get("/spaces/findAvail", spaces.findAvail);

    // //get all handicap spaces
    app.get("/spaces/findHandicap", spaces.findAvailHandicap);

    // //get all occupied spaces
    app.get("/spaces/findOccupied", spaces.findOccupied);

    // //get all spaces in a row
    app.get("/spaces/findSpacesInRow/:rowID", spaces.findAvailSpacesInRow);

    // //get all spaces in a lot
    app.get("/spaces/findSpacesInLot/:lotID", spaces.findAvailSpacesInLot);

    // //get all closed spaces
    app.get("/spaces/closedSpaces", spaces.findClosedSpaces);

    // //get all closed spaces in a lot
    app.get("/spaces/closedSpacesInLot/:lotID", spaces.findClosedSpacesInLot);

    // //get all closed spaces in a row
    app.get("/spaces/closedSpacesInRow/:rowID", spaces.findClosedSpacesInRow);

    //update a space to set as available
    app.put("/spaces/markSpaceAvail/:spaceID", spaces.markAvail);

    //update a space to set as occupied
    app.put("/spaces/markSpaceOcc/:spaceID", spaces.markOcc);

    //mark a space as closed
    app.put("/spaces/markSpaceClosed/:spaceID", spaces.markClosed);

    //mark a space as reserved
    app.put("/spaces/markSpaceReserved/:spaceID", spaces.markReserved);

    // //get all reserved spaces
    app.get("/spaces/reservedSpaces", spaces.findReservedSpaces);

    // //get all reserved spaces in a lot
    app.get("/spaces/reservedSpacesInLot/:lotID", spaces.findReservedSpacesInLot);

    // //get all reserved spaces in a row
    app.get("/spaces/reservedSpacesInRow/:rowID", spaces.findReservedSpacesInRow);
    
}