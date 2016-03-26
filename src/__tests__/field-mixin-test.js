
jest.unmock('../field-mixin.jsx')

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import fieldMixin from '../field-mixin.jsx'

const TestInput = React.createClass({
    mixins: [ fieldMixin ],
    render
})

function render() {

    const elProps = this.getElementProps()

    return (
        <div>
            <input {...elProps} />
        </div>
    )
}

describe('field-mixin', () => {

    it('Should render', () => {

        const testProps = {
            name: 'firstName',
            label: 'First Name',
            required: true,
            disabled: false,
            defaultValue: 'James',
            value: null,
            validation: (value) => true,
            displayValidation: true,
            handleChange: (name, value, valid) => console.log(value)
        }

        const testInput = TestUtils.renderIntoDocument(
            <TestInput {...testProps} />
        )
    })
})
