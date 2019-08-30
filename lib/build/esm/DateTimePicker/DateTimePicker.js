import _extends from "@babel/runtime/helpers/esm/extends";
import { useUtils } from '../_shared/hooks/useUtils';
import { PureDateInput } from '../_shared/PureDateInput';
import { DateTimePickerToolbar } from './DateTimePickerToolbar';
import { KeyboardDateInput } from '../_shared/KeyboardDateInput';
import { usePickerState } from '../_shared/hooks/usePickerState';
import { pick12hOr24hFormat } from '../_helpers/text-field-helper';
import { dateTimePickerDefaultProps } from '../constants/prop-types';
import { useKeyboardPickerState } from '../_shared/hooks/useKeyboardPickerState';
import { makePickerWithState } from '../Picker/makePickerWithState';

var defaultProps = _extends({}, dateTimePickerDefaultProps, {
  wider: true,
  orientation: 'portrait',
  openTo: 'date',
  views: ['year', 'date', 'hours', 'minutes']
});

function useOptions(props) {
  var utils = useUtils();

  if (props.orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return {
    getDefaultFormat: function getDefaultFormat() {
      return pick12hOr24hFormat(props.format, props.ampm, {
        '12h': utils.dateTime12hFormat,
        '24h': utils.dateTime24hFormat
      });
    }
  };
}

export var DateTimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: PureDateInput,
  useState: usePickerState,
  DefaultToolbarComponent: DateTimePickerToolbar
});
export var KeyboardDateTimePicker = makePickerWithState({
  useOptions: useOptions,
  Input: KeyboardDateInput,
  useState: useKeyboardPickerState,
  DefaultToolbarComponent: DateTimePickerToolbar,
  getCustomProps: function getCustomProps(props) {
    return {
      refuse: props.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
DateTimePicker.defaultProps = defaultProps;
KeyboardDateTimePicker.defaultProps = defaultProps;