const { BlogPost } = require('../models');

const findByPk = async (id) => {
  const data = await BlogPost.findByPk(id);
  if (!data) {
    return { code: 404, data: { message: 'Post does not exist' } };
  }
  return { code: 200, data };
};

module.exports = {
  findByPk,
};
