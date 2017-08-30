require('babel-polyfill');
const Application = require('./').default;

(new Application(process.env.APP_PORT)).start();
