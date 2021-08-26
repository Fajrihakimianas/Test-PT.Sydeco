const pool = require('../config/DbConfig');
const bcrypt = require('../Lib/Bcrypt');
const jwt = require('../Lib/Jwt');

// LOGIN User
exports.userLogin = function(req, res){

    const password = req.body.password;
    const encryptPassword = bcrypt.Encrypt(password);

    userLogin = {
        username: req.body.username,
        password: encryptPassword
    }

    var sql = 'SELECT * FROM registrasi WHERE username = ? AND password = ?';
    pool.query(sql, [userLogin.username, userLogin.password], function(err, user){
        if(err) throw err;
        
        var token = jwt.Encode({
            user: user.id
        });

        if(user.length > 0){
            // Insert Login User ke tabel Login
            var sql = 'INSERT INTO login SET ?';
            pool.query(sql, userLogin, function(err) {
                if(err) throw err
            })
            res.status(200).send({
                user,
                message: "Login Successfully!",
                token
            })
        }
        else if(!user.email || !user.password) {
            res.status(400).send({
                message: "Your Username or Password is wrong!"
            })
        }
    })
}

exports.getDataLogin = function(req, res){

    var sql = 'SELECT * FROM login';
    pool.query(sql, function(err, result){
        if(err) throw err;
        
        res.status(200).send({
            result
        })
    })
}