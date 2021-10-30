//dependencies
const express = require("express");
const router = express.Router();
const Artist = require("../models/artists");
const multer = require("multer")

//artists Routes

//Display artist registration page when endpoint '/' is hit
router.get("/artistreg", (req, res) => {
  res.render("artistRegistration", { title: "Artists Registration form" });
});

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/img');
  },
  filename: (req, file, cb) => {
      cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage })

// Register artist information to the database

router.post("/artistreg",upload.single("uploadpicture"), async (req, res) => {
  try {
    const artistReg = new Artist(req.body);
    artistReg.uploadpicture = req.file.path
    await artistReg.save().then(data => {
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
    console.log("Info posted");
    res.redirect("/artistinfo/artistreg");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
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

// update artist Information
router.get("/update/:id", async (req, res) => {
  try {
    const updateArtist = await Artist.findOne({ _id: req.params.id });
    res.status(201).render("updateArtist", { artist: updateArtist });
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

//Export module
module.exports = router;
