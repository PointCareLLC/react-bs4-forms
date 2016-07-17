import Select from '../elements/Select';
import fieldHoc from '../add-ons/field-hoc';
import validatedFieldHoc from '../add-ons/validated-field-hoc';
import selectValidateHoc from '../add-ons/select-validate-hoc';

export default validatedFieldHoc(fieldHoc(selectValidateHoc(Select)));
