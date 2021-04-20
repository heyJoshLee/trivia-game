import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';


export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("Get all users");
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
}

export const createUserOrLogIn = async (req, res) => {
  const user_params = req.body;
  try {
    const userExsist = await User.findOne({username: user_params.username});

    // try logging in if the user already exsists
    if (userExsist) {
      const correctPassword = await bcrypt.compare(user_params.password, userExsist.password);
      if (correctPassword) {
        // log in
        const payload = {
          user: {
            id: userExsist.id
          }
        }
        jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
          if (err) throw err;
          res.status(200).json({token})
        })
      } else {
        return res.status(400).json({message: "Invalid credentials"});
      }
    }
    
    // Create User
    if (user_params.username.length < 3) {
      return res.status(400).json({message: "Username not long enough."});
    }

    if (user_params.password.length < 5) {
      return res.status(500).json({message: "Password not long enough."})
    }
    
    const newUser = await new User({username: user_params.username});
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(user_params.password, salt);
    await newUser.save();
    console.log("New user saved");
    // log in
    const payload = {
      user: {
        id: newUser.id
      }
    }

    jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
      if (err) throw err;
      res.status(200).json({token})
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: error.message})
  }

}