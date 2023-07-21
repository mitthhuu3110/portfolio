const fs = require('fs')

const args = process.argv.slice(2)
const content = args.join('\n')
const filePath = './out/CNAME'

console.log("Creating CNAME...")
fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.error(err)
  }
  else {
    console.log(`${filePath} created`)
    console.log(`Domains added:\n${content}`)
  }
})