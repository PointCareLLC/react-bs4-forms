
import React from 'react'

export default React.createClass({
    propTypes: {
        value: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        handleUpdate: React.PropTypes.func.isRequired
    },
    render,
    handleChange
})

function render() {
    return (
        <option value={this.props.value}>{this.props.text}</option>
    )
}

function handleChange() {
    this.props.handleUpdate(null, this.props.value)
}
