import { User } from '../models';

export async function index(request, reply) {
  const users = await User.query();
  return reply(users);
}

export async function show(request, reply) {
  const user = await User.query().findById(request.params.id);
  return reply(user);
}

export function store() {

}

export function update() {

}

export function edit() {

}
