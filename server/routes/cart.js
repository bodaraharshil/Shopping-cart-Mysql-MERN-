const express = require("express");
const app = express();
const router = express.Router();
const Cart = require("../models/cart");
const auth = require("../middleware/auth");
const Product = require("../models/product");

router.post("/addorder", async (req, res) => {
  try {
    const userid = req.body.userid;
    const amount = req.body.amount;
    const cartdata = Cart.create({
      userid,
      amount,
    });
    cartdata
      .then((data) => {
        res.status(200).json({
          message: "order add in a cart",
        });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({
          error: "something went wrong",
        });
      });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "something went wrong",
    });
  }
});

router.get("/allorder", async (req, res) => {
  try {
    const data = await Cart.findAll();
    if (data) {
      return res.status(200).json({
        data,
      });
    } else {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: "something went wrong",
    });
  }
});

module.exports = router;
