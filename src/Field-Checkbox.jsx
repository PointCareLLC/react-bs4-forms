
import React from 'react'
import Label from './Label.jsx'
import fieldMixin from './field-mixin.jsx'

export default React.createClass({
    mixins: [ fieldMixin ],
    propTypes: {
        options: React.PropTypes.array.isRequired
    },
    render
})

function render() {

    const elClass = this.getElClass()
    const elProps = this.getElementProps()
    const lbProps = this.getLabelProps()

    return (
        <div className={this.getGroupClass()}>
            <Label {...lbProps} />
            <div className="c-inputs-stacked">
                {
                    this.props.options.map((item, index) => {
                        return (
                            <label key={index} className="c-input c-checkbox">
                                {item.text}
                                <input type="checkbox" value={item.value} />
                                <span className="c-indicator" />
                            </label>
                        )
                    })
                }
            </div>
        </div>
    )
}
