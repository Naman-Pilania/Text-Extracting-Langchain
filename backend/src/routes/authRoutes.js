const express = require('express');
const passport = require('../config/passport');
const cors = require('cors');

router.use(cors());
const router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({ message: 'Login successful', user: req.user });
});

router.post('/register', (req, res) => {
    // Create new user
    const newUser = new User({ username: req.body.username });
    User.register(newUser, req.body.password, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(400).json({ message: 'Registration failed' });
        }
        res.json({ message: 'Registration successful', user });
    });
});

module.exports = router;
