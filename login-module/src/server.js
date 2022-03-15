const express   = require('express')
const app       = express();
const mongoose  = require('mongoose')
const port      = 3000;

mongoose.connect(
    'mongodb+srv://lovisa:tindra@cluster0.i297s.mongodb.net/Cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DB')
)

app.listen(3000)