import { Sequelize } from "sequelize";

const sequelize = new Sequelize('adm_reuniones', 'root', '2005malena', {
    host: 'localhost',
    dialect: 'mysql'
  });

export async function autenticarBaseDeDatos(): Promise<void> {
  try {
      await sequelize.authenticate();
      console.log('Base de datos conectada');
  } catch (error) {
      console.error('Error al autenticar la base de datos:', error);
  }
}

export default sequelize;