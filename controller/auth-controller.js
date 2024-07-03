const User = require("../model/user_model");

const home = async (req, res) => {
  try {
    res.status(200).send("home page");
  } catch (error) {
    console.log(error);
  }
};
const contact = async (req, res) => {
  try {
   
    const { username, email, subject, message } = req.body;
    const userCreated = await User.create({
      username,
      email,
      subject,
      message,
    });
    res.status(200).json({ message: req.body });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, contact };
