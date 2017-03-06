import { Model } from 'objection';

export default class User extends Model {
  static tableName = 'users';
  static jsonSchema = {
    id: { type: 'integer' },
    email: { type: 'string' },
    name: { type: 'string' },
    password: { type: 'string', minimum: 6, maximum: 32 },
  }
}
