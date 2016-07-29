
import React from 'react';

import { Radio, Checkbox, Input, Textarea, Select, MaskedInput } from '../../src';

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
		required: true,
		size: 'sm'
	};

	const lastName = {
		name: 'lastname',
		label: 'Last Name',
		placeholder: 'Last Name',
		onUpdate: this.handleUpdate,
		required: false,
		validator: (v) => v === 'James'
	};

	const ssn = {
		name: 'ssn',
		label: 'SSN',
		placeholder: '123-45-6789',
		onUpdate: this.handleUpdate,
		required: true,
		value: this.state.ssn,
		mask: '999-99-9999',
		maskOut: '999999999'
	};

	const phone = {
		name: 'phone',
		label: 'Phone',
		placeholder: '(123) 456-7890',
		onUpdate: this.handleUpdate,
		required: true,
		value: this.state.phone,
		mask: '(999) 999-9999',
		maskOut: '9999999999'
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

	return (
        <form noValidate style={{ marginBottom: '5em' }}>
            <div className="card card-block">
                <Input {...firstName} />
            </div>
			<div className="card card-block">
				<Input {...lastName} />
			</div>
			<div className="card card-block">
				<MaskedInput {...ssn} />
			</div>
			<div className="card card-block">
				<MaskedInput {...phone} />
			</div>
            <div className="card card-block">
                <Textarea {...quote} />
            </div>
            <div className="card card-block">
                <Select {...color} />
            </div>
            <div className="card card-block">
                <label className="form-control-label">Pick your drink size</label>
				<div className="c-inputs-stacked">
					<Radio name="drink" value="sm" text="Small" checked={this.state.drink === 'sm'} onUpdate={this.handleUpdate} />
					<Radio name="drink" value="md" text="Medium" checked={this.state.drink === 'md'} onUpdate={this.handleUpdate} />
					<Radio name="drink" value="lg" text="Large" checked={this.state.drink === 'lg'} onUpdate={this.handleUpdate} />
				</div>
            </div>
            <div className="card card-block">
                <label className="form-control-label">Choose your best friends</label>
                <div className="c-inputs-stacked">
                    <Checkbox name="peeps" value="fred" text="Fred" checked={this.state.peeps.fred} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="james" text="James" checked={this.state.peeps.james} onUpdate={this.handleUpdate} />
                    <Checkbox name="peeps" value="bill" text="Bill" checked={this.state.peeps.bill} onUpdate={this.handleUpdate} />
                </div>
            </div>
        </form>
    );
}

function getInitialState() {
	return {
		peeps: {},
		favcolor: 'black'
	};
}

function handleUpdate(name, value) {

	console.log(`field update -> ${name}: ${value}`);

	this.setState({ [name]: value });
}
