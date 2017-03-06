import Boom from 'boom';
import { User } from '../models';

export async function index(request, reply) {
  const users = await User.query();
  return reply(users);
}

export async function show(request, reply) {
  const id = request.params.id;
  const user = await User.query().findById(id);

  if (!user) return reply(Boom.badRequest('User not found'));
  return reply(user);
}

export function store() {

}

export function update() {

}

export function edit() {

}
