'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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
        value: _react2.default.PropTypes.string
    },
    render: render,
    getDefaultProps: getDefaultProps,
    handleChange: handleChange
});


function render() {
    return _react2.default.createElement(
        'select',
        (0, _extends3.default)({
            id: this.props.name
        }, this.props, {
            ref: 'el',
            options: undefined,
            placeholder: undefined,
            onUpdate: undefined,
            onChange: this.handleChange }),
        _react2.default.createElement(
            'option',
            { value: '' },
            this.props.placeholder
        ),
        this.props.options.map(function (item) {
            return _react2.default.createElement(
                'option',
                {
                    key: item.value,
                    value: item.value },
                item.text
            );
        })
    );
}

function getDefaultProps() {
    return {
        placeholder: 'Select Option',
        className: 'form-control c-select'
    };
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.refs.el.value);
}