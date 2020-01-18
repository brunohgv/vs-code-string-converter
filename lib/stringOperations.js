function camelToKebab(string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function camelToSnake(string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
}

function camelToTitle(string) {
    return string[0].toUpperCase() + string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1 $2').substring(1);
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

function toLower(string) {
    return string.toLowerCase();
}

function toUpper(string) {
    return string.toUpperCase();
}

module.exports = {
    camelToKebab,
    camelToSnake,
    camelToTitle,
    kebabToCamel,
    kebabToSnake,
    kebabToTitle,
    toLower,
    toUpper,
}