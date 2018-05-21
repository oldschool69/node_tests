const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
            error: 'Page not found.',
            name: 'Todo App v1.0'
        }
    );
});

//Get /users  array of users
//Give users a name and age property

app.get('/users', (req, res) => {

    var users = [
        {
            name: 'Flavio',
            age: 45
        },
        {
            name: 'Carlos',
            age: 15
        },
        {
            name: 'Maria',
            age: 59
        }
    ];

    res.send(users);

});

app.listen(3000);
module.exports.app = app;