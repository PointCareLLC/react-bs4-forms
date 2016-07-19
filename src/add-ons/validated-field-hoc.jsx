
import React from 'react';
import {input as validationHelper, validationToShow, isEmpty} from '../helpers/validation';

export default function (Component) {

	return React.createClass({
		propTypes: {
			name: React.PropTypes.string.isRequired,
			onUpdate: React.PropTypes.func.isRequired,
			value: React.PropTypes.string,
			valid: React.PropTypes.bool,
			required: React.PropTypes.bool,
			validator: React.PropTypes.func
		},
		render() {

			const { onUpdate, value, validator, ...elProps } = this.props;

			return (
				<Component
					{...elProps}
					value = {this.state.value}
					valid = {validationToShow(this.state.value, this.state.valid, this.state.showValid, this.props.required)}
					onUpdate = {this.handleUpdate}
					onBlur = {this.onBlur}
					/>
			);
		},
		getDefaultProps() {
			return {
				required: false
			};
		},
		getInitialState() {
			return {
				showValid: false
			};
		},
		componentWillMount() {
			this.handleUpdate(this.props.name, this.props.value);
		},
		handleUpdate(name, value) {

			const valid = validationHelper(value, this.props.required, this.props.validator);

			const next = { value: value, valid: valid };

			const empty = isEmpty(value);

			if (this.state.showValid === false && empty === false && valid === true) {
				next.showValid = true;
			}

			this.setState(next);

			this.props.onUpdate(name, empty ? undefined : value, valid);
		},
		onBlur() {
			this.setState({ showValid: true });
			this.onBlur = () => null;
		}
	});
}
