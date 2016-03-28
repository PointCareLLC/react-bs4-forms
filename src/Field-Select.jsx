
import React from 'react'
import Label from './Label.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {

    },
    render
})

function render() {

    const elClass = this.getElClass() + ' c-select'
    const elProps = this.getElementProps()
    const lbProps = this.getLabelProps()

    return (
        <div className={this.getGroupClass()}>
            <Label {...lbProps} />
            <select {...elProps} className={elClass}>
              <option>Select Option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
    )
}
