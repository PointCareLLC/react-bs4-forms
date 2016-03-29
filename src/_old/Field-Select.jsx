
import React from 'react'
import Label from './Label.jsx'
import SelectItem from './Field-Select-Item.jsx'
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

    const self = this
    const elClass = this.getElClass() + ' c-select'
    const elProps = this.getElementProps()
    const lbProps = this.getLabelProps()

    return (
        <div className={this.getGroupClass()}>
            <Label {...lbProps} />
            <select {...elProps} className={elClass}>
                <option value=''>select option</option>
                {this.props.options.map(item => {
                    return <SelectItem key={item.value} value={item.value} text={item.text} handleUpdate={self.handleElChange}/>
                })}
            </select>
        </div>
    )
}
