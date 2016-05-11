
import React from 'react'
import Label from '../elements/Label'
import Fieldset from '../elements/Fieldset'
import Textarea from '../elements/Textarea'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
		label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string,
        valid: React.PropTypes.bool
    },
    render,
    shouldComponentUpdate
})

function render() {
    return (
		<Fieldset valid={this.props.valid}>
			<Label
				id={this.props.id || this.props.name}
				text={this.props.label}
				required={this.props.required}
			/>
			<Textarea {...this.props} />
		</Fieldset>
    )
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}
