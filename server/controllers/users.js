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

export const createUser = async (req, res) => {
  
}