const fs = require('fs')

function writeFile(content) {
  return fs.appendFile('log.txt', content, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}

module.exports = {
  writeFile,
}
