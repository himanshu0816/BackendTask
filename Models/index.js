const Sequlize=require('sequelize')
const Config=require('../DB_Config/DB_Config').Connection

const sequelize=new Sequlize(Config.database,Config.username,Config.password,{
    host:Config.host,
    dialect:Config.dialect
})

const db={}
db.Sequlize=Sequlize
db.sequelize=sequelize

db.contact=require('./Contatct_model')(sequelize,Sequlize)
module.exports=db