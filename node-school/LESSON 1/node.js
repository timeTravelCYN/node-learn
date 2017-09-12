const {argv} = process
const [node, file, ...arr] = argv
const num = arr.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10), 0)
console.log(num)
