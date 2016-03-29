
import React from 'react'

export default React.createClass({
    propTypes: {
        value: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        handleUpdate: React.PropTypes.func.isRequired
    },
    render,
    getDefaultProps,
    handleChange
})

function render() {
    return (
        <label className="c-input c-radio">
            {this.props.text}
            <input type="radio" checked={this.props.checked} onChange={this.handleChange} />
            <span className="c-indicator" />
        </label>
    )
}

function getDefaultProps() {
    return {
        checked: false
    }
}

function handleChange() {
    this.props.handleUpdate(null, this.props.value)
}
