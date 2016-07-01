
import React from 'react';
import Label from '../elements/Label';
import Fieldset from '../elements/Fieldset';

export default function (Component) {

	return React.createClass({
		propTypes: {
			id: React.PropTypes.string,
			name: React.PropTypes.string.isRequired,
			label: React.PropTypes.string.isRequired,
			labelHide: React.PropTypes.bool,
			required: React.PropTypes.bool,
			disabled: React.PropTypes.bool,
			valid: React.PropTypes.bool,
			value: React.PropTypes.string
		},
		render() {
			return (
				<Fieldset valid={this.props.valid}>
					<Label
						id={this.props.id || this.props.name}
						text={this.props.label}
						required={this.props.required}
						hide={this.props.labelHide}
					/>
					<Component {...this.props} />
				</Fieldset>
			);
		},
		shouldComponentUpdate(nextProps) {
			return (nextProps.value !== this.props.value || nextProps.valid !== this.props.valid || nextProps.disabled !== this.props.disabled);
		}
	});
}
