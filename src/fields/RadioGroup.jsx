import radioGroupHoc from '../add-ons/radio-group-hoc';
import fieldHoc from '../add-ons/field-hoc';
import Radio from '../elements/Radio';
import validatedFieldHoc from '../add-ons/validated-field-hoc';

export default validatedFieldHoc(fieldHoc(radioGroupHoc(Radio)));
