
import React from 'react'

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onUpdate: React.PropTypes.func.isRequired,
        options: React.PropTypes.array.isRequired,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string
    },
    render,
    handleChange
})

function render() {

	const { onUpdate, placeholder, options, ...selectProps } = this.props

    return (
        <select
			id={this.props.name}
			className="form-control c-select"
			{...selectProps}
			ref='el'
			onChange={this.handleChange}>
            <option value=''>{this.props.placeholder || 'Select Option'}</option>
            {this.props.options.map(item => {
                return (
					<option
						key={item.value}
						value={item.value}>
						{item.text}
					</option>
				)
            })}
        </select>
    )
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
