const jwt = require('jwt-simple');
const User = require('../models/users');
const { secret } = require('../config/keys');

function tokenForUser(user){
    const ts = new Date().getTime();

    return jwt.encode({
        uid: user.id,
        ts: ts
    }, secret);
};

exports.signup = (req, res, next) => {
    const { email, username, password } = req.body;

    if(!email || !password  || !username ){
        const output = []

        if(!email){
            output.push('No Bueno Email Senor')
        }
        if(!username){
            output.push('No Bueno username Senor')
        }
        if(!password){
            output.push('No Bueno password Senor')
        }

        return res.status(422).send(output);
    }

    User.findOne({email}, (err, existingUser)=>{
        if(err) return next(err);

        if(existingUser){
            return res.status(422).send(['Email already is in user'])
        }

        const newUser = new User({email, username, password});

        newUser.save(err => {
            if(err) next(err)

            res.json({
                username,
                token: tokenForUser(newUser)
            });
        });
    });
}


exports.signin = (req, res, next) => {
    res.send({
        username: req.user.username,
        token: tokenForUser(req.user)
    });
}
