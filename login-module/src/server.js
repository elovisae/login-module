const express       = require('express')
const app           = express();
const mongoose      = require('mongoose')
const User          = require('../models/User')
const cors          = require('cors')
const bodyParser    = require('body-parser')

app.use(bodyParser.json())
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.post('/users/login', async (req, res) => {
    const user = new User(req.body)
    console.log(user)
    const userEmail = user.mail;

    const isUserRegistered = await User.exists({mail: userEmail});
    if (isUserRegistered){
        User.find()
        .then((result) => {
            const allUsers = result;
            allUsers.map((dbuser) => {
                if(user.mail === dbuser.mail){
                    if(user.password === dbuser.password){
                        res.send({message:'Logging in', loggedIn: true, name: dbuser.name})
                    }else{
                        res.send({message:'Wrong password, try again', loggedIn: false})
                    }
                }
            })
        })
    }

})


app.post('/users', async (req, res) => {
    const user = new User(req.body)
    const isMailAlreadyRegistrerd = await User.exists({mail: user.mail});
    console.log(isMailAlreadyRegistrerd)

    if (isMailAlreadyRegistrerd){
        res.send({message: 'This mail is already connected to an account, try logging in', success: false})
    }else{
        user.save()
            .then(result => res.send({message: 'You are now registered :), \n taking you to login page', success: true}))
            .catch(err => console.log(err))
    }
})

mongoose.connect(
    'mongodb+srv://lovisa:tindra@cluster0.i297s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)


// How do we start listeneing to the server
app.listen(5000, () => {
    console.log('Listening to port 5000')
}) // the port to listen to



