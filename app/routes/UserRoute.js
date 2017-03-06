import { UserController } from '../controllers';

export default [{
  method: 'GET',
  path: '/api/users',
  handler: {
    async: UserController.index,
  },
}, {
  method: 'GET',
  path: '/api/users/{id}',
  handler: {
    async: UserController.show,
  },
}];
