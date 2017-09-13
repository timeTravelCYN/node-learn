const fs = require('fs')
const path = require('path')
fs.readdir(process.argv[2], (err, list) => {
  if(err) {
    console.log(err)
  }else {
    let type = '.' +  process.argv[3]
    
    list.forEach((item) => {
      if(path.extname(item) === type) {
        console.log(item)
      }
    })
  }
})