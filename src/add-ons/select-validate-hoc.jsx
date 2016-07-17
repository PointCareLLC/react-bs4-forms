import React from 'react';

export default function(Component) {

	return React.createClass({
		propTypes: {
			name: React.PropTypes.string,
			onUpdate: React.PropTypes.func.isRequired,
			options: React.PropTypes.array.isRequired,
			value: React.PropTypes.string
		},
		componentWillMount() {

			if (this.props.value === undefined) {
				return;
			}

			let pick = this.props.options.filter(item => {
				return item.value === this.props.value;
			})[0];

			if (!pick) {
				this.props.onUpdate(this.props.name, undefined);
			}
		},
		render() {
			return <Component {...this.props} onUpdate={this.handleUpdate} />;
		},
		handleUpdate(name, value) {

			let pick = this.props.options.filter(item => {
				return item.value === value;
			})[0];

			this.props.onUpdate(name, pick ? value : undefined);
		}
	});
}
