module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/warmup_1_4'
  },
  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://atlmfsatihlmys:Xd1_3bip8DcdhnkHF9Juxh9dhn@ec2-54-235-147-211.compute-1.amazonaws.com:5432/d14ff6qa474qg4?ssl=true'
  }
}
