
jest.unmock('../Label');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Label from '../Label';

describe('fields/Input', () => {

	var props = null;

	beforeEach(function() {
		props = {
			id: 'firstname',
			text: 'First Name',
			required: false,
			hide: false
		};
	});

	it('should render label with expected text', () => {

		var input = TestUtils.renderIntoDocument(
			<Label {...props} />
		);

		var inputNode = ReactDOM.findDOMNode(input);

		expect(inputNode.textContent).toEqual('First Name ');
	});

	it('should have expected className', () => {

		var input = TestUtils.renderIntoDocument(
			<Label {...props} />
		);

		var inputNode = ReactDOM.findDOMNode(input);

		expect(inputNode.className).toEqual('form-control-label ');
	});

	describe('prop.required is true', function() {

		beforeEach(function() {
			props.required = true;
		});

		it('should render label with expected text', () => {

			var input = TestUtils.renderIntoDocument(
				<Label {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.textContent).toEqual('First Name *');
		});
	});

	describe('prop.hide is true', function() {

		beforeEach(function() {
			props.hide = true;
		});

		it('should render label with expected text', () => {

			var input = TestUtils.renderIntoDocument(
				<Label {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.textContent).toEqual('First Name ');
		});

		it('should have expected className', () => {

			var input = TestUtils.renderIntoDocument(
				<Label {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			expect(inputNode.className).toEqual('form-control-label sr-only');
		});
	});
});
