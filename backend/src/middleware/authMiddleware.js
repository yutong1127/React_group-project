export function authenticate(req, res, next) {
  if (req.session && req.session.user) {
    console.log("authenticate being called")
    req.loggedIn = true;
    req.user = req.session.user;
  } else {
    req.loggedIn = false;
    res.status(401).json({ message: 'Unauthorized access' });
  }
  next();
}