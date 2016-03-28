
jest.unmock('../value-checkers.js')

import { emptyCheck } from '../value-checkers'

describe('value-checkers - emptyCheck method', function() {

    it('should return true if given undefined', function() {

        // setup
        const subject = emptyCheck

        // result
        const result = subject()
        expect(result).toEqual(true)
    })

    it('should return true if given null', function() {

        // setup
        const subject = emptyCheck
        const value = null

        // result
        const result = subject(value)
        expect(result).toEqual(true)
    })

    it('should return true if given empty string', function() {

        // setup
        const subject = emptyCheck
        const value = ''

        // result
        const result = subject(value)
        expect(result).toEqual(true)
    })

    it('should return false if given non-empty string', function() {

        // setup
        const subject = emptyCheck
        const value = 'hello world'

        // result
        const result = subject(value)
        expect(result).toEqual(false)
    })

    it('should return false if given a number', function() {

        // setup
        const subject = emptyCheck
        const value = 0

        // result
        const result = subject(value)
        expect(result).toEqual(false)
    })

    it('should return false if given an object', function() {

        // setup
        const subject = emptyCheck
        const value = {}

        // result
        const result = subject(value)
        expect(result).toEqual(false)
    })
})
