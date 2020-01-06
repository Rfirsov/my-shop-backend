const IndexController = require('../controllers/indexController');
const BaseRoutes = require('./baseRoutes');

class IndexRoutes extends BaseRoutes {
  constructor() {
    super(IndexController);
  }

  getRoutes() {
    this.addRoute('/', 'get', 'index');
    return this.routes;
  }
}

module.exports = IndexRoutes;
