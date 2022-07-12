const Blogpost = require('../Services/Blogcreate');

const createBlogController = async (req, res) => {
  const result = req.user;
  
  const { title, content, categoryIds } = req.body;
  try {    
    const { data, code } = await Blogpost.createBlogPost({ result, title, content, categoryIds });
   
    return res.status(code).json(data);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createBlogController,
};
