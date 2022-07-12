module.exports = (sequelize) => {
  const Postcategorie = sequelize.define('Postcategorie', 
    {}, { timestamps: false, tableName: 'PostsCategories' });

   Postcategorie.associate = (models) => {
   models.BlogPost.belongsToMany(models.Categorie, {
     as: 'categories',
     through: Postcategorie,
     foreignKey: 'postId',
     otherKey: 'categoryId',
   });
   models.Categorie.belongsToMany(models.BlogPost, {
    as: 'blogposts',
    through: Postcategorie,
    foreignKey: 'categoryId',
    otherKey: 'postId',
  });
  };
  return Postcategorie;
};
