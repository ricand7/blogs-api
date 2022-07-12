const BlogPost = require('../Services/Blogpostget');

const findAll = async (req, res) => {
   try {    
    const { data, code } = await BlogPost.findAll();
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findAll,
};
