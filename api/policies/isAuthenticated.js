/**
 * isAuthenticated
 * @description :: Policy to inject user in req via JSON Web Token
 * Policies act as Express middleware to intecept http calls.
 */
var passport = require('passport');
 
module.exports = function (req, res, next) {
    passport.authenticate('jwt', function (error, user, info) {
      if (error) return res.serverError(error);
      if (!user) 
       return res.unauthorized(null, info && info.code, info && info.message);
     req.user = user;
 
     next();
    })(req, res);
};

// The policy is pretty simple: It authenticates the user using the ‘jwt’ strategy 
// that we earlier implemented in the passport configuration. 
// If no token is present, this will return an unauthorized response. 
// Otherwise it will add the user object from the token to the request.