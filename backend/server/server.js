const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./models');
const seedFunction = require('./seeds')
const indexRouter = require('../routes').routes;

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'../../frontend/public')))

app.use('/api/explore/country', indexRouter.Experiences);
app.use('/api/explore/users', indexRouter.Users);
app.use('/api/explore/', indexRouter.Locations);
app.use('/api/comments/', indexRouter.Comments);
app.use('/api/likes', indexRouter.Likes)
app.use('/api/explore/search', indexRouter.Search);

// app.get('auth/twitter', passport.authenticate('twitter'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../frontend/views/index.html'))
})

db.sequelize.sync({force:true}).then(()=>{
	seedFunction()
	app.listen(2222)
	console.log('Listening at https://localhost:2222')
});

module.exports = app;
