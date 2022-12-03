require("dotenv").config();
const express = require('express')
const app = express()
const routes = require('./routes/index')

const db = require('./models');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

db.sequelize.sync({ force: false }).then(function () {
    app.listen(process.env.PORT, function () {
      console.log(`SERVER IS RUNNING AT PORT ${process.env.PORT}`);
    });
});