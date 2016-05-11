'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('../elements/Label');

var _Label2 = _interopRequireDefault(_Label);

var _Fieldset = require('../elements/Fieldset');

var _Fieldset2 = _interopRequireDefault(_Fieldset);

var _Radio = require('../elements/Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'RadioGroup',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        label: _react2.default.PropTypes.string.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        value: _react2.default.PropTypes.string,
        valid: _react2.default.PropTypes.bool
    },
    render: render,
    shouldComponentUpdate: shouldComponentUpdate
});


function render() {
    var _this = this;

    return _react2.default.createElement(
        _Fieldset2.default,
        { valid: this.props.valid },
        _react2.default.createElement(_Label2.default, {
            text: this.props.label,
            required: this.props.required
        }),
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

                return _react2.default.createElement(_Radio2.default, (0, _extends3.default)({ key: item.value }, props));
            })
        )
    );
}

function shouldComponentUpdate(nextProps) {
    return nextProps.value !== this.props.value;
}