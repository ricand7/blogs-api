module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostsCategories', {
        postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          as: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true    
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          as: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        primaryKey: true 
      },
   
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostsCategories');
  }
};
