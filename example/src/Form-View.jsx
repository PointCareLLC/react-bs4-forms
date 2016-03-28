
import React from 'react'

import { Input, Textarea, Select, Checkbox } from '../../src'

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
        name: 'gender',
        label: 'Select Gender',
        size: null,
        required: true,
        disabled: false,
        value: this.state.values.gender,
        valid: null,
        handleChange: this.handleChange,
        options: [{ value: 'm', text: 'Male' }, { value: 'f', text: 'Female' }, { value: 'o', text: 'Other' }]
    }

    const color = {
        name: 'color',
        label: 'Favorite Color',
        size: null,
        required: true,
        disabled: false,
        value: this.state.values.color,
        valid: null,
        handleChange: this.handleChange,
        options: [{ id: 'red', text: 'Red' }, { id: 'green', text: 'Green' }, { id: 'blue', text: 'Blue' }]
    }

    return (
        <form noValidate>
            <Input {...firstName} />
            <Textarea {...note} />
            <Select {...gender} />
            <Checkbox {...color} />
        </form>
    )
}

function getInitialState() {
    return {
        values: {
            color: { 'green': true }
        }
    }
}

function handleChange(name, value) {
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
