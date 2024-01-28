require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/geo',(req,res)=>{
res.send('shahjalal geo')
})

app.get('/login',(req,res)=>{
    res.send('<h1>shahjalal login</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2> Chai Code </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})