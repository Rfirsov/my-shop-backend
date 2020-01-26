const ExpressApp = require('./expressApp');
const Router = require('./routes/Router');
const IndexRoutes = require('./routes/indexRoutes');
const UserRoutes = require('./routes/userRoutes');
const LoginRoutes = require('./routes/loginRoutes');
// const BooksListRoutes = require('./routes/booksListRoutes')

const router = new Router(
    [
      new IndexRoutes(),
      new UserRoutes(),
      new LoginRoutes()
    ],
);

const expressApp = new ExpressApp(router);

expressApp.run();
