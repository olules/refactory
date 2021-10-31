//dependencies
const express = require("express");
const router = express.Router();
const Band = require("../models/bands");
const multer = require("multer")

//bands routes
//Display band registration page when endpoint '/' is hit
router.get("/bandreg", (req, res) => {
  res.render("bandRegistration", { title: "Bands Registration Form" });
});
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/img');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage })

//Register band information to the datatbase

router.post("/bandreg", upload.fields([{
  name: 'bandicon', maxCount: 1
}, {
  name: 'profilepicture', maxCount: 1
}])
  , async (req, res) => {

    try {
      console.log(req.body)
      const bandReg = new Band(req.body);
      bandReg.bandicon = req.files.bandicon[0].path;
      bandReg.profilepicture = req.files.profilepicture[0].path;
      await bandReg.save().then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
      console.log("Info posted");
      res.redirect("/bandinfo/bandreg");
    } catch (error) {
      console.log(error);
      res.status(400).send("Error");
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

//update artist information

router.get("/update/:id", async (req, res) => {
  try {
    const updateBand = await Band.findOne({ _id: req.params.id });
    res.status(201).render("updateArtist", { band: updateBand });
  } catch (error) {
    res.status(400).send("Cannot find Band");
  }
});

//save updated band information
router.post("/update", async (req, res) => {
  try {
    await Band.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect("/band/list");
  } catch (error) {
    res.status(400).send("Error Updating the Artist");
  }
});

//delete artist from the database

router.get("/delete/:id", async (req, res) => {
  try {
    await Band.findOneAndDelete({ _id: req.params.id });
    res.redirect("back");
  } catch (error) {
    res.status(400).send("Error deleting band from the DataBase");
  }
});

//Export module
module.exports = router;
