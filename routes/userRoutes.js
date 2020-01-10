const UserController = require('../controllers/userController');
const BaseRoutes = require('./baseRoutes');

class UserRoutes extends BaseRoutes {
  constructor() {
    super(UserController);
  }

  getRoutes() {
    this.addRoute('/user', 'get', 'getUser');
    this.addRoute('/user', 'post', 'createUser');
    return this.routes;
  }
}

module.exports = UserRoutes;
