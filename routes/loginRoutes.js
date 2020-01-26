const LoginController = require('../controllers/loginController');
const BaseRoutes = require('./baseRoutes');

class LoginRoutes extends BaseRoutes {
  constructor() {
    super(LoginController);
  }

  getRoutes() {
    this.addRoute('/login', 'post', 'loginUser');
    return this.routes;
  }
}

module.exports = LoginRoutes;
