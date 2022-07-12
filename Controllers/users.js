const { User } = require('../models');

module.exports = async (_req, res, next) => {
  try {
    const allUsers = await User.findAll();

    return res.status(200).json(allUsers);
  } catch (err) {
    return next(err);
  }
};
