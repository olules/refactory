//dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const passportMongoose = require("passport-local-mongoose");
const moment = require("moment");



// Configure environment variable
require('dotenv').config();
// Express-Session middleware, save session cookie
const expressSession = require('express-session')({
    secret:'secret',
    resave:false,
    saveUninitialized:false
});

// Import user model
const User = require('./models/User');
// //Import Routes
const Artists = require("./routes/artists");
const Clerks = require("./routes/clerks")
const Bands = require("./routes/bands");
const labels = require("./routes/labels");
const signUpRoute = require("./routes/userRoutes");
const loginRoute = require("./routes/loginRoute");

// Instantiations
const app = express();

//Database configuration
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
});

mongoose.connection
.on('open',()=>{
    console.log('Mongoose connection open')
})
.on('error',(err)=>{
    console.log(`connection error:${err.message}`)
});

// Configuration for templating Engine
app.set('view engine','pug');
app.set('views','./views');
app.locals.moment = moment;

// Middle ware
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());



// Initializing  passport module and connecting it to our session
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

// Passport configurations (creating user's strategy)
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware for serving static files
app.use(express.static('public'));
app.use('/public/img',express.static(__dirname + '/public/img'));




//routes middleware
app.use('/bandinfo',Bands);
app.use('/', Clerks)
app.use('/artistinfo',Artists);
app.use('/labelinfo',labels);
app.use('/',loginRoute);
app.use('/signup',signUpRoute);



//Request time logger
app.use((req,res,next)=>{
  console.log('New request received at' + Date.now());
  next();
});

//Index page route
app.get('/',(req,res)=>{
  res.render('index')
});

// Sign out route
app.get('/logout',(req,res)=>{
  if(req.session){
      req.session.destroy((err)=>{
          if(err){
              console.log('Sign out error');
          }
          else{
              return res.redirect('/');
          }
      });
  }
});


//Undefined route
app.get('*',(req,res)=>{
  res.status(404).send('Page not found')
});

//Server configuration
port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on port ${port}`));
