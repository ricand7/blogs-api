const Joi = require('joi');
const { BlogPost, Categorie } = require('../models');

const createProfileSchema = Joi.object().keys({
  title: Joi.string()
    .required()
    .empty()
    .messages({
      'string.base': '"displayName" should be a type of "text"',
      'string.empty': 'displayName length must be at least 8 charactheres long',
      'string.min': 'displayName length must be at least 8 charactheres long',
  }),
  content: Joi.string()
    .required()
    .empty()
    .messages({
      'string.empty': '"content" is required',
      'any.required': '"content" is required',
    }),
    categoryIds: Joi.required()    
    .empty()    
    .messages({
      'string.empty': '"categoryIds" is required',
      'string.min': '"categoryIds" length must be 6 characters long',
      'string.max': '"categoryIds" length must be 6 characters long',
      'any.required': '"categoryIds" is required',
    }),  
});

const createBlogPost = async ({ result, title, content, categoryIds }) => {
  const { error } = createProfileSchema.validate(
    { title, content, categoryIds },
    { abortEarly: false },
  );  
  if (error) {
    return { code: 400, data: { message: error.message } };
  }
  const bankIds = await Categorie.findAll({ attributes: ['id'] });
  const existbankIds = bankIds.map(({ id }) => id);
  const idsAreValid = categoryIds.every((id) => existbankIds.includes(id));

  if (!idsAreValid) { 
    return { code: 400, data: { message: '"categoryIds" not found' } };
  }
   
   const insertId = await BlogPost.create({ title, content, userId: result });
   const { dataValues: { id } } = insertId;
  
   const obj = { id, userId: result, title, content };
   return { code: 201, data: obj };
};

module.exports = {
  createBlogPost,
};
