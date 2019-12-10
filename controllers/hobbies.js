var Hobby = require('../models/hobby');


module.exports = {
    index,
    create,
    show
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

function show(req, res) {
    Hobby.findById(req.params.id, function(err, hobby) {
        res.render('show', {hobby});
    })
}