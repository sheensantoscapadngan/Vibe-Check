const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// POST api/user/register
// Add a user to DB 
// Private
router.post('/register', async (req, res) => {
    const {
        username, 
        email,
        bio,
        picture,
    } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if(user){
            return res.status(400).json({ msg: 'Email is already used' });
        }
        const newUser = new User({
            username,
            email,
            bio,
            picture, 
        });
        await newUser.save();
        res.send('User Registered Successfully');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: 'Server Error'});
    }
});

module.exports = router;