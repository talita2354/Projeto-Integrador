module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
    info: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
  },
    {
      sequelize,
      modelName: 'Project',
      indexes: [
        {
          unique: true,
          fields: ['name']
        }
      ]
    });
  return Project;
};
