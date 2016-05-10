'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Select',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool
    },
    render: render,
    getDefaultProps: getDefaultProps,
    handleChange: handleChange
});


function render() {

    var props = {
        ref: 'el',
        id: this.props.name,
        name: this.props.name,
        value: this.props.value,
        disabled: this.props.disabled,
        className: 'form-control c-select',
        onChange: this.handleChange
    };

    return _react2.default.createElement(
        'select',
        props,
        _react2.default.createElement(
            'option',
            { value: '' },
            this.props.placeholder
        ),
        this.props.options.map(function (item) {
            return _react2.default.createElement(
                'option',
                { key: item.value, value: item.value },
                item.text
            );
        })
    );
}

function getDefaultProps() {
    return {
        placeholder: 'Select Option'
    };
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}