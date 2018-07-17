var mongoos = request('mongoose');
module.exports = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    gender: String,
    address: String
});