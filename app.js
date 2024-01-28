const express = require('express')
const app = express()
const port = 3000
const path = require('node:path'); 

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, '/public')));

const { engine } = require('express-handlebars');


app.engine('handlebars',engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');



app.get('/', (request, response) => {
  response.render('index');
});

app.post('/authenticate', (req, res) => {

  const userName = req.body.useName
 console.log(req.body.useName);
 const pwd = req.body.pwd
 console.log(req.body.pwd);
 console.log(req.body);

 

    res.render("home")
  });  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})