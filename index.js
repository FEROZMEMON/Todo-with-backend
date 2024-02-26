// const express = require('express')
// const app = express()
// const port = 3000
// let cors = require('cors')

// //MIDDLEWARE
// app.use(cors())
// app.use(express.json());



// const arr = [];


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


// //get all users

// app.get('/api/v1/users', (req, res) => {
//     res.send(arr)
// })



// //add user

// app.post('/api/v1/users', (req, res) => {
//     const { title } = req.body;
//     arr.push({
//         title: title,
//         id: Date.now(),
//     })
//     res.send('user added successfully');
// })

// app.delete('/api/v1/users/:id' , (req , res)=>{
//   const {id} = req.params
//   const index = arr.findIndex((user)=> user.id === Number(id))
//   if(Number === -1){
//     console.log('user not found');
//     return
//   }
//   arr.splice(index , 1)


// })
// app.put('/api/v1/users/:id' , (req , res)=>{
//   const {id} = req.params
//   const {title} = req.body
//   const index = arr.findIndex((user)=> user.id === Number(id))
//   if(Number === -1){
//     console.log('user not found');
//     return
//   }
//   arr[index].title = title


// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

  











const express = require('express');
const app = express();
const port = 3000;
let cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

const arr = [];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Get all users
app.get('/api/v1/users', (req, res) => {
    res.send(arr);
});

// Add user
app.post('/api/v1/users', (req, res) => {
    const { title } = req.body;
    arr.push({
        title: title,
        id: Date.now(),
    });
    res.status(201).send('User added successfully');
});

// Delete user
app.delete('/api/v1/users/:id', (req, res) => {
    const { id } = req.params;
    const index = arr.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        console.log('User not found');
        res.status(404).send('User not found');
        return;
    }
    arr.splice(index, 1);
    res.status(200).send('User deleted successfully');
});

// Update user
app.put('/api/v1/users/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const index = arr.findIndex((user) => user.id === Number(id));
    if (index === -1) {
        console.log('User not found');
        res.status(404).send('User not found');
        return;
    }
    arr[index].title = title;
    res.status(200).send('User updated successfully');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});