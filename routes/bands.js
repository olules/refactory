//dependencies
const express = require("express");
const router = express.Router();
const Band = require("../models/bands");
const multer = require("multer");
const User = require("../models/User");

//bands routes
//Display band registration page when endpoint '/' is hit
router.get("/bandreg", (req, res) => {
  res.render("bandRegistration", { title: "Bands Registration Form" });
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

//Register band information to the datatbase

router.post(
  "/bandreg",
  upload.fields([
    {
      name: "bandicon",
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
      const bandReg = new Band(req.body);
      const user = new User(req.body);
      bandReg.bandicon = req.files.bandicon[0].path;
      bandReg.profilepicture = req.files.profilepicture[0].path;
      await bandReg.save();
      await User.register(user, req.body.password, (err) => {
        if (err) {
          throw err;
        }
        console.log("Information as been posted to the database");
        res.redirect("/bandinfo/bandreg");
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Error");
    }
  }
);
//for searching bands the database
router.post("/list", async (req, res) => {
  await Band.find({ bandname: req.body.bandname })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.render("bandList", {
          bands: data,
        });
      } else {
        Band.find({}, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Here");
            res.render("bandList", {
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
//route to go to a particular bands database
router.get("/bandacc", async (req, res) => {
  if (req.session.user) {
    // console.log(req.session.user)
    try {
      const user = await Band.findOne({ email: req.user.email });
      res.render("bandacc", { band: user });
    } catch {
      res.status(400).send("band not found");
    }
  } else {
    res.redirect("/login");
  }
});
// get particular band Information
router.get("/band/:bandname", async (req, res) => {
  try {
    const findBand = await Band.findOne({ bandname: req.params.bandname });
    res.status(201).render("findBand", { band: findBand });
  } catch (err) {
    res.status(400).send("Cannot find band");
  }
});
//for searching the database
router.post("/list", async (req, res) => {
  await Band.find({ bandname: req.body.bandname })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.render("bandList", {
          bands: data,
        });
      } else {
        Band.find({}, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Here");
            res.render("bandList", {
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
//searching on the bands page
router.post("/bands", async (req, res) => {
  await Band.find({ bandname: req.body.bandname })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.render("bands", {
          bands: data,
        });
      } else {
        Band.find({}, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Here");
            res.render("bands", {
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
//go to bands page
router.get("/bands", async (req, res) => {
  try {
    const bands = await Band.find({});
    res.status(201).render("bands", { bands: bands });
  } catch (err) {
    res.status(400).send("Cannot find band");
  }
});

//Fetch band information from the database

router.get("/list", async (req, res) => {
  try {
    let bandDetails = await Band.find();
    res.render("bandList", { bands: bandDetails, title: "Bands List" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Cannot retrieve band information");
  }
});

//update band information

router.get("/update/:id", async (req, res) => {
  try {
    const updateBand = await Band.findOne({ _id: req.params.id });
    res.status(201).render("updateband", { band: updateBand });
  } catch (error) {
    res.status(400).send("Cannot find Band");
  }
});

//save updated band information
router.post("/update/:id", async (req, res) => {
  try {
    await Band.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/bandinfo/list");
  } catch (error) {
    res.status(400).send("Error Updating the band");
  }
});

//delete band from the database

router.get("/delete/:id", async (req, res) => {
  try {
    await Band.findOneAndDelete({ _id: req.params.id });
    res.redirect("/bandinfo/list");
  } catch (error) {
    res.status(400).send("Error deleting band from the DataBase");
  }
});

//Export module
module.exports = router;
