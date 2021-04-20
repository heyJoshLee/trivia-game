import jwt from 'jsonwebtoken';
import config from 'config';

const auth = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({msg: "No token. Authorization invalud"});
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({msg: "Token is not valud"});
  }
}

export default auth;