const ExpressApp = require('./expressApp');
const Router = require('./routes/Router');
const IndexRoutes = require('./routes/indexRoutes');
// const BooksListRoutes = require('./routes/booksListRoutes')

const router = new Router(
    [
      new IndexRoutes(),
    ],
);

const expressApp = new ExpressApp(router);

expressApp.run();
