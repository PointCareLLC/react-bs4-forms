
import React from 'react'

import { Input, Textarea, Select } from '../../src'

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
        size: null,
        required: true,
        disabled: false,
        value: this.state.values.firstName,
        valid: null,
        handleChange: this.handleChange
    }

    const note = {
        rows: '4',
        placeholder: 'This is my note',
        name: 'note',
        label: 'Note',
        size: null,
        required: true,
        disabled: false,
        value: this.state.values.note,
        valid: null,
        handleChange: this.handleChange
    }

    const gender = {
        rows: '4',
        placeholder: 'What is your gender',
        name: 'gender',
        label: 'Gender',
        size: null,
        required: true,
        disabled: false,
        value: this.state.values.gender,
        valid: null,
        handleChange: this.handleChange,
        options: [{ value: 'm', text: 'Male' }, { value: 'f', text: 'Female' }, { value: 'o', text: 'Other' }]
    }

    return (
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <form noValidate>
                    <Input {...firstName} />
                    <Textarea {...note} />
                    <Select {...gender}/>
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

function handleChange(name, value) {
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
