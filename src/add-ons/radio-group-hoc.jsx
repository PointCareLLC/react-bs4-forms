
import React from 'react';

export default function(Component) {

	return React.createClass({
		propTypes: {
			name: React.PropTypes.string.isRequired,
			onUpdate: React.PropTypes.func.isRequired,
			options: React.PropTypes.array.isRequired,
			value: React.PropTypes.string,
			disabled: React.PropTypes.bool
		},
		render() {
			return (
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

						return <Component key={item.value} {...elProps} />;
					})}
				</div>
			);
		}
	});
}
