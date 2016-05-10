
import React from 'react'

import { Input, Textarea, Select, Radio, Checkbox, RadioGroup } from '../../src'

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
        onUpdate: this.handleUpdate,
		maxLength: 5
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

    const playback = {
        name: 'playback',
        label: 'Playback Controls',
        value: this.state.values.playback,
        options: [{ value: 'rewind', text: 'Rewind' }, { value: 'play', text: 'Play' }, { value: 'foward', text: 'FastForward' }],
        onUpdate: this.handleUpdate
    }

    return (
        <form noValidate style={{ marginBottom: '5em' }}>
            <div className="card card-block">
                <Input {...firstName} />
            </div>
            <div className="card card-block">
                <Textarea {...quote} />
            </div>
            <div className="card card-block">
                <Select {...color} />
            </div>
            <div className="card card-block">
                <label className="form-control-label">Pick your drink size</label>
                <div className="c-inputs-stacked" style={{ marginBottom: '-1em'}}>
                    <Radio name="drink" value="sm" text="Small" checked={this.state.values.drink === "sm"} onUpdate={this.handleUpdate} />
                    <Radio name="drink" value="md" text="Medium" checked={this.state.values.drink === "md"} onUpdate={this.handleUpdate} />
                    <Radio name="drink" value="lg" text="Large" checked={this.state.values.drink === "lg"} onUpdate={this.handleUpdate} />
                </div>
            </div>
            <div className="card card-block">
                <label className="form-control-label">Choose your best friends</label>
                <div className="c-inputs-stacked" style={{ marginBottom: '-1em'}}>
                    <Checkbox name="peeps" value="fred" text="Fred" checked={this.state.values.peeps.fred} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="james" text="James" checked={this.state.values.peeps.james} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="bill" text="Bill" checked={this.state.values.peeps.bill} onUpdate={this.handleUpdate} />
                </div>
            </div>
            <div className="card card-block">
                <RadioGroup {...playback} />
            </div>
        </form>
    )
}

function getInitialState() {
    return {
        values: {
            peeps: {}
        }
    }
}

function handleUpdate(name, value) {

    console.log('form update:', name, value)

    let state = Object.assign({}, this.state.values)

    switch (name) {

        case 'peeps':
            state.peeps[value] = !state.peeps[value]
            break;

        default:
            state[name] = value
    }

    this.setState({ values: state })
}
