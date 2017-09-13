const fs = require('fs')
const path = require('path')

const LSFilter = (dir, extname, callback) => {
  fs.readdir(dir, (err, list) => {
    if(err) return callback(err)
    list = list.filter(item => {
      return path.extname(item) === '.' + extname
    })
    callback(null, list)
  })
}

module.exports = LSFilter