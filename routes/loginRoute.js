// Dependencies
const express = require("express");
const Artist = require("../models/artists");
const band = require("../models/bands");
const label = require("../models/labels");
const passport = require("passport");
const User = require("../models/User");
const role = require("./roles");
const router = express.Router();

// Render Login page
router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

//Redirect to specific pages if  user is authenticated
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  async (req, res) => {
    req.session.user = req.user;
    
    // Login logic for the different users of the system .
    User.findOne({ email: req.body.email }).then((data) => {
      // console.log(data);
      if (data.role == "artist") {
        res.redirect("artistinfo/artistacc");
      } else if (data.role == "label") {
        res.redirect("/labelinfo/labelacc");
      } else if (data.role == "band") {
        res.redirect("/bandinfo/bandacc");
      } else if (data.role == "clerk") {
        res.redirect("/dashboard");
      } else {
        res.send(" unauthorised UGAAMUX user. ");
      }
    });
    router.get("/logout", (req, res) => {
      req.session.destroy(() => {
        res.redirect("/");
      });
    });

    // Export Login module
  }
);


module.exports = router;
