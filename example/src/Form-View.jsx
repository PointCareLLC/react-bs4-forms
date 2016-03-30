
import React from 'react'

import { Input, Textarea, Select } from '../../src'

export default React.createClass({
    render,
    getInitialState,
    handleUpdate
})

function render() {

    const firstName = {
        name: 'firstname',
        label: 'First Name',
        value: this.state.values.firstname,
        onUpdate: this.handleUpdate
    }

    const quote = {
        name: 'favquote',
        label: 'Favorite Quote',
        value: this.state.values.favquote,
        onUpdate: this.handleUpdate
    }

    const color = {
        name: 'favcolor',
        label: 'Favorite Color',
        placeholder: 'Choose a color',
        value: this.state.values.favcolor,
        options: [{ value: 'red', text: 'Red' }, { value: 'blue', text: 'Blue' }, { value: 'green', text: 'Green' }],
        onUpdate: this.handleUpdate
    }

    return (
        <form noValidate>
            <Input {...firstName} />
            <Textarea {...quote} />
            <Select {...color} />
        </form>
    )
}

function getInitialState() {
    return {
        values: {}
    }
}

function handleUpdate(name, value) {
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
