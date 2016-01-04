module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/warmup_1_4'
  },
  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
