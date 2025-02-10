const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');


exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    const user = new User({ name, email, password, role });
    await user.save()
    res.status(StatusCodes.CREATED).json({ status: true, code: 201, msg: 'Registration successful', data: { user } });
}