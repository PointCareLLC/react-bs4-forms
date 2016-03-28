
jest.unmock('../value-checkers.js')

import { validCheck } from '../value-checkers'

describe('value-checkers - validCheck method', function() {


    // -- only value argumet --

    it('should return true if given no argumets', function() {

        // setup
        const subject = validCheck

        // result
        const result = subject()
        expect(result).toEqual(true)
    })

    it('should return true if given value as empty string', function() {

        // setup
        const value = ''
        const subject = validCheck

        // result
        const result = subject(value)
        expect(result).toEqual(true)
    })

    it('should return true if given only a value as string', function() {

        // setup
        const value = 'Bobby'
        const subject = validCheck

        // result
        const result = subject(value)
        expect(result).toEqual(true)
    })

    it('should return true if given only a value as number', function() {

        // setup
        const value = 10
        const subject = validCheck

        // result
        const result = subject(value)
        expect(result).toEqual(true)
    })


    // -- required argument --

    it('should return true if given value and required is false', function() {

        // setup
        const value = 'some'
        const subject = validCheck
        const required = false

        // result
        const result = subject(value, required)
        expect(result).toEqual(true)
    })

    it('should return true if given value and required is true', function() {

        // setup
        const value = 'some'
        const subject = validCheck
        const required = true

        // result
        const result = subject(value, required)
        expect(result).toEqual(true)
    })

    it('should return false if given empty value and required is true', function() {

        // setup
        const value = ''
        const subject = validCheck
        const required = true

        // result
        const result = subject(value, required)
        expect(result).toEqual(false)
    })


    // -- func argument --

    it('should return true if given value and validation func that returns true', function() {

        // setup
        const value = 'some'
        const subject = validCheck
        const required = false
        const func = () => true

        // result
        const result = subject(value, required, func)
        expect(result).toEqual(true)
    })

    it('should return false if given value and validation func that returns false', function() {

        // setup
        const value = 'some'
        const subject = validCheck
        const required = false
        const func = () => false

        // result
        const result = subject(value, required, func)
        expect(result).toEqual(false)
    })
})
