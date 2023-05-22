const calculator = require('calculator');

module.exports = {
    'GET /': (req, res) => {
        res.send({
            server: 'API',
            calc: { a: 1, b: 2, result: calculator(1, 2) },
        });
    },
};
