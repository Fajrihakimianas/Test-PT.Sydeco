const jwt = require('jsonwebtoken');
const jwtConfig = require('../Config/Jwt');

exports.Encode = (data) => {
    return jwt.sign(data, jwtConfig.JWT_UNIQUE);
};

exports.Decode = (token) => {
    return jwt.verify(token, jwtConfig.JWT_UNIQUE);
};