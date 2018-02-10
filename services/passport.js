const passport = require('passport');
const User = require('../models/users');
const { secret } = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const LocalOptions = { usernameField : 'email' };
const localLogin = new LocalStrategy(LocalOptions, (email, password, done)=>{
    User.findOne({email}, (err, user)=>{
        if(err) return next(err);
        if(!user) return done(null, false);

        user.comparePasswords(password, (err, isMatch)=>{
            if(err) return next(err);
            if(!isMatch) return done(null, false);

            return done(null, user);
        });
    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
}

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done)=> {
    User.findById(payload.uid, (err, user) =>{
        if(err) return next(err);
        if(!user) return done(null, false);

        return done(null, user);

    });
});

passport.use(jwtLogin);
passport.use(localLogin);
