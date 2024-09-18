module.exports = (sequelize, DataTypes) => {
    const Developer = sequelize.define('Developer', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      skills: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      education: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
      {
        sequelize,
        modelName: 'Developer',
        indexes: [
          {
            unique: true,
            fields: ['name']
          }
        ]
      });
    return Developer;
  };
  