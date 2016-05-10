
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired
    },
    render,
    getDefaultProps,
    handleChange
})

function render() {
    return (
        <input
			id={this.props.name}
			{...this.props}
			ref='el'
			onChange={this.handleChange}
			onUpdate={undefined}
		/>
    )
}

function getDefaultProps() {
    return {
        type: 'text',
        disabled: false,
		className: 'form-control'
    }
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
