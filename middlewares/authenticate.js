const jwt = require("jsonwebtoken");
require('dotenv').config()

const authenticate = (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")[1] || "";
    console.log(token)
    jwt.verify(token, process.env.Tokensecret, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ Error: err });
      }
      if (decoded) {
        console.log(decoded)
        req.body.UserId = decoded.UserId;
        next();
      }else{
        res.status(401).send({message : "Unauthorized"})
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ Error: err });
  }
};


module.exports = { authenticate }