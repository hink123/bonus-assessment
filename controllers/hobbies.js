var Hobby = require('../models/hobby');


module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
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

function update(req, res) {
    Hobby.findById(req.params.id, function(err, hobby) {
        hobby.name = req.body.name;
        hobby.description = req.body.description;
        hobby.save(function(err) {
            res.redirect('/hobbies');
        })
    })
}

function deleteOne(req, res) {
    Hobby.findByIdAndDelete(req.params.id, function(err, hobby) {
        res.redirect('/hobbies');
    })
}