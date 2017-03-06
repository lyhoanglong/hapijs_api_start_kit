import { Model } from 'objection';
import Knex from 'knex';
import knexConfig from '../config/knexfile';

exports.register = (server, options, next) => {
  const knex = Knex(knexConfig);
  Model.knex(knex);
  next();
};

exports.register.attributes = {
  name: 'database',
  version: '1.0.0',
  multiple: true,
};
