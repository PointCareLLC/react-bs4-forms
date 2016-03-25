
export function validCheck(value, required, func) {

    const isValid = func ? func(value) : null

    if (isValid === false) return false
    if (required === false) return true
    if (value === '' || value === null || value === undefined) return false
    return true
}

export function emptyCheck(value) {
    return (value === '' || value === null || value === undefined) ? true : false
}
