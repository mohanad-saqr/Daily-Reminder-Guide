const express = require('express')
const app = express()
const port = 3000

const { engine } = require('express-handlebars');


app.engine('handlebars',engine({defaultLayout: "main"}));
app.set('view engine', 'handlebars');



app.get('/', (request, response) => {
  response.render('index');
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})