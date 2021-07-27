const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {} = require("../mail/account");
const { JET_SECRET } = require("../config/jwt");
const auth = require("../middleware/auth");
const { SendEmail } = require("../mail/account");
const { MailConfirm } = require("../mail/mailconfirm");
const User = require("../models/users");
const formValidator = require("validator");
const multer = require('multer');
const mailconfirm = require("../mail/mailconfirm");
const router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

var upload = multer({ storage: storage });

router.post("/signup",upload.single("photo"), async (req, res) => {
  try {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const username = req.body.username;
    const photo = req.file.filename;
    const pass = req.body.password;
    const password = await bcrypt.hash(pass, 10);


    if (!firstname) {
      return res.send({
        status: 400,
        message: "Firstname is required",
      });
    }
    if (!lastname) {
      return res.send({
        status: 400,
        message: "Lastname is required",
      });
    }
    if (!email) {
      return res.send({
        status: 400,
        message: "Email is required",
      });
    }
    if (!formValidator.isEmail(email)) {
      return res.send({
        status: 400,
        message: "Please enter a valid email",
      });
    }
    if (!username) {
      return res.send({
        status: 400,
        message: "Username is required",
      });
    }
    if (!password) {
      return res.send({
        status: 400,
        message: "Password is required",  
      });
    }
    const student = await User.findOne({
      where: {
        email: email,
      },
    });
    if (student) {
      return res.status(400).json({
        message: "Email is alerady used",
      });
    } else {
      const userData = await User.create({
        firstname,
        lastname,
        email,
        username,
        photo, 
        password,
      });
      userData
        .save()
        .then((data) => {
          SendEmail(email, firstname, data.id);
          res.status(200).json({
            message: "you are successfuly Registered",
            data: data,
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(200).json({
            message: "error ocured",
            data: error,
          });
        });
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "somthing went wrong",
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    if (!username) {
      return res.send({
        status: 400,
        message: "Username is required",
      });
    }
    if (!password) {
      return res.send({
        status: 400,
        message: "password is required",
      });
    }
    const status = await User.findOne({where:{ status: 0 },});
    if (status) {
      return res.status(401).json({
        message:'you are not activated'
      })
    } else {
      const finduser = await User.findOne({
        where: {
          username: username,
        },
      });
      if (!finduser) {
        res.status(400).json({
          message: "invalid username",
        });
      } else {
        const isPasswordMatch = await bcrypt.compare(
          password,
          finduser.password
        );
        if (!isPasswordMatch) {
          return res.status(401).json({ msg: "Password incorrect!" });
        } else {
          const usertoken = {
            username: finduser.username,
          };
          const token = jwt.sign(usertoken, JET_SECRET);
          const  { id,username }  = finduser;
          res.json({ token,id,username,message: "you are successfuly Login"});
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(200).json({
      message: "somthing went wrong",
    });
  }
});

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    try {
      const id = req.params.id;
      const deleteuser = await User.destroy({
        where: {
          id: id,
        },
      });
      if (deleteuser) {
        res.status(200).json({
          message: "user deleteed successfuly",
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

router.get("/alluser",async(req,res)=>{
  try{
    const data = await User.findAll()
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
  } 
  catch(error){
    return res.status(400).json({
      error:'something went wrong'
    })
  }
})

router.post("/logout", auth, async (req, res) => {
  res.send({
    status: 200,
    message: "you are logout success",
    auth: false,
    token: null,
  });
});

router.get("/confirmemail/:id", async (req, res) => {
  const id = req.params.id;
  const emailactive = await User.update(
    { status: 1 },
    {
      where: {
        id: id,
      },
    }
  );
  if (emailactive) {
    MailConfirm(id);
    res.status(200).json({
      message: "email activated",
    });
  } else {
    res.status(401).json({
      message: "email not activated",
    });
  }
});

module.exports = router;
