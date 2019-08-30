import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import * as React from 'react';
import clsx from 'clsx';
import Calendar from '../views/Calendar/Calendar';
import { useUtils } from '../_shared/hooks/useUtils';
import { useViews } from '../_shared/hooks/useViews';
import { ClockView } from '../views/Clock/ClockView';
import { makeStyles } from '@material-ui/core/styles';
import { YearSelection } from '../views/Year/YearView';
import { MonthSelection } from '../views/Month/MonthView';
import { useIsLandscape } from '../_shared/hooks/useIsLandscape';
import { datePickerDefaultProps } from '../constants/prop-types';
import { DIALOG_WIDTH_WIDER, DIALOG_WIDTH, VIEW_HEIGHT } from '../constants/dimensions';
var viewsMap = {
  year: YearSelection,
  month: MonthSelection,
  date: Calendar,
  hours: ClockView,
  minutes: ClockView,
  seconds: ClockView
};
var useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    minHeight: VIEW_HEIGHT,
    minWidth: DIALOG_WIDTH,
    maxWidth: DIALOG_WIDTH_WIDER,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
export var Picker = function Picker(_ref) {
  var date = _ref.date,
      views = _ref.views,
      disableToolbar = _ref.disableToolbar,
      onChange = _ref.onChange,
      openTo = _ref.openTo,
      unparsedMinDate = _ref.minDate,
      unparsedMaxDate = _ref.maxDate,
      ToolbarComponent = _ref.ToolbarComponent,
      orientation = _ref.orientation,
      rest = _objectWithoutProperties(_ref, ["date", "views", "disableToolbar", "onChange", "openTo", "minDate", "maxDate", "ToolbarComponent", "orientation"]);

  var utils = useUtils();
  var classes = useStyles();
  var isLandscape = useIsLandscape(orientation);

  var _useViews = useViews(views, openTo, onChange),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  var minDate = React.useMemo(function () {
    return utils.date(unparsedMinDate);
  }, [unparsedMinDate, utils]);
  var maxDate = React.useMemo(function () {
    return utils.date(unparsedMaxDate);
  }, [unparsedMaxDate, utils]);
  return React.createElement("div", {
    className: clsx(classes.container, isLandscape && classes.containerLandscape)
  }, !disableToolbar && React.createElement(ToolbarComponent, _extends({}, rest, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView
  })), React.createElement("div", {
    className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, openView === 'year' && React.createElement(YearSelection, _extends({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'month' && React.createElement(MonthSelection, _extends({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), openView === 'date' && React.createElement(Calendar, _extends({}, rest, {
    date: date,
    onChange: handleChangeAndOpenNext,
    minDate: minDate,
    maxDate: maxDate
  })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && React.createElement(ClockView, _extends({}, rest, {
    date: date,
    type: openView,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  }))));
};
Picker.defaultProps = _extends({}, datePickerDefaultProps, {
  views: Object.keys(viewsMap)
});