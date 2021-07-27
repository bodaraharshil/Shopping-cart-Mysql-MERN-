const express = require("express");
const auth = require("../middleware/auth");
const Category = require("../models/category");
const router = express.Router();

router.post("/addcategory",async (req, res) => {
  try {
    const category = req.body.category;
    if (!category) {
      return res.send({
        status: 400,
        message: "category is required",
      });
    }
    const catedata = await Category.findOne({
      where: {
        category: category,
      },
    });
    if (catedata) {
      return res.status(400).json({
        message: "you have alerady add a category",
      });
    }
    const categoryData = await Category.create({
      category,
    });
    categoryData
      .save()
      .then((data) => {
        res.status(200).json({
          message: "category add successfuly",
          data:data
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(401).json({
          error: "something went wrong",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "somthing went wrong",
    });
  }
});

router.get("/allcategory",async (req, res) => {
  try {
    Category.findAll()
      .then((data) => {
        return res.status(200).json({
        data: data,
        });
      })
      .catch((error) => {
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

router.delete("/deletecategory/:id",async (req, res) => {
  try {
    const id = req.params.id;
    const deletecategory = await Category.destroy({
      where: {
        id: id,
      },
    });
    if (deletecategory) {
      res.status(200).json({
        message: "category deleteed successfuly",
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

router.post("/updatecategory/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category=req.body.category;
    const updatedata = await Category.update(
      { category: category },
      {
        where: {
          id: id,
        },
      }
    );
    if (updatedata) {
      res.status(200).json({
        message: "category updated successfuly",
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
