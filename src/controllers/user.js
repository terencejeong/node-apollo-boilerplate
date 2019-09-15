import { User } from "../models";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (e) {
    res.status(400).send("error", e);
  }
};

const createUser = async (req, res) => {
  try {
    const name = req.body.name;

    const newUser = new User({
      name
    });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (e) {
    res.status(400).send("error", e);
  }
};

const actions = {
  getUsers,
  createUser
};

export default actions;
