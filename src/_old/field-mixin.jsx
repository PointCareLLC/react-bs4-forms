
import React from 'react'

export default {
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string,
        required: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        valid: React.PropTypes.bool,
        handleChange: React.PropTypes.func.isRequired,
        size: React.PropTypes.string
    },
    getDefaultProps,
    shouldComponentUpdate,
    handleElChange,
    getElementProps,
    getLabelProps,
    getElClass,
    getGroupClass
}

function getDefaultProps() {
    return {
        required: false,
        disabled: false
    }
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}

function handleElChange(event, value) {
    this.props.handleChange(this.props.name, value || this.refs.fieldEl.value)
}

function getElementProps() {
    return {
        ref: 'fieldEl',
        id: this.props.name,
        name: this.props.name,
        required: this.props.required,
        disabled: this.props.disabled,
        value: this.props.value,
        onChange: this.handleElChange
    }
}

function getLabelProps() {
    return {
        forEl: this.props.name,
        text: this.props.label,
        required: this.props.required
    }
}

function getElClass() {
    switch (this.props.size) {

        case ('sm'):
            return 'form-control form-control-sm'

        case ('lg'):
            return 'form-control form-control-lg'

        default:
            return 'form-control'
    }
}

function getGroupClass() {
    switch (this.props.valid) {

        case (true):
            return 'form-group has-success'

        case (false):
            return 'form-group has-danger'

        default:
            return 'form-group'
    }
}
