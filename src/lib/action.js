"use server";
import { User } from "./models";
import { connectToDB } from "./utils";
const bcrypt = require("bcryptjs");
export const register = async (previousState, formData) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formData);
  if (password != passwordRepeat) {
    return { error: "Password did not match" };
  }
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "User already exits" };
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    const newuser = new User({
      username,
      email,
      password: hashedPass,
    });
    await newuser.save();
    console.log("user saved");

    return { success: true };
  } catch (err) {
    console.log(err);
  }
};
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDB();
    const user = await User.findOne({ username });
    if (!user) {
      return { error: "User doest not exists" };
    }
    const permit = bcrypt.compareSync(password, user.password);
    if (permit) {
      console.log("login success");
      return { success: true };
    } else {
      return { error: "Wrong Credientials" };
    }
  } catch (err) {
    console.log(err);
  }
};
