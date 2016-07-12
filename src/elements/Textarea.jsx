
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
		<textarea
			id={inputProps.name}
			rows="3"
			className={size ? `form-control form-control-${size}` : 'form-control'}
			{...inputProps}
			ref='el'
			onChange={this.handleChange}
		/>
    );
}

function handleChange() {
	this.props.onUpdate(this.props.name, this.refs.el.value);
}
