
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired
    },
    render,
    handleChange
})

function render() {

	const { onUpdate, ...inputProps } = this.props

    return (
        <input
			id={inputProps.name}
			type="text"
			className="form-control"
			{...inputProps}
			ref='el'
			onChange={this.handleChange}
		/>
    )
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
