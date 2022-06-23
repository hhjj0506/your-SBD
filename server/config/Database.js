import { Sequelize } from "sequelize";

const db = new Sequelize('sdb_db', 'root', 'js0944', {
    host: "localhost",
    dialect: "mysql",
});

export default db;