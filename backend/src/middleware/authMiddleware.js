export function authenticate(req, res, next) {
  console.log(`line2 : ${req.session.user}`)
  if (req.session && req.session.user) {
    console.log("authenticate being called")
    req.loggedIn = true;
    req.user = req.session.user;
    // if (req.user.isAdmin) {
    //   req.isAdmin = true;
    // } else {
    //   req.isAdmin = false;
    // }
  } else {
    req.loggedIn = false;
    res.status(401).json({ message: 'Unauthorized access' });
  }
  next();
}