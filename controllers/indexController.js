const halson = require('halson');
const BaseController = require('./baseController');

class IndexController extends BaseController {
  async index() {
    const indexURI = this.uriGenerator.getURI(
      'IndexController_index',
      {},
      '_self',
    );

    const resource = halson({ api: 'api v1' });
    try {
      const links = await Promise.all([
        indexURI,
      ]);
  
      links.forEach((link) => {
        if (link) {
          resource.addLink(link.id, link);
        }
      });

      super.ok(resource);
    } catch (err) {
      super.error(err);
    }
  }
}

module.exports = IndexController;
