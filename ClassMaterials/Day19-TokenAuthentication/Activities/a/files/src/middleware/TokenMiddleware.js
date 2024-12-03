
const TOKEN_COOKIE_NAME = "NCParksToken";

// Create your own secret key for the token here.
// In a real application, you will never hard-code this secret and you will
// definitely never commit it to version control, ever

exports.TokenMiddleware = (req, res, next) => {
  // We will look for the token in two places:
  // 1. A cookie in case of a browser
  // 2. The Authorization header in case of a different client
  

}


exports.generateToken = (req, res, user) => {
};


exports.removeToken = (req, res) => {
};

