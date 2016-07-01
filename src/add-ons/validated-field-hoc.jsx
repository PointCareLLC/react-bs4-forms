
import React from 'react';
import {input as validationHelper, validationToShow} from '../helpers/validation';

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
			var displayValid = validationToShow(this.state.value, this.state.valid, this.state.didBlur, this.props.required);
			const { onUpdate, value, ...elProps } = this.props;

			return (
				<Component
					{...elProps}
					value = {this.state.value}
					valid = {displayValid}
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
				value: '',
				valid: false,
				didBlur: false
			};
		},
		componentWillMount() {
			this.setState({valid: this.props.valid, value: this.props.value});
		},
		handleUpdate(name, value) {
			var valid = validationHelper(value, this.props.required, this.props.validator);

			this.setState({ value: value, valid: valid });
			this.props.onUpdate(name, (valid ? value : null), valid);
		},
		onBlur() {
			if(!this.state.didBlur) {
				this.setState( {didBlur: true });
				this.handleUpdate(this.props.name, this.state.value);
			}
		}
	});
}
