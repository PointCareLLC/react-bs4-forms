
/**
    * Test if field value is valid
    * @param {(string|number)} [value] - field value
    * @param {bool} [required=false] - is field required
    * @param {func} [func] - custom field validation function
    * @returns {bool}
*/
export function validCheck(value, required = false, func) {

    const isValid = func ? func(value) : null

    if (isValid !== null) return isValid

    if (required === false) return true

    if (emptyCheck(value) === true) return false

    return true
}


/**
    * Test if value is empty. Note: false & 0 are considered non-empty
    * @param {*} [value] - field value
    * @returns {bool}
*/
export function emptyCheck(value) {
    return (value === '' || value === null || value === undefined) ? true : false
}
