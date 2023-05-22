const calculator = require('calculator');

module.exports = {
  "GET /": (req, res) => {
    res.send(`This is WWW server! 1 + 2 = ${calculator(1, 2)}`);
  },
};
