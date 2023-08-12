const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');
const sessionsRouter = express.Router();
const app = express();
const port = process.env.port || 3000
// const jsonFile = require('./src/data/sessions.json');

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/public')));
app.use('/sessions',sessionsRouter)

app.set('views','./src/views');
app.set('view engine','ejs');

sessionsRouter.route('/').get((req,res)=>{
    res.render('sessions');
});

app.get('/',(req,res)=>
{
    res.render('index',{title:`Wlocomw`});
});

app.listen(port, ()=>
{
    debug(`port   is ${chalk.greenBright(port)}`);
});