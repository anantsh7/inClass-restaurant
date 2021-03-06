// import dependencies (path module)
const path = require("path");

// create and export html routes
// include one route that serves as a "fallback"
module.exports = function(app) {

  // set up home route
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });

  // set up reservations/tables route
  app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/listReservations.html"));
  });

  // set up add new reservation route
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/addReservation.html"));
  });

  // set up fallback route in case other paths aren't hit
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });

}
