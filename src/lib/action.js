"use server";
import { User } from "./models";
import { connectToDB } from "./utils";
const bcrypt = require("bcryptjs");
export const register = async (formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password != passwordRepeat) {
    return "Password did not match";
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return "User already exits";
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    const newuser = new User({
      username,
      email,
      password: hashedPass,
    });
    await newuser.save();
    console.log(newuser);
  } catch (err) {
    console.log(err);
  }
};
export const Login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (!user) {
      return "User doest not exists";
    }
    const permit = bcrypt.compareSync(password, user.password);
    if (permit) {
      console.log("login success");
    } else {
      console.log("Wrong password");
    }
  } catch (err) {
    console.log(err);
  }
};
