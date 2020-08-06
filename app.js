const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get(['/', '/home'], (req, res) => {
  res.render('pages/index')
})

app.get('*', (req, res) => {
  res.render('pages/404')
})

app.listen(3000, () => {
  console.log(`App running in ${port}`)
})
