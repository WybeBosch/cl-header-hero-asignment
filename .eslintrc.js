module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true,
		webextensions: true,
	},
	plugins: [
		'regexp',
		'import'
	],
	extends: [
		// 'airbnb-base',
		'eslint:recommended',
		'plugin:regexp/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	parserOptions: {
		ecmaVersion: 9,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		//These rules only available in eslint.
        "eqeqeq": 0,//should we enforce === ?
		"curly": 2,//Whether or not we force the use of {} for if statements for example
		'padding-line-between-statements': [
			'error',
			{
				'blankLine': 'always',
				'prev': 'function',
				'next': 'block-like'
			}
		],
		'lines-between-class-members': ['error', 'always', {
			exceptAfterSingleLine: true
		}],
		'no-useless-escape' : 'off',
		'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
		// "regexp/prefer-d": "off",
		"template-curly-spacing": ["error", "always"],
		"no-template-curly-in-string": 'warn',
		"prefer-template": "warn",
		"space-before-blocks" : 2,

		//These eslint rules could be put into prettier
		'semi':['error', 'always'],
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab',
			{
				'SwitchCase':1,
				'ignoredNodes': ['TemplateLiteral']
			}
		],
		"space-infix-ops": ["error", { "int32Hint": false }]
		// 'no-console': 'off',
		// 'no-tabs': 'off',
		// 'no-plusplus': 'off',
		// 'max-len': 'off',
		// 'no-useless-concat': 'off',
		// 'no-use-before-define': 'off',
		// 'no-shadow': 'off',
		// 'no-param-reassign': 'off',
	},
};
