const User = require('../Services/Userslogin');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {    
    const { data, code } = await User.login({ email, password });
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  login,
};
