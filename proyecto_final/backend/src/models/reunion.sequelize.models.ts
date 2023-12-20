import { DataTypes } from 'sequelize';
import seq from '../db/connection.sequelize';

const modeloReunion = seq.define('Reunion',{
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
    tableName: 'reuniones',
    createdAt: false,
    updatedAt: false
}
);

export default modeloReunion;