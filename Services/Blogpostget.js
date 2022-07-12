const { BlogPost, User, Categorie } = require('../models');
// const AuthServices = require('./AuthServices');

const findAll = async () => {
  // const result = AuthServices.verifyToken();
  
  const data = await BlogPost.findAll({
      include: [{
      model: User,
      as: 'user',  
      attributes: { exclude: ['password'] },    
    },
   
    {
      model: Categorie,
      as: 'categories',  
      // attributes: { exclude: ['Postcategorie'] }, 
      through: { attributes: [] },    
    }],    
  });
   return { code: 200, data };
};

module.exports = {
  findAll,
};
