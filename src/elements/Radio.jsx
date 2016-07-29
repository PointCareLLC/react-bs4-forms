
import React from 'react';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		value: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	},
	render,
	handleChange
});

function render() {

	const { onUpdate, text, valid, ...inputProps } = this.props;

	return (
		<label className="custom-control custom-radio">
			<input
				id={`${inputProps.name}-${inputProps.value}`}
				className="custom-control-input"
				{...inputProps}
				type='radio'
				onChange={this.handleChange}
			/>
			<span className="custom-control-indicator"></span>
			<span className="custom-control-description">{this.props.text}</span>
		</label>
    );
}

function handleChange() {
	this.props.onUpdate(this.props.name, this.props.value);
}
