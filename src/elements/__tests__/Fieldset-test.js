
jest.unmock('../Fieldset');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Fieldset from '../Fieldset';

describe('fields/Input', () => {

	var props = null;

	beforeEach(function() {
		props = {
			valid: undefined
		};
	});

	it('should render with expected className when props.valid is undefined', () => {

		var input = TestUtils.renderIntoDocument(
			<Fieldset {...props} />
		);

		var inputNode = ReactDOM.findDOMNode(input);

		expect(inputNode.className).toEqual('form-group');
	});

	it('should render with expected className when props.valid is true', () => {

		props.valid = true;

		var input = TestUtils.renderIntoDocument(
			<Fieldset {...props} />
		);

		var inputNode = ReactDOM.findDOMNode(input);

		expect(inputNode.className).toEqual('form-group has-success');
	});

	it('should render with expected className when props.valid is false', () => {

		props.valid = false;

		var input = TestUtils.renderIntoDocument(
			<Fieldset {...props} />
		);

		var inputNode = ReactDOM.findDOMNode(input);

		expect(inputNode.className).toEqual('form-group has-danger');
	});
});
