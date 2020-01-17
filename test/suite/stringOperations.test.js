const assert = require('assert');
const {
    camelToKebab,
    camelToSnake,
    camelToTitle
} = require('../../lib/stringOperations')

suite('String Operations Suite', () => {
	test('Camel to Kebab test', () => {
        assert.equal(camelToKebab('myNewString'), 'my-new-string');
        assert.equal(camelToKebab('helloWorld'), 'hello-world');
    });

    test('Camel to Snake test', () => {
        assert.equal(camelToSnake('myNewString'), 'my_new_string');
        assert.equal(camelToSnake('helloWorld'), 'hello_world');
    })

    test('Camel to Title test', () => {
        assert.equal(camelToTitle('myNewString'), 'My New String');
        assert.equal(camelToTitle('helloWorld'), 'Hello World');
    })
});
