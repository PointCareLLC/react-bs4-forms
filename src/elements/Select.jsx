
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
    getDefaultProps,
    handleChange
})

function render() {
    return (
        <select
			id={this.props.name}
			{...this.props}
			ref='el'
			options={undefined}
			placeholder={undefined}
			onUpdate={undefined}
			onChange={this.handleChange}>
            <option value=''>{this.props.placeholder}</option>
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

function getDefaultProps() {
    return {
        placeholder: 'Select Option',
		className: 'form-control c-select'
    }
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value)
}
