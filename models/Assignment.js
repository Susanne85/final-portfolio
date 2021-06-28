const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model { }

Assignment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        assignment_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_github_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_deploy_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_nav_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_img: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assignment_list: {
         type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'assignment',
    }
);

module.exports = Assignment;
