const Joi = require('joi');
const { User } = require('../models');
const AuthServices = require('./AuthServices');

const createProfileSchema = Joi.object().keys({
   email: Joi.string()
    .required()
    .empty()
    .email()
    .messages({
      'string.empty': '"email" is not allowed to be empty',
      'any.required': '"email" is required',
      'string.email': '"email" mus be a valid email',
    }),
    password: Joi.string()
    .required()
    .min(6)
    .max(6)
    .empty()    
    .messages({
      'string.empty': '"password" is not allowed to be empty',
      'string.min': '"password" length must be 6 characters long',
      'string.max': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),  
});

const login = async ({ email, password }) => {
 const { error } = createProfileSchema.validate(
    { email, password },
    { abortEarly: false },
  );  
  if (error) {
    return { code: 400, data: { message: error.message } };
  }
  const result = await User.findOne({ where: { email } });
  console.log('res', result);
  if (!result) {
    return { code: 400, data: { message: 'Invalid fields' } };
  }
  
  const { dataValues: { id } } = result;
  // const { displayName, image } = result;

  // const { dataValues: { id } } = await User.create({ displayName, email, password, image }); 
  // const obj = { id, displayName, email, image };

  //  const obj = { displayName, email, image };
   const token = AuthServices.genToken(id);
   return { code: 200, data: { token } };
};

module.exports = {
  login,
};
