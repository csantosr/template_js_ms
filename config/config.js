module.exports = {
  "dev": {
    "username": process.env.DB_DEV_USER,
    "password": process.env.DB_DEV_PASSWORD,
    "database": process.env.DB_DEV_DATABASE,
    "host": process.env.DB_DEV_HOST,
    "port": process.env.DB_DEV_PORT,
    "dialect": process.env.DB_DIALECT,
  },
  "stg": {
    "username": process.env.DB_STG_USER,
    "password": process.env.DB_STG_PASSWORD,
    "database": process.env.DB_STG_DATABASE,
    "host": process.env.DB_STG_HOST,
    "dialect": process.env.DB_DIALECT,
  },
  "prod": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
  }
}
