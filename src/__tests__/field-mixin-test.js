
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
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            placeholder: 'Tommy',
            required: true,
            disabled: false,
            defaultValue: null,
            value: null,
            validation: (value) => value === 'Billy',
            displayValidation: true,
            onUpdate: (name, value, valid) => console.log(value)
        }

        const testInput = TestUtils.renderIntoDocument(
          <TestInput {...testProps} />
        )
    })
})
