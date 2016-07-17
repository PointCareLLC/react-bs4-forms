
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

	describe('onUpdate - prop.value is valid', function() {

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

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is valid & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe('1234567890');
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is undefined', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value={undefined} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});

	describe('onUpdate - prop.value is undefined & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value={undefined} required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(false);
		});
	});

	describe('onUpdate - prop.value is partial', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="123" />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(false);
		});
	});

	describe('onUpdate - prop.value is partial & prop.required is true', function() {

		beforeEach(function() {
			TestUtils.renderIntoDocument(
				<Input {...props} value="123" required={true} />
			);
		});

		it('should give expected name', function() {
			expect(updateName).toBe('phone');
		});

		it('should give expected value', function() {
			expect(updateValue).toBe(undefined);
		});

		it('should give expected valid state', function() {
			expect(updateValid).toBe(false);
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

		it('should give expected valid state', function() {
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

		it('should give expected valid state', function() {
			expect(updateValid).toBe(true);
		});
	});
});
