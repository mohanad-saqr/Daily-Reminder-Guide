const express = require('express')
const app = express()
const port = 3000
const path = require('node:path');

require('dotenv').config()

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, '/public')));

const { engine } = require('express-handlebars');


app.engine('handlebars', engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');



app.get('/', (request, response) => {
  response.render('index');
});

app.post('/authenticate', (req, res) => {

  const DbName = process.env.LOGIN;
  const DbPWD = process.env.PASSWORD;

  console.log(DbName)
  console.log(DbPWD)
  const userName = req.body.useName.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
  const pwd = req.body.pwd.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

  console.log(userName)
  console.log(pwd)

  if (userName === DbName && pwd === DbPWD) {
    res.render("home")
  } else {
    res.send("wrong password")
  }

});

let list = [] 
app.post('/create', (req, res) => {
  console.log(req.body.item)
  const item = req.body.item;
  list.push(item)
  res.json( list );

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})