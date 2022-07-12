const Postcategorie = require('../Services/Postcreate');

const create = async (req, res) => {
  const { name } = req.body;
  try {    
    const { data, code } = await Postcategorie.create({ name });
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  create,
};
