const AuthService = require('../Services/AuthServices');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization || authorization === undefined) {     
      return res.status(401).json({ message: 'Token not found' });
    }
    const user = AuthService.verifyToken(authorization);

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    console.log('teste', user);
    req.user = user;
   
    next();
  } catch (error) {
    console.log('aqui');
    return res.status(401).json({ message: 'Falha na Autenticação' });
  }
};
