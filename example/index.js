const fs = require('fs')

const purify = require('../src')
const filters = require('./filters.json')

const textFilename = './example/unclear-bazar.txt'

const unclearBazar = fs.readFile(textFilename, 'utf8', (err, data) => {
	if (err) throw err
	return data
})

const purified = purify(unclearBazar, filters)

console.log(bazar)
console.log(purified)
