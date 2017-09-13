const LSFilter = require('./module')
const path = process.argv[2]
const extname = process.argv[3]

LSFilter(path, extname, (err, list) => {
  if(err) return console.log(err)
  list.map((item) => {
    console.log(item)
  })
})