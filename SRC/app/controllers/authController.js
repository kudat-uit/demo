const User = require('../models/User');

class AuthController {
  // GET /login
  loginForm(req, res) {
    res.render('auth/login'); // Remove the leading '/'
  }

  // POST /login
  login(req, res, next) {
    const { email, password } = req.body;

    // Check if user exists (this is a simple example, not recommended for production)
    User.findOne({ email, password })
      .then(user => {
        if (user) {
          req.session.isLoggedIn = true;
          req.session.user = user;
          return req.session.save(err => {
            console.log(err);
            res.redirect('/');
          });
        }
        res.redirect('/auth/login'); // Handle invalid login
      })
      .catch(error => next(error));
  }

  // GET /register
  registerForm(req, res) {
    res.render('auth/register'); // Remove the leading '/'
  }

  // POST /register
  register(req, res, next) {
    const { email, password } = req.body;

    // Create a new user (this is a simple example, not recommended for production)
    const newUser = new User({ email, password });
    newUser.save()
      .then(() => {
        res.redirect('/auth/login'); // Redirect to login after successful registration
      })
      .catch(error => next(error));
  }

  // GET /logout
  logout(req, res) {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  }
}

module.exports = new AuthController();
