import path from 'path';

const Good = require('good');

export default {
  register: Good,
  options: {
    reporters: {
      file: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          error: '*',
        }],
      }, {
        module: 'good-squeeze',
        name: 'SafeJson',
        args: [null, { separator: ', ' }],
      }, {
        module: 'rotating-file-stream',
        args: [
          'hapi.log',
          {
            interval: '1d',
            path: path.join(__dirname, '../storage/logs/'),
          },
        ],
      }],
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          log: '*',
          response: '*',
          error: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
};
