const { User } = require('../models');
// const AuthServices = require('./AuthServices');

const findAll = async () => {
  // const result = AuthServices.verifyToken();
  
  const data = await User.findAll();
   return { code: 200, data };
};

module.exports = {
  findAll,
};
