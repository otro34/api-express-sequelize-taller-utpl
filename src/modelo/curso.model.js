import { DataTypes } from 'sequelize'

import sequelize from '../config/database.js';

const Curso = sequelize.define('curso', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    profesor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creditos: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Curso;