const express = require('express')
const app = express()
const port = 3000
let cors = require('cors')

app.use(cors())
// app.use(express.json());

app.get('/api/v1', (req, res) => {
  res.send([{
    title:"feroz1",
    id:Date.now()
  },{
    
    title:"feroz2",
    id:Date.now()
  },{
    title:"feroz3",
    id:Date.now()
  }])

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  
