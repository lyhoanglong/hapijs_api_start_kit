import 'babel-polyfill';
import Hapi from 'hapi';
import chalk from 'chalk';

// Plugins
import {
  LogPlugin, DatabasePlugin, HapiSwagger, HandlerAsyncPlugin, Vision, Inert,
  PaginationPlugin,
} from './plugins';

// Route
import Routes from './app/routes';

class Server {
  constructor(port = 3001) {
    this.server = new Hapi.Server();
    this.server.connection({ port });
  }

  async start() {
    try {
      await this.server.register([
        LogPlugin, DatabasePlugin, HandlerAsyncPlugin, Vision, Inert,
        HapiSwagger, PaginationPlugin,
      ]);
      Routes.map(route => this.server.route(route));
      await this.server.start();
      console.log(chalk.bold.blue(`Server running at: ${this.server.info.uri}`));
    } catch (e) {
      console.error(e.stack);
    }
  }
}

(new Server()).start();
