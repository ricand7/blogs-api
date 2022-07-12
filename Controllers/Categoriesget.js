const Categories = require('../Services/Categoriesget');

const findAll = async (req, res) => {
   try {    
    const { data, code } = await Categories.findAll();
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAll,
};
