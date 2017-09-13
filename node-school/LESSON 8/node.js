const bl = require('bl')
const http = require('http')
const [node, file, ...urls] = process.argv

const fetch = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.pipe(bl((err, data) => {
        if(err) console.error(err)
        resolve(data.toString())
      }))
    })
  }) 
}

Promise.all(urls.map(fetch)).then(res => {
  res.forEach(item => console.log(item))
})