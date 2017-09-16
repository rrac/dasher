const { promisify } = require('util')
const path = require('path')
const fs = require('fs');
const os = require('os');
const { config } = require('dotenv')
const mongoose = require('mongoose')
const byline = require('byline')
const { Observable } = require('rxjs');
const R = require('ramda');

config()

const { env } = process

mongoose.connect('mongodb://localhost:27017', { useMongoClient: true })

const context = path.resolve(__dirname)

const TEXT_DIR = path.resolve(context, 'text_data')

fs.readdir(TEXT_DIR, (err, files) => {
  files.filter(f => f.indexOf('.txt')).forEach(filePath => {
    const tag = path.join(TEXT_DIR, filePath);

    const readStream = byline(fs.createReadStream(tag, { encoding: 'utf8' }));
    
    const collectionName = filePath.replace('.txt', '')
    const schema = mongoose.Schema({}, { strict: false });
    const collection = mongoose.model(collectionName, schema);
    
    let header;
    const values = []
    readStream.on('data', line => {
      const parsedLine = line.split('\t')
      if (!header) {
        return header = parsedLine;
      }
    
      const object = parsedLine
        .reduce((final, item, i) => Object.assign(
          {},
          final,
          { [header[i]]: item }
        ), {})
      values.push(object)
    })
    
    readStream.on('end', () => {
      collection.insertMany(values)
        .then(console.log)
    })
  })
})