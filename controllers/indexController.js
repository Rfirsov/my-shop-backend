const BaseController = require('./baseController');

class IndexController extends BaseController {
  async index() {
    const resource = {};
    try {
      super.ok(resource);
    } catch (err) {
      super.error(err);
    }
  }
}

module.exports = IndexController;
