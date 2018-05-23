const fs = require('fs')
const path = require('path')
const os = require('os')

const OUTPUT = 'output'

const jsonify = (filePath='test-data.csv')=>{
  if (typeof(filePath)==='string' && filePath.length>0) {
    if (fs.existsSync(filePath)) {
      fs.readFile(path.join(__dirname, filePath), {encoding: 'utf-8'}, (error, data)=>{
        if (error) return console.error(error)
        if (typeof(data)==='string'&&data.length>0) {
          const keys = []
          const arr = []
          data.split(os.EOL).forEach((line,index)=>{
            if (index===0) {
              if (typeof(line)==='string' && line.length>0) {
                line.split(',').forEach(e=>{
                  keys.push(e)
                })
              }
            } else {
              if (typeof(line)==='string' && line.length>0) {
                const obj = {}
                line.split(',').forEach((e,i)=>{
                  if (i<keys.length) {
                    obj[keys[i]] = e
                  }
                })
                if (Object.keys(obj).length>0) {
                  arr.push(obj)
                }
              }
            }
          })
          if (arr.length>0) {
            // create an output folder if not exist
            if (!fs.existsSync(OUTPUT)) {
              fs.mkdirSync(OUTPUT)
            }
            // write to json file
            const outputFilePath = `${OUTPUT}/${filePath}.json`
            fs.writeFile(outputFilePath, JSON.stringify(arr, null, 2), (error)=>{
              if (error) return console.error(error)
              console.log(`Created at ${outputFilePath}.`);
            })
          }
        }
      })
    }
  }
}

jsonify(process.argv[2])
