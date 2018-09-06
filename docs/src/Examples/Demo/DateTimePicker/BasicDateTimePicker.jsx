import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

export default class BasicDateTimePicker extends PureComponent {
  state = {
    selectedDate: new Date('2018-01-01T00:00:00.000Z'),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;

    return (
      <Fragment>
        <div className="picker">
          <DateTimePicker
            value={selectedDate}
            onChange={this.handleDateChange}
            label="DateTimePicker"
          />
        </div>

        <div className="picker">
          <MuiPickersUtilsProvider utils={MomentUtils} locale="th" moment={moment}>
            <DateTimePicker
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
          <DateTimePicker
            autoOk
            ampm={false}
            disableFuture
            value={selectedDate}
            onChange={this.handleDateChange}
            label="24h clock"
          />
        </div>

        <div className="picker">
          <DateTimePicker
            value={selectedDate}
            disablePast
            onChange={this.handleDateChange}
            label="With Today Button"
            showTodayButton
          />
        </div>
      </Fragment>
    );
  }
}
