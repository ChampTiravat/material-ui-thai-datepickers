import _extends from "@babel/runtime/helpers/esm/extends";
import { useUtils } from '../_shared/hooks/useUtils';
import { TimePickerToolbar } from './TimePickerToolbar';
import { PureDateInput } from '../_shared/PureDateInput';
import { KeyboardDateInput } from '../_shared/KeyboardDateInput';
import { timePickerDefaultProps } from '../constants/prop-types';
import { usePickerState } from '../_shared/hooks/usePickerState';
import { pick12hOr24hFormat } from '../_helpers/text-field-helper';
import { useKeyboardPickerState } from '../_shared/hooks/useKeyboardPickerState';
import { makePickerWithState } from '../Picker/makePickerWithState';

var defaultProps = _extends({}, timePickerDefaultProps, {
  openTo: 'hours',
  views: ['hours', 'minutes']
});

function useOptions(props) {
  var utils = useUtils();
  return {
    getDefaultFormat: function getDefaultFormat() {
      return pick12hOr24hFormat(props.format, props.ampm, {
        '12h': utils.time12hFormat,
        '24h': utils.time24hFormat
      });
    }
  };
}

export var TimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: PureDateInput,
  useState: usePickerState,
  DefaultToolbarComponent: TimePickerToolbar
});
export var KeyboardTimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: KeyboardDateInput,
  useState: useKeyboardPickerState,
  DefaultToolbarComponent: TimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
TimePicker.defaultProps = defaultProps;
KeyboardTimePicker.defaultProps = defaultProps;