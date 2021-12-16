const express = require('express')
const app = express()
//const port = 3000
const path = require('path')

app.use('/public', express.static(path.join(__dirname,'/public')))

app.get('/', (req, res) => {
    
    
    var file_locationnn = path.join(__dirname, '/public/home.html')
    

  res.sendFile(file_locationnn)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})