const sequelize = require("sequelize");
const db = require("../config/config");
var users = db.define(
    "users",
    {
      
        fullname: { type: sequelize.STRING },
        email: {
          type: sequelize.STRING,
          allowNull:false,
          unique:true
        },
        password: {
          type: sequelize.STRING,
          allowNull:false,
        },
        phone: { type: sequelize.STRING },
        instansi: { type: sequelize.STRING },
        level: {
          type: sequelize.BOOLEAN,
          allowNull:false,
        }
      
    },
    {
        // freeze name table not using *s on name
        freezeTableName: false,
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = users;
