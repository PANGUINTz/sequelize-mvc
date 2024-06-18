import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import db from "../models/index.js";
import bcrypt from "bcrypt";

const User = db.users;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, // google client id
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // google client secret
      callbackURL: "http://localhost:3000/google/callback",
      passReqToCallback: true,
    },

    // returns the authenticated email profile
    async function (request, accessToken, refreshToken, profile, done) {
      const exist = await User.findOne({
        where: { email: profile["emails"][0].value },
      });
      if (!exist) {
        let hashedPassword = await bcrypt.hash("passworddefault", 10);
        await User.create({
          email: profile["emails"][0].value,
          name: profile["displayName"],
          password: hashedPassword,
        });
      }
      const user = await User.findOne({
        where: { email: profile["emails"][0].value },
      });
      return done(null, user);
    }
  )
);

// function to serialize a user/profile object into the session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// function to deserialize a user/profile object into the session
passport.deserializeUser(function (user, done) {
  done(null, user);
});
