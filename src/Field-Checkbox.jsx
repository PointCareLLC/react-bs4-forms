
import React from 'react'
import Label from './Label.jsx'
import CheckboxItem from './Field-Checkbox-Item.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        options: React.PropTypes.array.isRequired,
        value: React.PropTypes.object
    },
    render,
    getDefaultProps,
    handleUpdate
})

function render() {

    const self = this
    const lbProps = this.getLabelProps()

    return (
        <fieldset className={this.getGroupClass()}>
            <Label {...lbProps} />
            <div className="c-inputs-stacked">
                {
                    this.props.options.map(item => {

                        const itemProps = {
                            id: item.id,
                            text: item.text,
                            checked: self.props.value[item.id],
                            handleUpdate: self.handleUpdate
                        }

                        return (
                            <CheckboxItem key={item.id} {...itemProps} />
                        )
                    })
                }
            </div>
        </fieldset>
    )
}

function getDefaultProps() {
    return {
        value: {}
    }
}

function handleUpdate(id, value) {
    let values = Object.assign({}, this.props.value)
    values[id] = value
    this.handleElChange(null, values)
}
