const express       = require('express')
const app           = express();
const mongoose      = require('mongoose')
const User          = require('../models/User')
//const bodyParser    = require('body-parser')

//app.use(bodyParser)

;
app.get('/', (req, res) => { //listens to get requests
    console.log('hello world')
    console.log(req)
    console.log(res)

}) 
// app.post('/users', (req, res) => {
//     //req.body() //this is bc of express urlencoded
//     const user = new User(req.body);
//     user.save()
//         .then((result) => {
//             res.redirect('/users')
//         })
//         .catch((err) => console.log(err))

// })

mongoose.connect(
    'mongodb+srv://lovisa:tindra@cluster0.i297s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)


// How do we start listeneing to the server
app.listen(5000, () => {
    console.log('Listening to port 5000')
}) // the port to listen to



