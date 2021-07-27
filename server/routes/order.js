const express = require("express");
const app = express();
const router = express.Router();
const Cart = require("../models/order");
const auth = require("../middleware/auth");
const Product = require("../models/product");

router.post("/addcart", async (req, res) => {
  try {
    const productid = req.body.productid;
    const userid = req.body.userid;
    const qty = req.body.qty;

    const cartdata = Cart.create({
      productid,
      userid,
      qty,
    });
    cartdata
      .then((data) => {
        res.status(200).json({
          message: "product add in a cart",
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

router.get("/allcart", async (req, res) => {
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

router.get("/cart/:id", async (req, res) => {
  const userid = req.params.id;

  Cart.belongsTo(Product, {
    foreignKey: "productid",
});
  const data = await Cart.findAll({
    include: [
      {
        model: Product,
        attributes: ["productname", "category", "photo", "productdetail", "price"],
      },
    ],
    where: { userid: userid },
  });
  return res.status(200).json({
    data,
        });
});

router.delete("/deletecart/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletecart = await Cart.destroy({
      where: {
        id: id,
      },
    });
    if (deletecart) {
      res.status(200).json({
        message: "producrt deleted successfuly",
      });
    } else {
      res.status(401).json({
        message: "something went wrong",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: "something went wrong",
    });
  }
});

module.exports = router;
