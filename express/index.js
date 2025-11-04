const express = require("express");
const moment = require("moment-timezone")

const app = express();

app.get('/', (req,res)=>{
    res.send("Home page")
})

app.get('/current-time', (req,res)=>{
    const timezones = [
        "Asia/Kolkata",
        "America/New_York",
        "Europe/London",
        "Asia/Tokyo",
        "Australia/Sydney"
    ]

    const timeData = timezones.map(zone=>({
        timezone: zone,
        current_time : moment().tz(zone).format("YYYY-MM-DD HH:mm:ss")
    }))

    res.json({
        message: "Current time in various timezones..",
        timeData
    })
    
})

app.listen(3000, ()=>{
    console.log("Server runnning on PORT 3000")
})