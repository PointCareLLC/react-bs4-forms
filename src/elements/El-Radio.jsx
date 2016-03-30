
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        value: React.PropTypes.string.isRequired,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool
    },
    render,
    handleChange
})

function render() {

    const props = {
        id: this.props.name,
        name: this.props.name,
        type: 'radio',
        checked: this.props.checked,
        disabled: this.props.disabled,
        onChange: this.handleChange
    }

    return (
        <label className="c-input c-radio">
          <input {...props} />
          <span className="c-indicator"></span>
          {this.props.text}
        </label>
    )
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.props.value)
}
