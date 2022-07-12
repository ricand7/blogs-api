const { User } = require('../models');

const findByPk = async (id) => {
  const data = await User.findByPk(id);
  if (!data) {
    return { code: 404, data: { message: 'User does not exist' } };
  }
  return { code: 200, data };
};

module.exports = {
  findByPk,
};
