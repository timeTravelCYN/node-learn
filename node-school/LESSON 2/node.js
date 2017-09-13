const fs = require('fs')
const file = process.argv[2]
const buffer = fs.readFileSync(file)
const line = buffer.toString().split('\n').length - 1
console.log(line)
