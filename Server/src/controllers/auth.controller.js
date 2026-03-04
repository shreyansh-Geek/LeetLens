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
