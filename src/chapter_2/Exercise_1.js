const Sequelize = require("sequelize")

const sequelize = new Sequelize("database_development", "meadowse", null, {
    dialect: "postgres",
    host: "localhost",
    define: {
        timestamps: false
    }
})
const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const Order = sequelize.define("Order", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})
const MenuItem = sequelize.define("MenuItem", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    picture: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    callQuantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.hasMany(Order, { onDelete: "cascade" })
Order.hasMany(MenuItem, { onDelete: "cascade" })

sequelize.sync({forse:true}).then(()=>{
    console.log("Tables have been created")
}).catch(err=>console.log(err))
