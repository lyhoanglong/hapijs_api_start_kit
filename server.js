import 'babel-polyfill';
import Hapi from 'hapi';
import chalk from 'chalk';
import { Promise } from 'bluebird';

// Route
import Routes from './app/routes';

// Plugins
import HandlerAsyncPlugin from 'hapi-async-handler';
import { LogPlugin, DatabasePlugin } from './plugins';

class Server {
  constructor(port = 3001) {
    this.server = new Hapi.Server();
    this.server.connection({ port });
  }

  async start() {
    try {
      await this.server.register([LogPlugin, DatabasePlugin, HandlerAsyncPlugin]);
      Routes.map(route => this.server.route(route));
      await this.server.start();
      console.log(chalk.bold.blue(`Server running at: ${this.server.info.uri}`));
    } catch (e) {
      console.error(e.stack);
    }
  }
}

(new Server()).start();
