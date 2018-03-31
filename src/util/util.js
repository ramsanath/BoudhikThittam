export function isValidString(value) {
    return (
        typeof value == 'string' &&
        value != ''
    )
}

export function isValidObject(value) {
    return (
        typeof value == 'object' &&
        Object.keys(value).length != 0
    )
}

export function currentYear() {
    return (new Date()).getFullYear();
}
