import Hapi from 'hapi';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

import LibPlugin from './plugins';

class Application {
  constructor(port) {
    this.port = port;
    this.server = new Hapi.Server();
    this.server.connection({ port });
  }

  static validate(decoded, request, callback) {
    return callback(null, true);
  }

  addRoute() {
    const routePath = path.resolve(__dirname, './routes');
    fs.readdirSync(routePath).forEach((file) => {
      import(`${routePath}/${file}`).then((routes) => {
        routes.default.map(route => this.server.route(route));
      });
    });
  }

  addAuth() {
    this.server.auth.strategy('jwt', 'jwt', {
      key: process.env.JWT_SECRET,          // Never Share your secret key
      validateFunc: Application.validate,            // validate function defined above
      verifyOptions: { algorithms: ['HS256'] },
    });
    this.server.auth.default('jwt');
  }

  async start() {
    try {
      await this.server.register(LibPlugin);
      this.addAuth();
      this.addRoute();
      await this.server.start();
      console.log(chalk.blue(`Server start at ${this.server.info.uri}`));
    } catch (error) {
      console.log(chalk.red(`Server start with ${error}`));
      console.log(error.stack);
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  (new Application(process.env.APP_PORT)).start();
}

export default Application;
