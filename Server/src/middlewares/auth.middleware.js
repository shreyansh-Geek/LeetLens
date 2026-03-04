import userModel from "../models/user.model.js";

export const requireAuth = async (req, res, next) => {

  try {

    // check if session exists
    if (!req.session.userId) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    // fetch user
    const user = await userModel.findById(req.session.userId);

    if (!user) {
      return res.status(401).json({
        message: "User not found"
      });
    }

    // attach user to request
    req.user = user;

    next();

  } catch (error) {
    res.status(500).json({
      message: "Internal Authentication error",
      error: error.message
    });
  }

};