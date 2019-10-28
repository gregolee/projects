const express = require('express');
const router = express.Router();

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

//user list
router.get('/', (req, res) => res.json(users));

//user info
router.get('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
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
router.post('/:id', (req, res) => {
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

module.exports = router;
