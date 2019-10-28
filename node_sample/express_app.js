const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

//main
router.get('/', (req, res) => {
    res.send('Hello World!\n');
});

//users
app.use('/users', require('./api/user'));

//서버 구동 후 콜백메서드를 실행한다. 매 접속할때마다 동작하지 않는다.
app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});



//해당 내용을 express_router.js에서 담당한다.
/*
let users = [
    {
        id: 1,
        name: 'alice'
    },
    {
        id: 2,
        name: 'bek'
    },
    {
        id: 3,
        name: 'chris'
    }
]

//main
app.get('/', (req, res) => {
    res.send('Hello World!\n');
});

//user list
app.get('/users', (req, res) => res.json(users));

//user info
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(!id) {
        return res.status(400).json({error: 'Incorrect Id'});
    }
    const user = users.filter(user => user.id===id)[0];
    if(!user) {
        return res.status(404).json({error: 'Unknown user'});
    }
    return res.json(user);
});

//delete user
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(!id) {
        return res.status(400).json({error: 'Incorrect Id'});
    }
    const userIdx = users.findIndex(user => user.id===id);
    if(userIdx === -1) {
        return res.status(404).json({error: 'Unknown user.'});
    }
    users.splice(userIdx, 1);
    res.status(204).send();
});

//create user
app.post('/users/:id', (req, res) => {
    const name = req.body.name || '';
    if(!name.length) {
        return res.status(400).json({error: 'Incorrect Name'});
    }
    
    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId;
    }, 0) + 1;
    
    const newUser = {
        id: id,
        name: name
    }

    users.push(newUser);
    return res.status(201).json(newUser);
});
*/