module.exports = [{
	languageOptions: {
		ecmaVersion: 8,
		sourceType: "commonjs",
	},

	rules: {
		indent: [2, "tab"],
		"linebreak-style": [2, "unix"],
		semi: [2, "always"],
		"no-shadow": 1,
		"no-unused-vars": 1,
		/* We use _method for private methods */
		"no-underscore-dangle": 0,
		/* Don't care whether it's "quote" or 'quote' */
		quotes: 0,
		/* We do ,obj in multi-line arrays literals */
		"comma-spacing": 0,
		/* We have a space before a tab in the first line of a multi-line array literal */
		"no-mixed-spaces-and-tabs": 0,
		/* We don't space our multiplications */
		"space-infix-ops": 0,
		/* It's okay to make functions in a loop if you're using let and const */
		"no-loop-func": 0,
		/* We sometimes use 'function() { new X() }` in a test to test
		* for exceptions thrown in the constructor. */
		"no-new": 0,
	},
}];
