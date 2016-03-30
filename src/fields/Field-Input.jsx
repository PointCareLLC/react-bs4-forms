
import React from 'react'
import Label from '../elements/El-Label.jsx'
import Fieldset from '../elements/El-Fieldset.jsx'
import Input from '../elements/El-Input.jsx'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        valid: React.PropTypes.bool
    },
    render,
    shouldComponentUpdate
})

function render() {

    const inputProps = {
        id: this.props.name,
        name: this.props.name,
        onUpdate: this.props.onUpdate,
        type: this.props.type,
        placeholder: this.props.placeholder,
        value: this.props.value,
        disabled: this.props.disabled
    }

    return (
        <Fieldset valid={this.props.valid}>
            <Label id={this.props.name} text={this.props.label} required={this.props.required} />
            <Input {...inputProps} />
        </Fieldset>
    )
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}
