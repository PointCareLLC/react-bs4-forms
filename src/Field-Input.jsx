
import React from 'react'
import Label from './Label.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        type: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string
    },
    getDefaultProps,
    render
})

function render() {

    const elClass = this.getElClass()
    const elProps = this.getElementProps()
    const lbProps = this.getLabelProps()

    return (
        <div className={this.getGroupClass()}>
            <Label {...lbProps} />
            <input type={this.props.type} placeholder={this.props.placeholder} className={elClass} {...elProps} />
        </div>
    )
}

function getDefaultProps() {
    return {
        value: null,
        type: 'text'
    }
}
