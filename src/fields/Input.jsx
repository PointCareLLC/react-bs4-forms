
import React from 'react';
import Label from '../elements/Label';
import Fieldset from '../elements/Fieldset';
import Input from '../elements/Input';
import {input as validationHelper, isEmpty, validationToShow} from '../helpers/validation';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
		labelHide: React.PropTypes.bool,
		value: React.PropTypes.string,
		valid: React.PropTypes.bool,
		validator: React.PropTypes.func
	},
	render,
	getDefaultProps,
	componentWillMount,
	getInitialState,
	handleUpdate,
	onBlur,
	isEmpty
});

function getDefaultProps() {
	return {
		value: ''
	};
}

function componentWillMount() {
	this.setState({valid: this.props.valid, value: this.props.value});
}

function getInitialState() {
	return {
		value: '',
		valid: false,
		didBlur: false
	};
}

function onBlur() {
	if(!this.state.didBlur) {
		this.setState( {didBlur: true });
	}
}

function render() {
	var displayValid = validationToShow(this.state.value, this.state.valid, this.state.didBlur, this.props.required);

	const { label, onUpdate, value, ...elProps } = this.props;

	return (
        <Fieldset valid={displayValid}>
            <Label
				id={this.props.id || this.props.name}
				text={label}
				required={this.props.required}
				hide={this.props.labelHide}
			/>
		<Input
			{...elProps}
			value = {this.state.value}
			onUpdate = {this.handleUpdate}
			valid = {displayValid}
			onBlur = {this.onBlur}
				/>
        </Fieldset>
    );
}

function handleUpdate(name, value) {
	var valid = validationHelper(value, this.props.required, this.props.validator);
	var newState = {
		value: value || '',
		valid: valid
	};

	this.props.onUpdate(name, (valid ? value : null), valid);
	this.setState(newState);
}
