
import React from 'react'
import Label from './Label.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        options: React.PropTypes.array.isRequired,
        value: React.PropTypes.string
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
                <option value=''>select option</option>
                {
                    this.props.options.map((item, index) => {
                        return (
                            <option key={index} value={item.value}>{item.text}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}
