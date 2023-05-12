import passport from 'passport';

// middleware uses passport.js to check if user is authenticated
export function authenticate(req, res, next) {
  // use passport and session strategy to authenticate
  passport.authenticate('session', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    // store user in req.user
    req.user = user;
    next();
  })(req, res, next);
}

