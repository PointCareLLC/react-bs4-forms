
import React from 'react';

import Input from '../elements/Input';
import maskHoc from '../add-ons/input-mask-hoc';
import fieldHoc from '../add-ons/field-hoc';
import validatedFieldHoc from '../add-ons/validated-field-hoc';
import { toPattern } from '../helpers/mask';

const InputWithMask = validatedFieldHoc(fieldHoc(maskHoc(Input)));

export default React.createClass({
	propTypes: {
		mask: React.PropTypes.string.isRequired,
		maskOut: React.PropTypes.string,
		validator: React.PropTypes.func,
		value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
		onUpdate: React.PropTypes.func.isRequired
	},
	componentWillMount() {
		this.maskedValue = toPattern(this.props.value, this.props.mask);
	},
	render() {

		const {maskOut, value, onUpdate, ...elProps} = this.props;

		return (
			<InputWithMask {...elProps} validator={this.validator} value={this.maskedValue} onUpdate={this.handleUpdate} />
		);
	},
	validator(v) {

		if (this.props.mask.length === v.length) {
			return this.props.validator ? this.props.validator(v) : true;
		}

		return false;
	},
	handleUpdate(name, value, valid) {

		this.maskedValue = value;

		let outValue = this.props.maskOut ? toPattern(value, this.props.maskOut) : value;

		return this.props.onUpdate(name, outValue, valid);
	}
});
