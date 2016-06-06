import React from 'react';

export default React.createClass({
	propTypes: {
		valid: React.PropTypes.bool
	},
	render
});

function render() {
	return (
        <fieldset className={getClass(this.props.valid)}>
            {this.props.children}
        </fieldset>
    );
}

function getClass(valid) {
	switch (valid) {

	case (true):
		return 'form-group has-success';

	case (false):
		return 'form-group has-danger';

	default:
		return 'form-group';
	}
}
