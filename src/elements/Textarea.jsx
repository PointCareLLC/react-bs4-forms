
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
		<textarea
			id={this.props.name}
			{...this.props}
			ref='el'
			onUpdate={undefined}
			onChange={this.handleChange}
		/>
    )
}

function getDefaultProps() {
    return {
        rows: '3',
        disabled: false,
		className: 'form-control'
    }
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
