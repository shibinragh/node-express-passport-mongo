var mongoos = request('mongoose');
module.exports = mongoose.model('userInfo', {
    username: String,
    password: String,
    email: String,
    gender: String,
    address: String
});