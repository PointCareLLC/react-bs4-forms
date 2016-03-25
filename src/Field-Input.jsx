
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

    const elProps = this.getElementProps()

    return (
        <div className={this.getGroupClass()}>
            <label htmlFor={elProps.id}>{this.props.label} {this.props.required ? '*' : undefined}</label>
            <input type={this.props.type} placeholder={this.props.placeholder} {...elProps} />
        </div>
    )
}

function getDefaultProps() {
    return {
        value: null,
        type: 'text'
    }
}
