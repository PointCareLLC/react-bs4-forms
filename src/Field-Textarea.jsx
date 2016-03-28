
import React from 'react'
import Label from './Label.jsx'
import fieldMixin from './field-mixin.jsx'

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

    const elProps = this.getElementProps()
    const lbProps = this.getLabelProps()

    return (
        <div className={this.getGroupClass()}>
            <Label {...lbProps} />
            <textarea rows={this.props.rows} placeholder={this.props.placeholder} {...elProps} />
        </div>
    )
}

function getDefaultProps() {
    return {
        value: null,
        rows: '3'
    }
}
