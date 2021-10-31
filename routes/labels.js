//dependencies
const express = require("express");
const router = express.Router();
const Label = require("../models/labels");
const multer = require("multer");

//labels routes
//Display label registration page when endpoint '/' is hit
router.get("/labelreg", (req, res) => {
    res.render("labelRegistration", { title: "Lebels Registration Form" });
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

//Register label information to the datatbase

router.post("/labelreg", upload.fields([{
    name: 'labelicon', maxCount: 1
}, {
    name: 'profilepicture', maxCount: 1
}]), async (req, res) => {
    try {
        console.log(req.body)
        const labelReg = new Label(req.body);
        labelReg.labelicon = req.files.labelicon[0].path;
        labelReg.profilepicture = req.files.profilepicture[0].path;
        await labelReg.save().then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
        console.log("Info posted");
        res.redirect("/labelinfo/labelreg");
    } catch (error) {
        console.log(error);
        res.status(400).send("Error");
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



//update artist information

router.get("/update/:id", async (req, res) => {
    try {
        const updatelabel = await Label.findOne({ _id: req.params.id });
        res.status(201).render("updateLabel", { label: updatelabel });
    } catch (error) {
        res.status(400).send("Cannot find label");
    }
});

//save updated label information
router.post("/update", async (req, res) => {
    try {
        await Label.findOneAndUpdate({ _id: req.query.id }, req.body);
        res.redirect("/label/list");
    } catch (error) {
        res.status(400).send("Error Updating the Label");
    }
});

//delete artist from the database

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
