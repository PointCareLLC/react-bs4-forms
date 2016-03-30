
import React from 'react'

import { Input, Textarea, Select, Radio } from '../../src'

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

    const drink = {
        name: 'drink',
        label: 'Size of drink',
        value: this.state.values.drink,
        options: [{ value: 'sm', text: 'Small' }, { value: 'md', text: 'Medium' }, { value: 'lg', text: 'Large' }],
        onUpdate: this.handleUpdate
    }

    return (
        <form noValidate>
            <Input {...firstName} />
            <Textarea {...quote} />
            <Select {...color} />
            <Radio name={drink.name} value={drink.options[0].value} text={drink.options[0].text} checked={drink.value === drink.options[0].value} onUpdate={this.handleUpdate} />
            <Radio name={drink.name} value={drink.options[1].value} text={drink.options[1].text} checked={drink.value === drink.options[1].value} onUpdate={this.handleUpdate} />
            <Radio name={drink.name} value={drink.options[2].value} text={drink.options[2].text} checked={drink.value === drink.options[2].value} onUpdate={this.handleUpdate} />
        </form>
    )
}

function getInitialState() {
    return {
        values: {}
    }
}

function handleUpdate(name, value) {
    console.log('form update:', name, value)
    var values = this.state.values
    values[name] = value
    this.setState({ values: values })
}
