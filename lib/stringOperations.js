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

function snakeToCamel(string) {
    return string.trim().split('_').map((substring, index) => {
        if (index === 0) {
            return substring;
        }
        return substring[0].toUpperCase() + substring.substring(1);
    }).join('');
}

function snakeToKebab(string) {
    return string.trim().replace(/_/g, '-').toLowerCase();
}

function snakeToTitle(string) {
    return string.trim().split('_').map(substring => substring[0].toUpperCase() + substring.substring(1)).join(' ');
}

function toLower(string) {
    return string.toLowerCase();
}

function toUpper(string) {
    return string.toUpperCase();
}

function toSnake(string) {
    return string
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_')
        .trim()
}

function toKebab(string) {
    return string
        .trim()
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-')
}


module.exports = {
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
}