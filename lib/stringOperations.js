function camelToKebab(string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

function camelToSnake(string) {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase();
}

function camelToTitle(string) {
    return string[0].toUpperCase() + string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1 $2').substring(1);
}

module.exports = {
    camelToKebab,
    camelToSnake,
    camelToTitle
}