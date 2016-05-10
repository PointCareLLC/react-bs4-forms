
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
			ref='el'
			id={this.props.id || this.props.name}
			onChange={this.handleChange}
			{...this.props}
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
