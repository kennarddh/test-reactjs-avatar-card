const { resolve } = require('path')

// eslint-disable-next-line no-undef
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					Components: resolve(__dirname, './src/Components'),
					Contexts: resolve(__dirname, './src/Contexts'),
					Utils: resolve(__dirname, './src/Utils'),
					Hooks: resolve(__dirname, './src/Hooks'),
					Constants: resolve(__dirname, './src/Constants'),
					Api: resolve(__dirname, './src/Api'),
				},
			},
		],
		'styled-components',
	],
}
