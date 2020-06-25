const jwt = require('jsonwebtoken')
const Authentication = require('../auth/auth-model')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = Authentication.secret();

    if (token) {
        jwt.verify(token, secret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: "YOU CANNOT PASS" });
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ message: "please provide the appropiate credentials" });
    }
}; 