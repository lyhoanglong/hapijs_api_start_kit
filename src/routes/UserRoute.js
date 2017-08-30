import {
  resultHTTPStatus,
} from '../config/constants';
import UserController from '../controllers/UserController';

export default [{
  method: 'GET',
  path: '/api/user/profile',
  config: {
    auth: false,
    description: 'Profile',
    notes: 'User profile',
    tags: ['api', 'users'],
    plugins: {
      'hapi-swagger': {
        response: resultHTTPStatus,
      },
    },
    handler: {
      async async(request, reply) {
        return reply(UserController.hello(request));
      },
    },
  },
}];
