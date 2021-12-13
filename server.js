const express = require('express')
const sequelize = require('./config/connection')
const path = require('path')
const routes = require('./controllers')
const exphbs = require('express-handlebars')
const helpers = require('./utils/helpers')

const app = express()
const PORT = process.env.PORT || 3000

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUnintialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))


app.use(routes);


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
//app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));