import dotenv from 'dotenv'
import connectDB from './db/database.js'
import { app } from './app.js'

dotenv.config({
    path:'./env'
})

connectDB().then(()=>{
    app.on('error',(err)=>{
        console.error('app init error',err)
    })
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`app is running on port : ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.error('DB Connection failed:- ',err)
})