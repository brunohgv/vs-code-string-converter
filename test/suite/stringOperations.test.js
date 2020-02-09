const assert = require('assert');
const {
    camelToKebab,
    camelToSnake,
    camelToTitle,
    kebabToCamel,
    kebabToSnake,
    kebabToTitle,
} = require('../../lib/stringOperations')

suite('String Operations Suite', () => {
	test('Camel to Kebab test', () => {
        assert.equal(camelToKebab('myNewString'), 'my-new-string');
        assert.equal(camelToKebab('helloWorld'), 'hello-world');
        assert.equal(camelToKebab('HelloWorld'), 'hello-world');
    });

    test('Camel to Snake test', () => {
        assert.equal(camelToSnake('myNewString'), 'my_new_string');
        assert.equal(camelToSnake('helloWorld'), 'hello_world');
        assert.equal(camelToSnake('HelloWorld'), 'hello_world');
    })

    test('Camel to Title test', () => {
        assert.equal(camelToTitle('myNewString'), 'My New String');
        assert.equal(camelToTitle('helloWorld'), 'Hello World');
        assert.equal(camelToTitle('HelloWorld'), 'Hello World')
    })

    test('Kebab to Camel test', () => {
        assert.equal(kebabToCamel('my-new-string'), 'myNewString');
        assert.equal(kebabToCamel('hello-world'), 'helloWorld');
    })

    test('Kebab to Snake test', () => {
        assert.equal(kebabToSnake('my-new-string'), 'my_new_string');
        assert.equal(kebabToSnake('hello-world'), 'hello_world');
    })

    test('Kebab to Title test', () => {
        assert.equal(kebabToTitle('my-new-string'), 'My New String');
        assert.equal(kebabToTitle('hello-world'), 'Hello World');
    })
});
