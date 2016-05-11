
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired
    },
    render,
    handleChange
})

function render() {

	const { onUpdate, text, ...inputProps } = this.props

    return (
		<label className="c-input c-radio">
			<input
				id={`${inputProps.name}-${inputProps.value}`}
				{...inputProps}
				type='radio'
				onChange={this.handleChange}
			/>
			<span className="c-indicator"></span>
			{this.props.text}
		</label>
    )
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.props.value)
}
