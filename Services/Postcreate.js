const { Categorie } = require('../models');

const create = async ({ name }) => {
  if (!name) return { code: 400, data: { message: '"name" is required' } };
   const { insertId } = await Categorie.create({ name }); 
   const obj = { insertId, name };
   return { code: 201, data: obj };
};

module.exports = {
  create,
};
