const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("multer");
const Product = require("../models/product");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/products");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});
var upload = multer({ storage: storage });

router.post("/addproduct", upload.single("photo"), async (req, res) => {
  try {
    const productname = req.body.productname;
    const category = req.body.category;
    const photo = req.file.filename;
    const price = req.body.price;
    const productdetail = req.body.productdetail;
    if (!productname) {
      return res.send({
        status: 400,
        message: "productname is required",
      });
    }
    if (!category) {
      return res.send({
        status: 400,
        message: "category is required",
      });
    }
    if (!price) {
      return res.send({
        status: 400,
        message: "price is required",
      });
    }
    if (!productdetail) {
      return res.send({
        status: 400,
        message: "productdetail is required",
      });
    }
    const productdata = await Product.create({
      productname,
      category,
      photo,
      price,
      productdetail,
    });
    productdata
      .save()
      .then((data) => {
        res.status(200).json({
          message: "product add successfuly",
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

router.get("/allproduct", async (req, res) => {
  try {
    await Product.findAll()
      .then((data) => {
        return res.status(200).json({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({
          error: "something went wrong",
        });
      });
  } catch (error) {
    return res.status(400).json({
      error: "somethig went wrong",
    });
  }
});

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    try {
      const id = req.params.id;
      const deletecategory = await Product.destroy({
        where: {
          id: id,
        },
      });
      if (deletecategory) {
        res.status(200).json({
          message: "producrt deleteed successfuly",
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
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      error: "something went wrong",
    });
  }
});

router.put("/updateproduct/:id", upload.single("photo"), async (req, res) => {
  try {
    const id = req.params.id;
    const productname = req.body.productname;
    const category = req.body.category;
    // const photo= req.file.filename;
    const price = req.body.price;
    const productdetail = req.body.productdetail;

    const updatedata = await Product.update(
      {
        productname: productname,
        category: category,
        photo: req.file.filename,
        price: price,
        productdetail: productdetail,
      },
      {
        where: {
          id: id,
        },
      }
    );
    if (updatedata) {
      res.status(200).json({
        message: "product information updated successfuly",
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

router.get("/catepro/:category", async (req, res) => {
  try {
    const cate = req.params.category;
    const data = await Product.findAll({
      where: {
        category: cate,
      },
    });
    if(data)
    {
      return res.status(200).json({
        data
      });
    }
    else
    {
      return res.status(400).json({
        error:'something went wrong'
      })
    }
  } catch (error) {
    return res.status(400).json({
      error:'something went wrong'
    })
  }
});

router.get("/product/:id",async(req,res)=>{
  try {
    const id = req.params.id;
    const data = await Product.findOne({ where: { id:id} });
    if(data)
    {
      return res.status(200).json({
        data
      })
    }
    else
    {
      return res.status(400).json({
        error:'something went wrong'
      })
    }
  } catch (error) {
    return res.status(400).json({
      error:'something went wrong'
    })
  }  
})

module.exports = router;
