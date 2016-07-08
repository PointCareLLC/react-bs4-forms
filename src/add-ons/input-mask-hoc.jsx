
import React from 'react';
import { toPattern } from '../helpers/mask';

export default function (format, Component) {

	return React.createClass({
		propTypes: {
			onUpdate: React.PropTypes.func
		},
		componentDidUpdate() {

			if (this.nextInputTarget) {
				this.nextInputTarget.selectionEnd = this.nextSectionEnd;
			}
		},
		render() {

			const { onUpdate, ...elProps} = this.props;

			return (
				<Component {...elProps} onUpdate={this.onUpdate} />
			);
		},
		onUpdate(name, value, event) {

			this.nextSectionEnd = event.target.selectionEnd;

			this.nextInputTarget = this.nextSectionEnd === value.length ? null : event.target;

			return this.props.onUpdate(name, toPattern(value || '', format));
		}
	});
}
