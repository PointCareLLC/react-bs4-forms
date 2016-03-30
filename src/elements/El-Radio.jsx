
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool
    },
    render,
    handleChange
})

function render() {

    const props = {
        ref: 'el',
        id: this.props.name,
        name: this.props.name,
        value: this.props.value,
        disabled: this.props.disabled,
        className: 'form-control c-select',
        onChange: this.handleChange
    }

    return (
        <select {...props}>
            <option value=''>{this.props.placeholder}</option>
            {this.props.options.map(item => {
                return <option key={item.value} value={item.value}>{item.text}</option>
            })}
        </select>
    )
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
