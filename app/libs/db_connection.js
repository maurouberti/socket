var mongoose = require('mongoose');
var connection;

module.exports = function() {
    if (!connection) {
        connection = mongoose.connect('mongodb://localhost:27017/socket', { useNewUrlParser: true, useUnifiedTopology: true });
    }
    return mongoose;
}
