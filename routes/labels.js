//dependencies
const express = require("express");
const router = express.Router();
const Label = require("../models/labels");
const multer = require("multer");
const User = require("../models/User");

//labels routes
//Display label registration page when endpoint '/' is hit
router.get("/labelreg", (req, res) => {
  res.render("labelRegistration", { title: "Lebels Registration Form" });
});
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage });

//Register label information to the datatbase

router.post(
  "/labelreg",
  upload.fields([
    {
      name: "labelicon",
      maxCount: 1,
    },
    {
      name: "profilepicture",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    try {
      console.log(req.body);
      const labelReg = new Label(req.body);
      const user = new User(req.body);
      labelReg.labelicon = req.files.labelicon[0].path;
      labelReg.profilepicture = req.files.profilepicture[0].path;
      await labelReg.save();
      await User.register(user, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        console.log("Information has been posted to the database");
        res.redirect("/labelinfo/labelreg");
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error");
    }
  }
);
//for searching the database
router.post("/list", async (req, res) => {
  await Label.find({ labelname: req.body.labelname })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.render("labelList", {
          labels: data,
        });
      } else {
        Label.find({}, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Here");
            res.render("labelList", {
              user: data,
              error: true,
            });
          }
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
//go to labels page
router.get("/labels", async (req, res) => {
  try {
    const labels = await Label.find({});
    res.status(201).render("labels", { labels: labels });
  } catch (err) {
    res.status(400).send("Cannot find label");
  }
});
//route to go to a particular labels database
router.get("/labelacc", async (req, res) => {
  if (req.session.user) {
    // console.log(req.session.user)
    try {
      const user = await Label.findOne({ email: req.user.email });
      res.render("labelacc", { label: user });
    } catch {
      res.status(400).send("label not found");
    }
  } else {
    res.redirect("/login");
  }
});
// get particular label Information
router.get("/label/:labelname", async (req, res) => {
  try {
    const findlabel = await Label.findOne({ labelname: req.params.labelname });
    res.status(201).render("findlabel", { label: findlabel });
  } catch (err) {
    res.status(400).send("Cannot find label");
  }
});

//Fetch label information from the database

router.get("/list", async (req, res) => {
  try {
    let labelDetails = await Label.find();
    res.render("labelsList", { labels: labelDetails, title: "labels List" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Cannot retrieve label information");
  }
});

//update label information

router.get("/update/:id", async (req, res) => {
  try {
    const updatelabel = await Label.findOne({ _id: req.params.id });
    res.status(201).render("updateLabel", { label: updatelabel });
  } catch (error) {
    res.status(400).send("Cannot find label");
  }
});

//save updated label information
router.post("/update/:id", async (req, res) => {
  try {
    await Label.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.redirect("/labelinfo/list");
  } catch (error) {
    res.status(400).send("Error Updating the Label");
  }
});

//delete label from the database

router.get("/delete/:id", async (req, res) => {
  try {
    await Label.findOneAndDelete({ _id: req.params.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Error deleting label from the DataBase");
  }
});

//Export module
module.exports = router;
