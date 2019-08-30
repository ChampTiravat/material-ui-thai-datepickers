import _extends from "@babel/runtime/helpers/esm/extends";
import { useUtils } from '../_shared/hooks/useUtils';
import { DatePickerToolbar } from './DatePickerToolbar';
import { PureDateInput } from '../_shared/PureDateInput';
import { getFormatByViews } from '../_helpers/date-utils';
import { KeyboardDateInput } from '../_shared/KeyboardDateInput';
import { usePickerState } from '../_shared/hooks/usePickerState';
import { datePickerDefaultProps } from '../constants/prop-types';
import { useKeyboardPickerState } from '../_shared/hooks/useKeyboardPickerState';
import { makePickerWithState } from '../Picker/makePickerWithState';

var defaultProps = _extends({}, datePickerDefaultProps, {
  openTo: 'date',
  views: ['year', 'date']
});

function useOptions(props) {
  var utils = useUtils();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return getFormatByViews(props.views, utils);
    }
  };
}

export var DatePicker = makePickerWithState({
  useOptions: useOptions,
  Input: PureDateInput,
  useState: usePickerState,
  DefaultToolbarComponent: DatePickerToolbar
});
export var KeyboardDatePicker = makePickerWithState({
  useOptions: useOptions,
  Input: KeyboardDateInput,
  useState: useKeyboardPickerState,
  DefaultToolbarComponent: DatePickerToolbar
});
DatePicker.defaultProps = defaultProps;
KeyboardDatePicker.defaultProps = defaultProps;