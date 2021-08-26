const pool = require('../config/DbConfig');
const bcrypt = require('../Lib/Bcrypt');

// REGISTER User
exports.userRegister = function(req, res) {

    const password = req.body.password;
    const encryptPassword = bcrypt.Encrypt(password);

    userRegister = {
        username: req.body.username,
        password: encryptPassword
    }

    // Cek double username
    var sql = "SELECT * FROM registrasi WHERE username = ?";
    pool.query(sql, [userRegister.username], function(err, data){
        console.log(data)
        if(err) throw err

        if(data.length > 0){
            res.send({
                message: "Username was already exist!"
            });
        }
        else {
            // Insert User ke database Register
            var sql = "INSERT INTO registrasi SET ?";
            pool.query(sql, userRegister, function(err, hasil){
                if(err) throw err

                console.log(hasil)
            });
            res.status(201).send({
                message: "Register Success!"
            });
        }
    })
}