
import React from 'react';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired
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

	const { onUpdate, valid, ...inputProps } = this.props;

	return (
        <input
			id={inputProps.name}
			type="text"
			className={getClass(valid)}
			{...inputProps}
			ref='el'
			onChange={this.handleChange}
		/>
    );
}

function handleChange() {
	this.props.onUpdate(this.props.name, this.refs.el.value);
}

function getClass(valid) {
	switch (valid) {

	case (true):
		return 'form-control form-control-success';

	case (false):
		return 'form-control form-control-danger';

	default:
		return 'form-control';
	}
}
