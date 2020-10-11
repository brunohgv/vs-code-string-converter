// a Map of all supported types
const Types = {
    KEBAB:'kebab',
    SNAKE:'snake',
    CAMEL:'camel',
    TITLE:'title',
}

// Precompiled regex has a distinct advantage.
// Check benchmark here: https://jsbench.me/58kg4n7h86/1
const FORMATS = {
    [Types.KEBAB]: /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/g,
    [Types.SNAKE]: /^([a-z][a-z0-9]*)(_[a-z0-9]+)*$/g,
    [Types.CAMEL]: /^[a-z][a-zA-Z0-9]+$/g,
    [Types.TITLE]: /^(?:[A-Z][^\s]*\s?)+$/g,
}

// Function to detect which style the string is formatted into.
function detectStringStyle(string) {
    // test the string against all formats and return the KEY as type
    return Object.keys(FORMATS).find(format => FORMATS[format].test(string));
}

/**
 * 
 * These four functions ( toKebab, toSnake, toTitlke and toCamel) can actually be combined
 * into a generic function, albeit at the cost of readability.
 * The advantage of doing that would be that we can add/ remove format supports flexibly.
 */
function toKebab(string) {
    const format = detectStringStyle(string);
    // we don't know the type or it's already in kebab case
    if (typeof(format) === 'undefined' || format === Types.KEBAB) return string;
    if (format === Types.CAMEL) return camelToKebab(string);
    if (format === Types.TITLE) return titleToKebab(string);
    // other conversions are not supported.
    return string;
}

function toSnake(string) {
    const format = detectStringStyle(string);
    // we don't know the type or it's already in snake case
    if (typeof(format) === 'undefined' || format ===  Types.SNAKE) return string;
    if (format === Types.CAMEL) return camelToSnake(string);
    if (format === Types.TITLE) return titleToSnake(string);
    if (format === Types.KEBAB) return kebabToSnake(string);
    // other conversions are not supported.
    return string;
}

function toTitle(string) {
    const format = detectStringStyle(string);
    // we don't know the type or it's already in title case
    if (typeof(format) === 'undefined' || format ===  Types.TITLE) return string;
    if (format === Types.CAMEL) return camelToTitle(string);
    if (format === Types.KEBAB) return kebabToTitle(string);
    // other conversions are not supported.
    return string;
}

function toCamel(string) {
    const format = detectStringStyle(string);
    // we don't know the type or it's already in camel case
    if (typeof(format) === 'undefined' || format ===  Types.CAMEL) return string;
    if (format === Types.TITLE) return titleToCamel(string);
    if (format === Types.KEBAB) return kebabToCamel(string);
    // other conversions are not supported.
    return string;
}

function camelToKebab(string) {
    let result = string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    return result.charAt(0) === '-' ? result.slice(1) : result;
}

function camelToSnake(string) {
    let result = string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
    return result.charAt(0) === '_' ? result.slice(1) : result;
}

function camelToTitle(string) {
    var result = string.replace( /([A-Z])/g, " $1" );
    return result.charAt(0) === ' ' ? result.slice(1) : result.charAt(0).toUpperCase() + result.slice(1);
}

function kebabToCamel(string) {
    return string.split('-').map((substring, index) => {
        if (index === 0) {
            return substring;
        }
        return substring[0].toUpperCase() + substring.substring(1);
    }).join('');
}

function kebabToSnake(string) {
    return string.replace(/-/g, '_').toLowerCase();
}

function kebabToTitle(string) {
    return string.split('-').map(substring => substring[0].toUpperCase() + substring.substring(1)).join(' ');
}

function titleToCamel(string) {
    return string.trim().split(' ').map((substring, index) => {
        if (index == 0) {
            return substring[0].toLowerCase() + substring.substring(1);
        }
        return substring[0].toUpperCase() + substring.substring(1);
    }).join('');
}

function titleToSnake(string) {
    return string.trim().split(' ').map(substring => substring.toLowerCase()).join('_');
}

function titleToKebab(string) {
    return string.trim().split(' ').map(substring => substring.toLowerCase()).join('-');
}

function toLower(string) {
    return string.toLowerCase();
}

function toUpper(string) {
    return string.toUpperCase();
}

module.exports = {
    toLower,
    toUpper,
    toCamel,
    toSnake,
    toTitle,
    toKebab,
}