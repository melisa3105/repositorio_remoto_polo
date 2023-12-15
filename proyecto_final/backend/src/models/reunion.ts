import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Reunion = db.define('Reunion',{
    dia: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.INTEGER
    },
    duracion: {
        type: DataTypes.INTEGER
    },
    detalle: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'Reuniones',
    createdAt: false,
    updatedAt: false
}
);

export default Reunion;