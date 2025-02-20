var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); //routes/index.js
var usersRouter = require('./routes/users'); //routes/users.js
// Manejador
var productosRouter = require("./routes/productos") //routes/productos.js
var contactoRouter = require("./routes/contacto") //routes/contacto.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productosRouter);
app.use('/contacto', contactoRouter);

app.get("/prueba1", function (req,res){
  res.send("Prueba1")
})

app.get("/prueba2", function (req,res){
  res.send("Prueba2")
})

app.get("/prueba3", function (req,res){
  res.send("Prueba3")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
