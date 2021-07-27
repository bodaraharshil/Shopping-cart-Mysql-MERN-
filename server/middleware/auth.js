const jwt = require("jsonwebtoken");
const {JET_SECRET} =require('../config/jwt');

const User = require("../models/users");

const authentic = async (req, res, next) => {
  try {
    const btoken = req.header("authorization");
    if (!btoken) {
      return res.status(401).json({ error: "Please login first" });
    }
    const token = btoken.replace("Bearer ", "");
    const vtoken = await jwt.verify(token, JET_SECRET);
    if (!vtoken) {
      return res.status(400).send("invalid token");
    }
    const user = await User.findOne({ _id: vtoken._id });
    if (!user) {
      return res.status(400).json({ error: "invalid user" });
    }
    req.user = user;
    req.token = token;
    next();
  } catch {
    res.status(401).json({
      error: "please login first",
    });
  }
};

module.exports = authentic;
