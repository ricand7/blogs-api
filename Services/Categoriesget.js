const { Categorie } = require('../models');
// const AuthServices = require('./AuthServices');

const findAll = async () => {
  // const result = AuthServices.verifyToken();
  
  const data = await Categorie.findAll();
   return { code: 200, data };
};

module.exports = {
  findAll,
};
