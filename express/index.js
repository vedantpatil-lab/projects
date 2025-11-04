const express = require("express");
const moment = require("moment-timezone")
const quotes = require("./quotes")

const app = express();

app.get('/', (req,res)=>{
    res.send("Home page")
})

app.get('/api/current-time', (req,res)=>{
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

app.get("/api/quotes", (req,res)=>{
    const allQuotes = quotes.map((quote)=>({
       author : quote.author,
       quote: quote.quote  
    }))

    res.json({
        message : "Quotes done !",
        allQuotes
    })
})
// console.log(quotes[0].author)

app.get("/api/random", (req,res)=>{
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const messageQuote = `Author: ${randomQuote.author} and quote is ${randomQuote.quote}`

    res.json({
        messageQuote
    })
})

app.listen(3000, ()=>{
    console.log("Server runnning on PORT 3000")
})