var Hobby = require('../models/hobby');


module.exports = {
    index,
    create
}

function index(req, res) {
    Hobby.find({}, function(err, hobbies) {
        res.render('index', {
            title: "Hobbies",
            hobbies
        })

    })
}

function create(req, res) {
    var hobby = new Hobby(req.body);
    hobby.save(function(err) {
        if (err) return res.redirect('/hobbies');
        res.redirect('/hobbies');
    })
}