import React from 'react';

export default React.createClass({
	propTypes: {
		valid: React.PropTypes.bool,
		size: React.PropTypes.oneOf(['sm', 'lg'])
	},
	render
});

function render() {
	return (
        <fieldset className={getClass(this.props.valid, this.props.size)}>
            {this.props.children}
        </fieldset>
    );
}

function getClass(valid, size) {

	let out;

	switch (valid) {

	case (true):
		out = 'form-group has-success';
		break;

	case (false):
		out = 'form-group has-danger';
		break;

	default:
		out = 'form-group';
	}

	return size ? `${out} form-group-${size}` : out;
}
