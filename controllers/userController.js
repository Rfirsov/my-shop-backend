const BaseController = require('./baseController');
const models = require('../server/models/index');

class UserController extends BaseController {
  async getUser() {
    const { id } = this.query;

    try {
      const resource = await models.User.findByPk(id);
      this.ok(resource);
    } catch (err) {
      this.error(err);
    }
  }

  async createUser() {
    const { name, password } = this.body;

    try {
      const resource = models.User.create({
        name: name,
        password: password
      });
      this.create(resource);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = UserController;
