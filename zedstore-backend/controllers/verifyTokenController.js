const JWT = require("jsonwebtoken");

const verifyTokenController = (req, res, next) => {
  if (!req.headers.authorization) return res.status(401).json("token req.");
  const authHeader = req.headers.authorization.split(" ")[1];
  if (authHeader) {
    JWT.verify(authHeader, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) return res.status(403).json("Token isn't valid");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyTokenController(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you not allowed");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyTokenController(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("you are not admin");
    }
  });
};

module.exports = { verifyToken: verifyTokenController, verifyTokenAndAuth, verifyTokenAndAdmin };
