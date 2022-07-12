const User = require('../Services/Userscreate');

// Este endpoint chama o método create do Services para salvar um usuário no banco.
const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  try {    
    const { data, code } = await User.create({ displayName, email, password, image });
   
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
