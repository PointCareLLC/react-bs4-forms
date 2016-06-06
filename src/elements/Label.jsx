
import React from 'react';

export default React.createClass({
	propTypes: {
		id: React.PropTypes.string,
		text: React.PropTypes.string.isRequired,
		required: React.PropTypes.bool
	},
	render
});

function render() {
	return (
        <label htmlFor={this.props.id} className="form-control-label">{this.props.text} {this.props.required ? '*' : undefined}</label>
    );
}
