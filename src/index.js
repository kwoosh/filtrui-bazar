const createRegexp = key => new RegExp(String(key), 'gi')

const replaceKey = filters => (text, key) =>
	text.replace(createRegexp(key), filters[key])

const filter = (text = '', filters = {}) =>
	Object.keys(filters).reduce(replaceKey(filters), String(text))

module.exports = filter
