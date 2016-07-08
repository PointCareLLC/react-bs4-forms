
import React from 'react';

import Input from '../elements/Input';
import maskHoc from '../add-ons/input-mask-hoc';
import fieldHoc from '../add-ons/field-hoc';
import validatedFieldHoc from '../add-ons/validated-field-hoc';

const InputWithMask = validatedFieldHoc(fieldHoc(maskHoc(Input)));

export default React.createClass({
	propTypes: {
		mask: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<InputWithMask {...this.props} validator={this.validator} />
		);
	},
	validator(v) {
		return this.props.mask.length === v.length;
	}
});
