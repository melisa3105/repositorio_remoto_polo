import { DataTypes } from 'sequelize';
import seq from '../db/connection.sequelize';

const modeloUsuario = seq.define('Usuario',{
    name: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
    },
},
{
    tableName: 'usuarios',
    createdAt: false,
    updatedAt: false
}
);

export default modeloUsuario;