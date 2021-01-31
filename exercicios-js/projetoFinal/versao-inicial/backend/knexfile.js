// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user: 'postgres',
    password: 'ratinho1'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
