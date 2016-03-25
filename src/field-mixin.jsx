
import React from 'react'
import { emptyCheck, validCheck } from './value-checkers'

export default {
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string,
        required: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        defaultValue: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
        value: React.PropTypes.oneOfType([ React.PropTypes.string, React.PropTypes.number ]),
        validation: React.PropTypes.func,
        displayValidation: React.PropTypes.bool
    },
    getDefaultProps,
    isValid,
    getGroupClass,
    getElementProps,
    handleChange,
    shouldComponentUpdate
}

function getDefaultProps() {
    return {
        required: false,
        disabled: false,
        displayValidation: true
    }
}

function getElementProps() {
    return {
        ref: 'fieldEl',
        id: this.props.name,
        name: this.props.name,
        required: this.props.required,
        disabled: this.props.disabled,
        defaultValue: this.props.defaultValue,
        value: this.props.value,
        onChange: this.handleChange,
        className: 'form-control'
    }
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.fieldEl.value, this.isValid(this.refs.fieldEl.value))
}

function isValid(value) {
    return validCheck(value || this.props.value, this.props.required, this.props.validation)
}

function getGroupClass() {
    if (this.props.displayValidation === false) return
    if (this.isValid() === false) return 'form-group has-danger'
    return emptyCheck(this.props.value) ? 'form-group' : 'form-group has-success'
}
