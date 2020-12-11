const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("../models/user");
const MessageModel = require('../models/MessageModel');
const AnnoucementModel = require('../models/AnnoucementModel');
const RequestModel = require('../models/RequestModel');
require("../config/passportConfig")(passport);



module.exports = function (app) {

  app.use(
    session({
      secret: 'secretecode',
      resave: true,
      saveUninitialized: true
    })
  );

  app.use(cookieParser("secretecode"));
  app.use(passport.initialize());
  app.use(passport.session());

  // app.get("/currentUser", (req, res, next) => {
  //   passport.authenticate("local", (err, user, info) => {
  //     if (err) throw err;
  //     if (!user) throw res.send("No User Found");
  //     else {
  //       req.login(user, err => {
  //         if (err) throw err;
  //         res.json(user);
  //         console.log(req.user);
  //       })
  //     }
  //   })(req, res, next);
  // });


  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) throw res.send("No User Found");
      else {
        req.login(user, err => {
          if (err) throw err;
          res.send("User Authenticated!");
          console.log(req.user);
        })
      }
    })(req, res, next);
  });

  app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // console.log(req.body);
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          phoneNumber: req.body.phoneNumber,
          address: req.body.adress,
          email: req.body.email,
          // date: req.body.date,
          role: JSON.stringify({
            manager: true
          }),
          username: req.body.username,
          password: hashedPassword,
        })
        await newUser.save();
        res.send("User Created!");
      }
    });
  });

  app.get("/user", (req, res) => {
    // res.send(req.user);
    User.find({_id: req.query.id }).then((user)=>{
      res.send(req.user);
    }) .catch((error)=>{
      res.status(404).json(error);
    })
  });

    // ^^^ The user is stored in the req.user. The req object you get 
    // ^^^ from the client now has a user inside and contains all of the sission data. 

    app.post('/message', async (req, res) => {
      const newMessage = new MessageModel({
        name: req.body.name,
        title: req.body.title,
        message: req.body.message
      });
    
      newMessage
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.json(error);
        });
    });
    
    app.post('/annoucement', async (req, res) => {
      const newAnnoucement = new AnnoucementModel({
        title: req.body.title,
        content: req.body.content,
        date: req.body.date
      });
    
      newAnnoucement
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.json(error);
        });
    });
    app.post('/request', async (req, res) => {
      const newRequest = new RequestModel({
        name: req.body.name,
        firstDate: req.body.firstDate,
        lastDate: req.body.lastDate,
        requestType: req.body.requestType,
        comment: req.body.comment
      });
    
      newRequest
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((error) => {
          res.json(error);
        });
    });
    
    // Login
    // app.get('/userid', (req, res) => {
    //   User.find({ _id: req.query.id })
    //     .then((user) => {
    //       res.json(user);
    //     })
    //     .catch((err) => {
    //       res.status(404).json(err);
    //     });
    // });
    
    
    app.get('/messages', (req, res) => {
      MessageModel.find({})
        .then((messages) => {
          res.json(messages);
        })
        .catch((err) => {
          res.status(404).json(err);
        });
    });
    
    app.get('/annoucements', (req, res) => {
      AnnoucementModel.find({})
        .then((annoucements) => {
          res.json(annoucements);
        })
        .catch((err) => {
          res.status(404).json(err);
        });
    });
    
    app.get('/requests', (req, res) => {
      RequestModel.find({})
        .then((requests) => {
          res.json(requests);
        })
        .catch((err) => {
          res.status(404).json(err);
        });
    });
    
    

}