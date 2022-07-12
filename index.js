const express = require('express');
const bodyParser = require('body-parser');
const Users = require('./Controllers/Userscreate');
const Login = require('./Controllers/Userslogin');
const Auth = require('./middlewares/autentication');
const Allusers = require('./Controllers/Usersget');
const Oneuser = require('./Controllers/Userbyid');
const Poscategories = require('./Controllers/Postcreate');
const Allcategories = require('./Controllers/Categoriesget');
const Postblog = require('./Controllers/Blogcreate');
const errormidware = require('./middlewares/errormidware');
const Getpost = require('./Controllers/Blogpostget');

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', Users.create);

app.post('/login', Login.login);

app.get('/user', Auth, Allusers.findAll);
app.get('/user/:id', Auth, Oneuser.findByPk);

app.post('/categories', Auth, Poscategories.create);

app.get('/categories', Auth, Allcategories.findAll);

app.post('/post', Auth, Postblog.createBlogController);

app.get('/post', Auth, Getpost.findAll);

app.use(errormidware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
