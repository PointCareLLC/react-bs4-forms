
import React from 'react';

import { Radio, Checkbox, RadioGroup, Input, Textarea, Select } from '../../src';

export default React.createClass({
	render,
	getInitialState,
	handleUpdate
});

function render() {

	const firstName = {
		name: 'firstname',
		label: 'First Name',
		placeholder: 'First Name',
		onUpdate: this.handleUpdate,
		required: true
	};

	const lastName = {
		name: 'lastname',
		label: 'Last Name',
		placeholder: 'Last Name',
		onUpdate: this.handleUpdate,
		required: false,
		validator: (v) => v === 'James'
	};

	const quote = {
		name: 'favquote',
		label: 'Favorite Quote',
		placeholder: 'Favorite Quote',
		value: this.state.favquote,
		labelHide: false,
		required: true,
		onUpdate: this.handleUpdate
	};

	const color = {
		name: 'favcolor',
		label: 'Favorite Color',
		placeholder: 'Choose a color',
		value: this.state.favcolor,
		options: [{ value: 'red', text: 'Red' }, { value: 'blue', text: 'Blue' }, { value: 'green', text: 'Green' }],
		onUpdate: this.handleUpdate
	};

	const playback = {
		name: 'playback',
		label: 'Playback Controls',
		value: this.state.playback,
		options: [{ value: 'rewind', text: 'Rewind' }, { value: 'play', text: 'Play' }, { value: 'forward', text: 'FastForward' }],
		onUpdate: this.handleUpdate
	};

	return (
        <form noValidate style={{ marginBottom: '5em' }}>

			<Input
					className = 'address1'
					name = 'address1'
					label = 'Street Address'
					placeholder = 'Street Address'
					onUpdate = {this.handleUpdate}
					required = {true}
					labelHide = {true}
				/>


            <div className="card card-block">
                <Input {...firstName} />
            </div>
			<div className="card card-block">
				<Input {...lastName} />
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
					<Radio name="drink" value="sm" text="Small" checked={this.state.drink === 'sm'} onUpdate={this.handleUpdate} />
					<Radio name="drink" value="md" text="Medium" checked={this.state.drink === 'md'} onUpdate={this.handleUpdate} />
					<Radio name="drink" value="lg" text="Large" checked={this.state.drink === 'lg'} onUpdate={this.handleUpdate} />
				</div>
            </div>
            <div className="card card-block">
                <label className="form-control-label">Choose your best friends</label>
                <div className="c-inputs-stacked" style={{ marginBottom: '-1em'}}>
                    <Checkbox name="peeps" value="fred" text="Fred" checked={this.state.peeps.fred} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="james" text="James" checked={this.state.peeps.james} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="bill" text="Bill" checked={this.state.peeps.bill} onUpdate={this.handleUpdate} />
                </div>
            </div>
            <div className="card card-block">
                <RadioGroup {...playback} />
            </div>
        </form>
    );
}

function getInitialState() {
	return {
		peeps: {}
	};
}

function handleUpdate(name, value) {

	console.log(`field update -> ${name}: ${value}`);

	this.setState({ [name]: value });
}
