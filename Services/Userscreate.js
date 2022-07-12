const Joi = require('joi');
const { User } = require('../models');
const AuthServices = require('./AuthServices');

const createProfileSchema = Joi.object().keys({
  displayName: Joi.string()
    .empty()
    .min(8).required(),
    // .messages({
    //   // 'string.base': '"displayName" should be a type of "text"',
      // 'string.empty': 'displayName length must be at least 8 charactheres long',
      // 'string.min': 'displayName length must be at least 8 charactheres long',
  // }),
  email: Joi.string()
    .required()
    .empty()
    .email()
    .messages({
      'string.empty': '"email" is required',
      'any.required': '"email" is required',
      'string.email': '"email" must be a valid email',
    }),
    password: Joi.string()
    .required()
    .min(6)
    .max(6)
    .empty()    
    .messages({
      'string.empty': '"password" is required',
      'string.min': '"password" length must be 6 characters long',
      'string.max': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),  
});

const create = async ({ displayName, email, password, image }) => {
  const { error } = createProfileSchema.validate(
    { displayName, email, password },
    { abortEarly: false },
  );  
  if (error) {
    return { code: 400, data: { message: error.message } };
  }
  const validEmailExist = await User.findOne({ where: { email } });
  // console.log(validEmailExist);
  if (validEmailExist) {
    return { code: 409, data: { message: 'User already registered' } };
  }
   
   const { dataValues: { id } } = await User.create({ displayName, email, password, image }); 
   const obj = { id, displayName, email, image };
   const token = AuthServices.genToken(obj);
   return { code: 201, data: { token } };
};

module.exports = {
  create,
};
