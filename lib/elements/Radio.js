'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Radio',

    propTypes: {
        name: _react2.default.PropTypes.string.isRequired,
        onUpdate: _react2.default.PropTypes.func.isRequired,
        value: _react2.default.PropTypes.string.isRequired,
        text: _react2.default.PropTypes.string.isRequired
    },
    render: render,
    handleChange: handleChange
});


function render() {
    var _props = this.props;
    var onUpdate = _props.onUpdate;
    var text = _props.text;
    var inputProps = (0, _objectWithoutProperties3.default)(_props, ['onUpdate', 'text']);


    return _react2.default.createElement(
        'label',
        { className: 'c-input c-radio' },
        _react2.default.createElement('input', (0, _extends3.default)({
            id: inputProps.name + '-' + inputProps.value
        }, inputProps, {
            type: 'radio',
            onChange: this.handleChange
        })),
        _react2.default.createElement('span', { className: 'c-indicator' }),
        this.props.text
    );
}

function handleChange() {
    this.props.onUpdate(this.props.name, this.props.value);
}