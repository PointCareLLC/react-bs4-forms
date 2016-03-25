
import React from 'react'

import { Input } from '../../src'

export default React.createClass({
    render,
    getInitialState,
    handleUpdate
})

function render() {

    const firstName = {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        placeholder: 'Tommy',
        required: true,
        disabled: false,
        defaultValue: null,
        value: this.state.values.firstName,
        validation: (value) => value === 'Billy',
        displayValidation: true,
        onUpdate: this.handleUpdate
    }

    return (
        <div>
            <form noValidate>
                <Input {...firstName} />
            </form>
        </div>
    )
}

function getInitialState() {
    return {
        values: {
            inputField: null
        }
    }
}

function handleUpdate(name, value, valid) {
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
