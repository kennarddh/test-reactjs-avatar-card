// eslint-disable-next-line no-undef
module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		'jest/globals': true,
	},
	globals: {
		process: 'readonly',
		env: 'readonly',
		__dirname: 'readonly',
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jest/all',
		'plugin:json/recommended',
		'plugin:security/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['react', 'prettier', 'jsx-a11y', 'jest', '@typescript-eslint'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	settings: {
		'import/extensions': ['.js', '.jsx', 'ts', 'tsx'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', 'ts', 'tsx'],
				moduleDirectory: ['node_modules', 'src/'],
			},
			alias: {
				map: [['.', './src']],
				extensions: ['.js', '.jsx', 'ts', 'tsx'],
			},
		},
		react: {
			version: 'detect',
		},
		jest: {
			// eslint-disable-next-line no-undef
			version: require('jest/package.json').version,
		},
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'lf',
			},
		],
		'import/prefer-default-export': 'off',
		'linebreak-style': ['error', 'unix'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/prop-types': 'off',
		'no-case-declarations': 'off',
		'react/jsx-curly-brace-presence': 'warn',
		'react/jsx-no-useless-fragment': 'warn',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
	},
}
