const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    "postgres://fjnqzpxobjnikc:ae54f99ad42e2f3dfb0d9f1e9d394d8e9699eb1383acd527d343fad6733240a9@ec2-34-194-158-176.compute-1.amazonaws.com:5432/d6d3vsn6jedm4h",
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