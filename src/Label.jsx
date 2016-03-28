
import React from 'react'

export default React.createClass({
    propTypes: {
        forEl: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        required: React.PropTypes.bool
    },
    render
})

function render() {
    return (
        <label htmlFor={this.props.forEl}>{this.props.text} {this.props.required ? '*' : undefined}</label>
    )
}
