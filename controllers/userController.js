const BaseController = require('./baseController');
const User = require('../server/models/user');

class UserController extends BaseController {
  async getUser() {
    const { id } = this.query;

    try {
      // const userModel = new UserModel({});
      // const resource = await userModel.getResource(this.uriGenerator);
      // const resource = { id: parseInt(id), name: 'test', password: '12' };
      const resource = await models.User.findById(id);
      this.ok(resource);
    } catch (err) {
      this.error(err);
    }
  }

  async createUser() {
    const { name, password } = this.body;
    try {
      console.log('name', name)
      // const userModel = new UserModel({});
      // const resource = await userModel.getResource(this.uriGenerator);
      const resource = models.User.create({
        name: name,
        password: password
      });
      this.ok(resource);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = UserController;
