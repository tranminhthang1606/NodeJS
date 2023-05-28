const hbs = require('express-handlebars');
const path = require('path')
const express = require('express');
const morgan = require('morgan');
const app = express()
const port = 3000
const route = require('./routes');
const db = require('./config/db');
db.connect();
// "/" định nghĩa tuyến đường
app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', hbs.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// cấu hình route- tuyến đường
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})