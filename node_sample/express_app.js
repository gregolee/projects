const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

//root
app.use('/', require('./api'));

//users
app.use('/users', require('./api/user'));

//서버 구동 후 콜백메서드를 실행한다. 매 접속할때마다 동작하지 않는다.
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});

module.exports = app;