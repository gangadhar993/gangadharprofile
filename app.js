const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const logfile = '/access.log'
const app = express()  // make express app
const port = 8081
const fs = require('fs')


// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested

app.set('views', path.resolve(__dirname, 'views')) // path to views
app.set('view engine', 'ejs') // specify our view engine

// 2 include public assets and use bodyParser
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })

 app.get("/index", function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render("index.ejs")
 })
 
 // 4 http GET /tic-tac-toe
 app.get("/tic-tac-toe", function (req, res) {
  res.render("tic-tac-toe.ejs")
 })

 app.post("/", function (req, res) {
  res.render("index.ejs")
 })
 
 // 4 http GET /about
 app.get("/about", function (req, res) {
  res.render("about.ejs")
 })
 
 // 4 http GET /contact
 app.get("/contact", function (req, res) {
  res.render("contact.ejs")
 })
 

 app.get(function (req, res) {
  res.render('404')
})
 
 // Listen for an application request on designated port
 app.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port)
  console.log('\nLogs will be sent to this terminal and ' + logfile + '.')
 })
 