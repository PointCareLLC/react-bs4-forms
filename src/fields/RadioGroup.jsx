
import React from 'react';
import Label from '../elements/Label';
import Fieldset from '../elements/Fieldset';
import Radio from '../elements/Radio';

export default React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
		onUpdate: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
		options: React.PropTypes.array.isRequired,
		value: React.PropTypes.string,
		valid: React.PropTypes.bool
	},
	render,
	shouldComponentUpdate
});

function render() {
	return (
        <Fieldset valid={this.props.valid}>
            <Label
				text={this.props.label}
				required={this.props.required}
			/>
            <div className="c-inputs-stacked" style={{ marginBottom: '-2em'}}>
				{this.props.options.map(item => {

					const elProps = {
						name: this.props.name,
						onUpdate: this.props.onUpdate,
						disabled: this.props.disabled,
						value: item.value,
						text: item.text,
						checked: item.value === this.props.value
					};

					return <Radio key={item.value} {...elProps} />;
				})}
            </div>
        </Fieldset>
    );
}

function shouldComponentUpdate(nextProps) {
	return nextProps.value !== this.props.value;
}
