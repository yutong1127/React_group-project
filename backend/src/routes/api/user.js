import express from "express";
import passport from "../../middleware/passport.js";
import { retrieveAllSupervisors } from "../../dao/user-dao";

const router = express.Router();

router.post("/login", (req, res, next) => {
  console.log("Login route called");

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error.", redirect: "/login" });
    }
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password.", redirect: "/login" });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Login failed.", redirect: "/login" });
      }
      req.session.user = user;
      req.session.loggedIn = true;
      
      req.session.save((err) => {
        if (err) {
          return res.status(500).json({ message: "Error saving session." });
        }
        return res.status(200).json({ message: "Login successful.", user: user.toObject(), redirect: "/patientlist" });

      });
    });
  })(req, res, next);
});

router.get("/logout", async (req, res) => {
  // const sessionId = req.sessionID;

  console.log("Logout route called");

  req.logout(() => {
    req.session.destroy(async (err) => {
      if (err) {
        return res.status(500).json({ message: "Error destroying session" });
      }

      console.log("Session destroyed in MongoDB");

      // Clear the session cookie from the client-side
      res.clearCookie("connect.sid", { path: "/" });
      return res
        .status(200)
        .json({ message: "logout successful", redirect: "/login" });
    });
  });
});

router.get('/retrieveAllSupervisors', async (req, res) => {
  const result = await retrieveAllSupervisors();

  if (result) {
      res.json(result);
  } else {
      res.status(404).send('Not found');
  }
});

// router.get("/status", (req, res) => {
//   if (req.session.loggedIn) {
//     res.json({ loggedIn: true });
//   } else {
//     res.json({ loggedIn: false });
//   }
// });

export default router;
