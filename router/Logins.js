const express = require("express");
const passport = require("passport");
const route = express.Router();

route.post("/auth/username", async (req, res, next) => {
  passport.authenticate(
    "login_username",
    { session: false },
    async (err, user) => {
      try {
        if (user._ut && user._ur) {
          return res.status(200).json(user);
        } else {
          res.status(401).send(err);
        }
      } catch (error) {
        res.status(401).send(error);
      }
    }
  )(req, res, next);
});

module.exports = route;
