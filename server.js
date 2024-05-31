const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()
const PORT=process.env.PORT
const db=require('./Models/index')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

// app.use('/',(req,res)=>{
//     res.send('App is Running')
// })
app.use('/api/v1',require('./routes/Contact_routes'))
db.sequelize.sync()
.then(()=>{
    console.log("Database Synced Successfully!!")
    app.listen(PORT,()=>{
        console.log(`server running on PORT ${PORT}`)
    })
})
.catch((error)=>{
    console.log(error)
})
