module.exports = (sequelize, DataTypes) => {
    const Developer = sequelize.define('Developer', {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      skills: {
        type: DataTypes.STRING,
        allowNull: true,
       
      },
      // info: {
      //   type: DataTypes.STRING,
      //   allowNull: true,
      // },
      education: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: true
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
  