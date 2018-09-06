import React, { Fragment, PureComponent } from 'react';
import { InlineDateTimePicker } from 'material-ui-pickers/DateTimePicker';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export default class InlineDateTimePickerDemo extends PureComponent {
  state = {
    selectedDate: '2018-01-01T00:00:00.000Z',
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <InlineDateTimePicker
            label="Basic example"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </div>

        <div className="picker">
          <MuiPickersUtilsProvider utils={MomentUtils} locale="th" moment={moment}>
            <InlineDateTimePicker
              label="with B.E. yearOffset"
              yearOffset={543}
              pickerHeaderFormat="D MMM"
              format="dddd D MMM YY HH:mm"
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>

        <div className="picker">
          <InlineDateTimePicker
            keyboard
            label="With keyboard"
            value={selectedDate}
            onChange={this.handleDateChange}
            format="DD/MM/YYYY"
            mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
          />
        </div>
      </Fragment>
    );
  }
}
