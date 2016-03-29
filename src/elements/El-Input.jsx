
import React from 'react'

export default React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool
    },
    render,
    getDefaultProps,
    handleChange
})

function render() {

    const props = {
        ref: 'el',
        id: this.props.id,
        type: this.props.type,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled,
        className: 'form-control'
    }

    return (
        <input {...props} onChange={this.handleChange} />
    )
}

function getDefaultProps() {
    return {
        value: '',
        type: 'text',
        disabled: false
    }
}

function handleChange() {
    this.props.onUpdate(this.props.id, this.refs.el.value)
}
