const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    try {
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        throw new Error('This email is already taken!');
      }

      // tuka pravime enkripcija na password-ot so koristenje na bcrypt module-ot
      req.body.password = bcrypt.hashSync(req.body.password);
      user = await User.create(req.body);

      res.send({
        error: false,
        message: 'New user record created!',
        user: user
      });
    } catch (error) {
      res.send({
        error: true,
        message: error.message
      });
    }
  },
  login: (req, res) => {
    /**
     * Route for logging in an existing user
     * 1. Vo req.body gi primame podatocite prateni po ovoj HTTP request
     * 2. Vo podatocite: email i password
     * 3. So ovie podatoci treba da proverime dali navistina postoi ovoj korisnik
     * 3.1 Ako postoi, da mu ispratime bilo kakov response vo koj kje mu kazeme "OK!"
     * 3.2 Ako ne postoi, da mu ispratime bilo kakov response vo koj kje mu kazeme "Celadae!"
     * 
     * Resenie:
     * Kje si kazete vie.
     */
  }
}