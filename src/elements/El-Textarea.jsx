
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        rows: React.PropTypes.string,
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
        id: this.props.name,
        name: this.props.name,
        rows: this.props.rows,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled,
        className: 'form-control'
    }

    return (
        <textarea {...props} onChange={this.handleChange} />
    )
}

function getDefaultProps() {
    return {
        value: '',
        rows: '3',
        disabled: false
    }
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
