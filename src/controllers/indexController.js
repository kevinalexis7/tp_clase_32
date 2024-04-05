const {leerJSON} = require('../data');

module.exports = {
    index: (req,res) => {
        return res.render('index')
    },
    wellcome: (req,res) => {
        return res.render('wellcome')
    }
}