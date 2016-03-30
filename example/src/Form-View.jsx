
import React from 'react'

import { Input, Textarea, Select } from '../../src'

export default React.createClass({
    render,
    getInitialState,
    handleUpdate
})

function render() {

    const firstName = {
        id: 'firstname',
        label: 'First Name',
        value: this.state.values.firstname,
        onUpdate: this.handleUpdate
    }

    const quote = {
        id: 'favquote',
        label: 'Favorite Quote',
        value: this.state.values.favquote,
        onUpdate: this.handleUpdate
    }

    const color = {
        id: 'favcolor',
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

function handleUpdate(id, value) {
    var values = this.state.values
    values[id] = value
    this.setState({ values: values })
}
