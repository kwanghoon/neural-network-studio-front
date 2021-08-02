module.exports = {
	extends: [
		'prettier',
		'airbnb',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	env: {
		browser: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'no-shadow': 'off',
		'linebreak-style': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-control-regex': 'off',
		'arrow-body-style': ['off'],
		'react/react-in-jsx-scope': 'off',
		camelcase: 'off',
		'no-underscore-dangle': 'off',
		'no-unused-vars': 'off',
		'react/jsx-filename-extension' : 'off',
	},
};
