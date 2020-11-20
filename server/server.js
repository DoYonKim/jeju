const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;

const route = require('./routes/index');

app.use(cors());

app.use(bodyParser.json());
app.use('/api', route);


// const sqlTest = require('./testMysql')
// app.use('/test', sqlTest);

// const insertTest = require('./testInsert')
// app.use('/testInsert', insertTest);


app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})