const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        // get info from client
        const { username, password, email } = req.body;
        // create data to database
        await userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: 'regular'
        })
        return res.status(200).send('register user');
    } catch (error) {
        console.log('error: ', error);
    }
}

const login = async (req, res) => {
    // Check email exit
    const user = await userModel.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).send('Invalid email or password (không hợp lệ)');
    }

    // Check password
    const isPassValid = bcrypt.compareSync(req.body.password, user.password);
    if (!isPassValid) {
        return res.status(400).send('Invalid email or password (không hợp lệ)');
    }

    const jwtToken = jwt.sign({
        _id: user.id,
        username: user.username,
        role: user.role
    }, process.env.SECRET_JWT, {
        expiresIn: 10
    })

    return res.status(200).send({
        accessToken: jwtToken
    });
}

module.exports = {
    register: register,
    login: login
}