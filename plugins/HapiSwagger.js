import HapiSwagger from 'hapi-swagger';
import Pack from '../package.json';

export default {
  register: HapiSwagger,
  options: {
    info: {
      title: 'API Documentation',
      version: Pack.version,
    },
  },
};
