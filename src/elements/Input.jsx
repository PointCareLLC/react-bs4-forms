
import React from 'react';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		size: React.PropTypes.oneOf(['sm', 'lg'])
	},
	getDefaultProps,
	render,
	handleChange
});

function getDefaultProps() {
	return {
		value: ''
	};
}

function render() {

	const { onUpdate, valid, size, ...inputProps } = this.props;

	return (
        <input
			id={inputProps.name}
			type="text"
			className={getClass(valid, size)}
			{...inputProps}
			ref='el'
			onChange={this.handleChange}
		/>
    );
}

function handleChange(event) {
	this.props.onUpdate(this.props.name, this.refs.el.value, event);
}

function getClass(valid, size) {

	let out;

	switch (valid) {

	case (true):
		out = 'form-control form-control-success';
		break;

	case (false):
		out = 'form-control form-control-danger';
		break;

	default:
		out = 'form-control';
	}

	return size ? `${out} form-control-${size}` : out;
}
