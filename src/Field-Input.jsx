
import React from 'react'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string
    },
    getDefaultProps,
    render
})

function render() {

    const props = Object.assign({}, this.elementProps, {
        type: this.props.type,
        required: this.props.required,
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        value: this.props.value
    })

    return (
        <div className={this.getGroupClass()}>
            <label htmlFor={props.id}>{props.label} {props.required ? '*' : undefined}</label>
            <input {...props} />
        </div>
    )
}

function getDefaultProps() {
    return {
        value: '',
        type: 'text'
    }
}
