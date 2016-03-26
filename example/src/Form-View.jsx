
import React from 'react'

import { Input } from '../../src'

export default React.createClass({
    render,
    getInitialState,
    handleChange
})

function render() {

    const firstName = {
        type: 'text',
        placeholder: 'Tommy',
        name: 'firstName',
        label: 'First Name',
        required: true,
        disabled: false,
        defaultValue: null,
        value: this.state.values.firstName,
        validation: (value) => value === 'Billy',
        displayValidation: true,
        handleChange: this.handleChange
    }

    return (
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <form noValidate>
                    <Input {...firstName} />
                </form>
            </div>
        </div>
    )
}

function getInitialState() {
    return {
        values: {}
    }
}

function handleChange(name, value, valid) {
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
