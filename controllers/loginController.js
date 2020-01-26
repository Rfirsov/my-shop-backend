const BaseController = require('./baseController');
const passport = require('passport');
// const models = require('../server/models/index');

class LoginController extends BaseController {
  async loginUser() {
    const { name, password } = this.body;

    try {
      passport.authenticate('local', { successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true })
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = LoginController;
