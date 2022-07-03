const express = require('express');
const app = express();
const port = 6600;
const userRoute = require('./routes/User')

app.use('/user', userRoute)
app.use('/',(req,res)=>{
    res.json('server is running !')
})
app.listen (port, () => {
    console.log(`the server is running on ${port}`)
});