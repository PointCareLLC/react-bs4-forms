'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ElLabel = require('../elements/Label.jsx');

var _ElLabel2 = _interopRequireDefault(_ElLabel);

var _ElFieldset = require('../elements/Fieldset.jsx');

var _ElFieldset2 = _interopRequireDefault(_ElFieldset);

var _ElRadio = require('../elements/Radio.jsx');

var _ElRadio2 = _interopRequireDefault(_ElRadio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'RadioGroup',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        label: _react2.default.PropTypes.string.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        placeholder: _react2.default.PropTypes.string,
        value: _react2.default.PropTypes.string,
        disabled: _react2.default.PropTypes.bool,
        valid: _react2.default.PropTypes.bool
    },
    render: render,
    shouldComponentUpdate: shouldComponentUpdate
});


function render() {
    var _this = this;

    return _react2.default.createElement(
        _ElFieldset2.default,
        { valid: this.props.valid },
        _react2.default.createElement(_ElLabel2.default, { text: this.props.label, required: this.props.required }),
        _react2.default.createElement(
            'div',
            { className: 'c-inputs-stacked', style: { marginBottom: '-2em' } },
            this.props.options.map(function (item) {

                var props = {
                    name: _this.props.name,
                    onUpdate: _this.props.onUpdate,
                    disabled: _this.props.disabled,
                    value: item.value,
                    text: item.text,
                    checked: item.value === _this.props.value
                };

                return _react2.default.createElement(_ElRadio2.default, _extends({ key: item.value }, props));
            })
        )
    );
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
}