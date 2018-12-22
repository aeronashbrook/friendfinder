var path = require("path");

module.exports = function(app) {
  app.get("/survey", function (req, response) {
    response.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
    app.get("/home", function(req, response) {
    response.sendFile(path.join(__dirname, "../public/home.html"));
  });
// defaults to home if no matching route is found
  app.get("*", function (req, response) {
    response.sendFile(path.join(__dirname, "/../public/home.html"));
  });
}; 