

var events =require ('../events.json');
exports.view = function(req, res) {
    console.log("#Token here ");

    res.render('notes',events);
};

