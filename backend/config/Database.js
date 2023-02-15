import { Sequelize } from "sequelize";

const db = new Sequelize('upload_db','postgres','27fajar03',{
    host: 'localhost',
    dialect: "postgres"
})

export default db