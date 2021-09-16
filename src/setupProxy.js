const express = require('express');

const thetoken = 'THETOKEN';

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/login', (req, res) => {
        const { username, password } = req.body;

        if (username === 'dude' && password === 'hardpassword') {
            res.json({ valid: true, token: thetoken });
        } else {
            res.json({ valid: false });
        }
    });

    app.use('/api/posts', (req, res) => {
        if (req.headers.authorization !== `JWT ${thetoken}`) {
            res.status(403).json({ error: 'You are not authorized!!!!11' });
            return;
        }

        const posts = [{
            id: 'ok1',
            title: 'my first post blahblhablah'
        }, {
            id: 'ok2',
            title: 'cool kids are cool'
        }];

        // "it takes time to load posts"
        setTimeout(() => res.json(posts), 1000);
    });
}

