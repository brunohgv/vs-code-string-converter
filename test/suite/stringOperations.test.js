const assert = require('assert');
const {
    camelToKebab
} = require('../../lib/stringOperations')

suite('String Operations Suite', () => {
	test('Camel to Kebab test', () => {
        assert.equal(camelToKebab('myNewString'), 'my-new-string')
        assert.equal(camelToKebab('helloWorld'), 'hello-world')
	});
});
