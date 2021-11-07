//dependencies
const express = require("express");
const router = express.Router();
const Artist = require("../models/artists");
const multer = require("multer");
const User = require("../models/User");
const passport = require("passport");

//artists Routes

//Display artist registration page when endpoint '/' is hit
router.get("/artistreg", (req, res) => {
  res.render("artistRegistration", { title: "Artists Registration form" });
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

// Register artist information to the database

router.post("/artistreg", upload.single("uploadpicture"), async (req, res) => {
  console.log(req.body);
  try {
    const artistReg = new Artist(req.body);
    const user = new User(req.body);

    artistReg.uploadpicture = req.file.path;
    await artistReg.save();
    await User.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      console.log("Info posted");
      res.redirect("/artistinfo/artistreg");
    });
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
});

//route to go to a particular artists database
router.get("/artistacc", async (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    try {
      const user = await Artist.findOne({ email: req.user.email });
      res.render("artistacc", { artist: user });
    } catch {
      res.status(400).send("Artist not found");
    }
  } else {
    res.redirect("/login");
  }
});

// Fetch artist information from the database
router.get("/list", async (req, res) => {
  try {
    let artistDetails = await Artist.find();
    res.render("artistList", { artists: artistDetails, title: "Artists List" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Cannot retrieve artist information");
  }
});
//for searching the database
router.post("/list", async (req, res) => {
  await Artist.find({ stagename: req.body.stagename })
    .then((data) => {
      if (data.length > 0) {
        console.log(data);
        res.render("artistList", {
          artists: data,
        });
      } else {
        Artist.find({}, function(err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log("Here");
            res.render("artistList", {
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
//go to artists page
router.get("/artists", async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.status(201).render("artists", { artists: artists });
  } catch (err) {
    res.status(400).send("Cannot find Artist");
  }
});

// update artist Information
router.get("/update/:id", async (req, res) => {
  try {
    const updateArtist = await Artist.findOne({ _id: req.params.id });
    res.status(201).render("updateArtist", { artist: updateArtist });
  } catch (err) {
    res.status(400).send("Cannot find Artist");
  }
});

// get particular artist Information
router.get("/artist/:id", async (req, res) => {
  try {
    const findArtist = await Artist.findOne({ _id: req.params.id });
    res.status(201).render("findArtist", { artist: findArtist });
  } catch (err) {
    res.status(400).send("Cannot find Artist");
  }
});

// save updated artist information

router.post("/update", async (req, res) => {
  try {
    await Artist.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/artist/list");
  } catch (err) {
    res.status(400).send("Error Updating the Artist");
    console.log(err);
  }
});

// delete artist from the database

router.get("/delete/:id", async (req, res) => {
  try {
    await Artist.findByIdAndDelete({ _id: req.params.id });
    res.redirect("back");
  } catch (err) {
    res.status(400).send("Error deleting artist from the DataBase");
  }
});
// Route to  artist account.
router.get("/artistacc", async (req, res) => {
  if (req.session.user) {
    console.log(req.body.email);
    try {
      const user = await Artist.findOne({ email: req.user.email });

      res.render("artistacc", { artist: user });
    } catch {
      res.status(400).send("Artist not found");
    }
  } else {
    res.redirect("/login");
  }
});

//Export module
module.exports = router;
