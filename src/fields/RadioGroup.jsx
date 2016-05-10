
import React from 'react'
import Label from '../elements/Label.jsx'
import Fieldset from '../elements/Fieldset.jsx'
import Radio from '../elements/Radio.jsx'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        label: React.PropTypes.string.isRequired,
        options: React.PropTypes.array.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        valid: React.PropTypes.bool
    },
    render,
    shouldComponentUpdate
})

function render() {
    return (
        <Fieldset valid={this.props.valid}>
            <Label text={this.props.label} required={this.props.required} />
            <div className="c-inputs-stacked" style={{ marginBottom: '-2em'}}>
                {this.props.options.map(item => {

                    const props = {
                        name: this.props.name,
                        onUpdate: this.props.onUpdate,
                        disabled: this.props.disabled,
                        value: item.value,
                        text: item.text,
                        checked: item.value === this.props.value
                    }

                    return <Radio key={item.value} {...props} />
                })}
            </div>
        </Fieldset>
    )
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value
}
