module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: {
      primaryKey: true, 
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return Categorie;
};
