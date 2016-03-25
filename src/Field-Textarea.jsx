
import React from 'react'
import fieldMixin from './field-mixin'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        placeholder: React.PropTypes.string,
        rows: React.PropTypes.string
    },
    getDefaultProps,
    render
})

function render() {

    const props = Object.assign({}, this.elementProps, {
        required: this.props.required,
        disabled: this.props.disabled,
        placeholder: this.props.placeholder,
        rows: this.props.rows,
        value: this.props.value
    })

    return (
        <div className={this.getGroupClass()}>
            <label htmlFor={props.id}>{props.label} {props.required ? '*' : undefined}</label>
            <textarea {...props} />
        </div>
    )
}

function getDefaultProps() {
    return {
        value: '',
        rows: '3'
    }
}
