//1 express initialize what i installed and cors function define
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
//1 express ke usable korar jonno app
//1 port define
const port = process.env.port || 5000;

// 1 data call get
app.get('/', (req, res) => {
    res.send('hello beautiful 2nd lady')
})
//2 data user get
const users = [
    { id: 0, name: 'sakur', email: 'sakur@gmail', phone: '1234' },
    { id: 1, name: 'sakil', email: 'aakur@gmail', phone: '5678' },
    { id: 2, name: 'salim', email: 'ddkur@gmail', phone: '9101' },
    { id: 3, name: 'sahana', email: 'vvkur@gmail', phone: '1213' },
    { id: 4, name: 'sabbir', email: 'vvcckur@gmail', phone: '1415' },
    { id: 5, name: 'sabur', email: 'wwkur@gmail', phone: '097768' },
];
// 3 request query
app.get('/users', (req, res) => {
    // console.log(req.query.search);
    // res.send(users);
    const search = req.query.search;
    if (search) {
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult);
    }
    else {
        res.send(users)
    }
});

app.get('/users', (req, res) => {
    res.send(users);
})

// 2 particular user get
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
    // console.log(req.params.id)
})
// 3 request query
app.get('/users', (req, res) => {
    // console.log(req.query.search);
    // res.send(users);
    const search = req.query.search;
    if (search) {
        const searchresult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchresult);
    }
    else {
        res.send(users)
    }
});

// get  data by using app.post

app.post('/users', (req, res) => {
    // new users add
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hittting the data', req.body)
    // res.send('data hitted');
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})



// 2 mangoes 
app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})












// 1 data call app listen na korleu prblm nai
app.listen(port, () => {
    console.log('listen port', port)
})
