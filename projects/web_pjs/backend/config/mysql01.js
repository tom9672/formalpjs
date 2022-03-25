const dbConfig ={
    HOST: "121.41.112.14",
  USER: "root",
  PASSWORD: "zhou.1234",
  DB: "factoryio_test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}

export default dbConfig