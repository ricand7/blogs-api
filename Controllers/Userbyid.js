const User = require('../Services/Userbyid');

const findByPk = async (req, res) => {
  const { id } = req.params;
   try {    
    const { data, code } = await User.findByPk(id);
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findByPk,
};
