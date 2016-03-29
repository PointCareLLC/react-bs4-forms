
import React from 'react'
import Label from './Label.jsx'
import RadioItem from './Field-Radio-item.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        options: React.PropTypes.array.isRequired
    },
    render
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
                            value: item.value,
                            text: item.text,
                            checked: self.props.value === item.value,
                            handleUpdate: self.handleElChange
                        }

                        return (
                            <RadioItem key={item.value} {...itemProps} />
                        )
                    })
                }
            </div>
        </fieldset>
    )
}
