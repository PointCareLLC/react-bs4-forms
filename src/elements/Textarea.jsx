
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

	const { onUpdate, ...inputProps } = this.props;

	return (
		<textarea
			id={inputProps.name}
			rows="3"
			className="form-control"
			{...inputProps}
			ref='el'
			onChange={this.handleChange}
		/>
    );
}

function handleChange() {
	this.props.onUpdate(this.props.name, this.refs.el.value);
}
