import { Sequelize } from "sequelize";

const sequelize = new Sequelize('adm_reuniones', 'root', '2005malena', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;