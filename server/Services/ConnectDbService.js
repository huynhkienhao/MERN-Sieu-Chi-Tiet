const mongoose = require('mongoose');

connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern_auth');
        console.log('Connect database success');
    } catch (error) {
        console.log(`Connect database fail ${err}`);
    }
}

module.exports = connectDatabase;