var path = require("path"); 

module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(_dirman + "/../public/survey.html"));
    }); 

    app.use("/survey", function(req, res){
        res.sendFile(path.join(_dirman + "/../public/home.html"));
    }); 
}