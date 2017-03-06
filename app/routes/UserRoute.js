import Joi from 'joi';
import { UserController } from '../controllers';

export default [{
  method: 'GET',
  path: '/api/users',
  config: {
    handler: {
      async: UserController.index,
    },
    description: 'Get Users',
    notes: 'Return a list of user',
    tags: ['api', 'users'],
    plugins: {
      pagination: {
        enabled: true,
      },
    },
  },
}, {
  method: 'GET',
  path: '/api/users/{id}',
  config: {
    handler: {
      async: UserController.show,
    },
    description: 'Get user info',
    tags: ['api', 'users'],
    validate: {
      params: {
        id: Joi.number().required(),
      },
    },
  },
}];
