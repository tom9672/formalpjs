import dbConfig from '../config/mysql01.js'
import Sequelize from 'Sequelize'
import emanager from './emanagerTB.js'

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: '0',
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.emanager = emanager(sequelize, Sequelize)
 export default db