import passport from "passport";
import LocalStrategy from "passport-local";
import { getUserByEmail, getUserById } from "../dao/user-dao";
import bcrypt from "bcrypt";

// Passport configuration
async function isPasswordValid(user, password) {
  return user.isPlainTextPassword
    ? password == user.password
    : await bcrypt.compare(password, user.password);
}

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await getUserByEmail(email);

        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }

        if (!(await isPasswordValid(user, password))) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await getUserById(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
  
  export default passport;