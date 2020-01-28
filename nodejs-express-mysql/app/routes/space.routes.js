module.exports = app => {
    const spaces = require("C:/Users/hoped/Documents/Practicum/API/nodejs-express-mysql/app/controllers/space.controller.js");

    //create a new space
    app.post("/spaces", spaces.create);
    
    //get all spaces
    app.get("/spaces", spaces.getAll);

    //get all available spaces
    app.get("/spaces:", spaces.findAvail);

    //get all handicap spaces
    app.get("/spaces", spaces.findAvailHandicap);

    //get all occupied spaces
    app.get("/spaces", spaces.findOccupied);

    //get all spaces in a row
    app.get("/spaces/:rowID", spaces.findAvailSpacesInRow);

    //get all spaces in a lot
    app.get("/spaces/:lotID", spaces.findAvailSpacesInLot);

    //get all closed spaces
    app.get("/spaces", spaces.findClosedSpaces);

    //get all closed spaces in a lot
    app.get("/spaces/:lotID", spaces.findClosedSpacesInLot);

    //get all closed spaces in a row
    app.get("/spaces/:rowID", spaces.findClosedSpacesInRow);

    //update a space to set as available
    app.put("/spaces/:spaceID", spaces.markSpaceAvail);
}