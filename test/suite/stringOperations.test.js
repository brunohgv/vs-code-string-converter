const assert = require('assert');
const {
    camelToKebab,
    camelToSnake,
    camelToTitle,
    kebabToCamel,
    kebabToSnake,
    kebabToTitle,
    titleToCamel,
    titleToSnake,
    titleToKebab,
    snakeToCamel,
    snakeToKebab,
    snakeToTitle,
    toLower,
    toUpper,
    toSnake,
    toKebab,
} = require('../../lib/stringOperations')

suite('String Operations Suite', () => {
	test('Camel to Kebab test', () => {
        assert.strictEqual(camelToKebab('myNewString'), 'my-new-string');
        assert.strictEqual(camelToKebab('helloWorld'), 'hello-world');
        assert.strictEqual(camelToKebab('HelloWorld'), 'hello-world');
    });

    test('Camel to Snake test', () => {
        assert.strictEqual(camelToSnake('myNewString'), 'my_new_string');
        assert.strictEqual(camelToSnake('helloWorld'), 'hello_world');
        assert.strictEqual(camelToSnake('HelloWorld'), 'hello_world');
    })

    test('Camel to Title test', () => {
        assert.strictEqual(camelToTitle('myNewString'), 'My New String');
        assert.strictEqual(camelToTitle('helloWorld'), 'Hello World');
        assert.strictEqual(camelToTitle('HelloWorld'), 'Hello World')
    })

    test('Kebab to Camel test', () => {
        assert.strictEqual(kebabToCamel('my-new-string'), 'myNewString');
        assert.strictEqual(kebabToCamel('hello-world'), 'helloWorld');
    })

    test('Kebab to Snake test', () => {
        assert.strictEqual(kebabToSnake('my-new-string'), 'my_new_string');
        assert.strictEqual(kebabToSnake('hello-world'), 'hello_world');
    })

    test('Kebab to Title test', () => {
        assert.strictEqual(kebabToTitle('my-new-string'), 'My New String');
        assert.strictEqual(kebabToTitle('hello-world'), 'Hello World');
    })

    test('Title to Camel test', () => {
        assert.strictEqual(titleToCamel('My New String'), 'myNewString');
        assert.strictEqual(titleToCamel('Hello world'), 'helloWorld');
        assert.strictEqual(titleToCamel('  Hello World  '), 'helloWorld');
    })

    test('Title to Snake test', () => {
        assert.strictEqual(titleToSnake('My New String'), 'my_new_string');
        assert.strictEqual(titleToSnake('Hello world'), 'hello_world');
        assert.strictEqual(titleToSnake('  Hello World  '), 'hello_world');
    })

    test('Title to Kebab test', () => {
        assert.strictEqual(titleToKebab('My New String'), 'my-new-string');
        assert.strictEqual(titleToKebab('Hello world'), 'hello-world');
        assert.strictEqual(titleToKebab('  Hello World  '), 'hello-world');
    })

    test('Snake to Camel test', () => {
        assert.strictEqual(snakeToCamel('my_new_string'), 'myNewString');
        assert.strictEqual(snakeToCamel('hello_world'), 'helloWorld');
        assert.strictEqual(snakeToCamel('  hello_world  '), 'helloWorld');
    })

    test('Snake to Title test', () => {
        assert.strictEqual(snakeToTitle('my_new_string'), 'My New String');
        assert.strictEqual(snakeToTitle('hello_world'), 'Hello World');
        assert.strictEqual(snakeToTitle('  hello_world  '), 'Hello World');
    })

    test('Snake to Kebab test', () => {
        assert.strictEqual(snakeToKebab('my_new_string'), 'my-new-string');
        assert.strictEqual(snakeToKebab('hello_world'), 'hello-world');
        assert.strictEqual(snakeToKebab('  hello_world  '), 'hello-world');
    })

    test('Test to uppercase', () => {
        assert.strictEqual(toUpper('my_new_string'), 'MY_NEW_STRING');
        assert.strictEqual(toUpper('hello-world'), 'HELLO-WORLD');
        assert.strictEqual(toUpper('  hello_world  '), '  HELLO_WORLD  ');
        assert.strictEqual(toUpper('My New String'), 'MY NEW STRING');
        assert.strictEqual(toUpper('MY NEW STRING'), 'MY NEW STRING');
    })

    test('Test to lowercase', () => {
        assert.strictEqual(toLower('my_new_string'), 'my_new_string');
        assert.strictEqual(toLower('hello-world'), 'hello-world');
        assert.strictEqual(toLower('  hello_world  '), '  hello_world  ');
        assert.strictEqual(toLower('My New String'), 'my new string');
        assert.strictEqual(toLower('MY NEW STRING'), 'my new string');
    })

    test('to snake', () => {
        assert.strictEqual(toSnake('my_new_string'), 'my_new_string');
        assert.strictEqual(toSnake('hello-world'), 'hello_world');
        assert.strictEqual(toSnake('  hello_world  '), 'hello_world');
        assert.strictEqual(toSnake('My New String'), 'my_new_string');
        assert.strictEqual(toSnake('MY NEW STRING'), 'my_new_string');
        assert.strictEqual(toSnake('thisIsMyString'), 'this_is_my_string');
    })

    test('to kebab', () => {
        assert.strictEqual(toKebab('my_new_string'), 'my-new-string');
        assert.strictEqual(toKebab('hello-world'), 'hello-world');
        assert.strictEqual(toKebab('  hello_world  '), 'hello-world');
        assert.strictEqual(toKebab('My New String'), 'my-new-string');
        assert.strictEqual(toKebab('MY NEW STRING'), 'my-new-string');
        assert.strictEqual(toKebab('thisIsMyString'), 'this-is-my-string');
    })
});
