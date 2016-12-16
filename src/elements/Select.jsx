
import React from 'react';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		disablePlaceholder: React.PropTypes.bool,
		options: React.PropTypes.array.isRequired,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		size: React.PropTypes.oneOf(['sm', 'lg'])
	},
	render,
	handleChange
});

function render() {

	const { onUpdate, valid, placeholder, options, size, ...selectProps } = this.props;

	return (
        <select
			id={this.props.name}
			className={size ? `form-control form-control-${size} c-select` : 'form-control c-select'}
			{...selectProps}
			ref='el'
			onChange={this.handleChange}>

			<option disabled={this.props.disablePlaceholder}>{this.props.placeholder || 'Select Option'}</option>

			{this.props.options.map(item => {
				return (
					<option
						key={item.value}
						value={item.value}>
						{item.text}
					</option>
				);
			})}
		</select>
    );
}

function handleChange() {
	this.props.onUpdate(this.props.name, this.refs.el.value);
}
