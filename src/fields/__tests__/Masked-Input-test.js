
jest.disableAutomock();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Input from '../Masked-Input';

describe('field/Masked-Input', () => {

	var props = null;
	var updateName = null;
	var updateValue = null;
	var updateValid = null;

	beforeEach(function() {

		props = {
			name: 'phone',
			label: 'Phone',
			value: '(123) 456-7890',
			mask: '(999) 999-9999',
			maskOut: '9999999999',
			onUpdate: (name, value, valid) => {
				updateName = name;
				updateValue = value;
				updateValid = valid;
			}
		};

		updateName = null;
		updateValue = null;
		updateValid = null;
	});

	describe('onUpdate componentWillMount', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('1234567890');
		});

		it('should give expected valid', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate componentWillMount with not props.maskOut', function() {

		beforeEach(function() {

			props.maskOut = null;

			TestUtils.renderIntoDocument(
				<Input {...props} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('(123) 456-7890');
		});

		it('should give expected valid', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate from change', function() {

		beforeEach(function() {

			var input = TestUtils.renderIntoDocument(
				<Input {...props} />
			);

			var inputNode = ReactDOM.findDOMNode(input);

			TestUtils.Simulate.change(inputNode);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('1234567890');
		});

		it('should give expected valid', function() {
			expect(updateValid).toBe(true);
		});
	});
});
