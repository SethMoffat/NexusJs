const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "put link here"
    {
        dialect: "postgres",
        dialectOptions: {
        ssl:{
            require: true,
            rejectUnauthorized: false
            }
        }
    }

)

module.exports = sequelize
