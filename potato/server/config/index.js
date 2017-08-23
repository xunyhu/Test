
module.exports = function(app) {
    require('./updata')(app);
    require('./get')(app);
    require('./post')(app);
}