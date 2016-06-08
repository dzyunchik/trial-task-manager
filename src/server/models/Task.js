var mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    owner: String,
    performer: String,
    state: String,
    creationDate: String,
    description: String
});
