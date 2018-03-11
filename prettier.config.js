module.exports = {
	semi: false,
	tabWidth: 4,
	useTabs: true,
	printWidth: 80,
	singleQuote: true,
	trailingComma: 'none',
	bracketSpacing: true,
	arrowParens: 'avoid',
	overrides: [
		{
			files: 'README.md',
			options: {
				singleQuote: false,
				printWidth: 150
			}
		}
	]
}
