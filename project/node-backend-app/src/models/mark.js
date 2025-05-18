const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Mark = db.define('Mark', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Students',
            key: 'id'
        }
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Mark;