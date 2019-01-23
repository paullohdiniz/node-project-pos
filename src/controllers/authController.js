const express = require ('express');

const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req , res) => {
    
    const { email } = req.body;
    try{
        if(await User.findOne( { email } )){
            return res.status(400).send({error : 'User already exists'});
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send( {user} );

    } catch (err){
        return res.status(400).send( { error: 'Registration failed' });
    }
});
//Aqui vc ta jogando o /auth com a função router (/register) para o index.js como serviço global
//app do express recebe essa rota
module.exports = app => app.use('/auth', router);