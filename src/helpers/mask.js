
const DIGIT = '9';
const ALPHA = 'A';
const ALPHANUM = 'S';

export function toPattern(value, opts) {

	let pattern = (typeof opts === 'object' ? opts.pattern : opts);
	let patternChars = pattern.replace(/\W/g, '');
	let output = pattern.split('');
	let values = value.toString().replace(/\W/g, '');
	let charsValues = values.replace(/\W/g, '');
	let index = 0;
	let i = null;
	let outputLength = output.length;
	let placeholder = (typeof opts === 'object' ? opts.placeholder : undefined);

	for (i = 0; i < outputLength; i++) {

		if (index >= values.length) {

			if (patternChars.length === charsValues.length) {
				return output.join('');
			}
			else if ((placeholder !== undefined) && (patternChars.length > charsValues.length)) {
				return addPlaceholdersToOutput(output, i, placeholder).join('');
			}
			else {
				break;
			}

		} else {

			if ((output[i] === DIGIT && values[index].match(/[0-9]/)) ||
				(output[i] === ALPHA && values[index].match(/[a-zA-Z]/)) ||
				(output[i] === ALPHANUM && values[index].match(/[0-9a-zA-Z]/))) {
				output[i] = values[index++];
			} else if (output[i] === DIGIT || output[i] === ALPHA || output[i] === ALPHANUM) {
				if(placeholder !== undefined){
					return addPlaceholdersToOutput(output, i, placeholder).join('');
				}
				else{
					return output.slice(0, i).join('');
				}
			}
		}
	}

	return output.join('').substr(0, i);
}

function addPlaceholdersToOutput(output, index, placeholder) {

	for (; index < output.length; index++) {
		if(output[index] === DIGIT || output[index] === ALPHA || output[index] === ALPHANUM) {
			output[index] = placeholder;
		}
	}

	return output;
}
