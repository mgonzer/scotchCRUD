// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/beverages'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }


};
