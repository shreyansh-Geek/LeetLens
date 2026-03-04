import userModel from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required"
      });
    }

    // check if user already exists
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User with this email already exists"
      });
    }

    // create user
    const user = await userModel.create({
      name,
      email,
      password
    });

    // create session (auto login)
    req.session.userId = user._id;

    // remove sensitive data before sending
    const safeUser = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    res.status(201).json({
      message: "User registered successfully",
      user: safeUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message
    });
  }
};


export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    // find user and include password
    const user = await userModel
      .findOne({ email })
      .select("+password");

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    // create session
    req.session.userId = user._id;

    const safeUser = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    res.status(200).json({
      message: "Login successful",
      user: safeUser
    });

  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message
    });
  }
};


export const logoutUser = (req, res) => {

  req.session.destroy((err) => {

    if (err) {
      return res.status(500).json({
        message: "Logout failed"
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      message: "Logged out successfully"
    });

  });

};