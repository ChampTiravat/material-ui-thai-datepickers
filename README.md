# Material-UI Thai datepickers
This package is forked from [material-ui-pickers](https://www.npmjs.com/package/material-ui-pickers)
[![npm package](https://img.shields.io/npm/v/material-ui-thai-datepickers.svg)](https://www.npmjs.org/package/material-ui-thai-datepickers)
[![npm download](https://img.shields.io/npm/dm/material-ui-thai-datepickers.svg)](https://www.npmjs.org/package/material-ui-thai-datepickers)
[![npm package](https://img.shields.io/npm/types/material-ui-thai-datepickers.svg)](https://www.npmjs.org/package/material-ui-thai-datepickers)
> Components, that implements material design date and time pickers for material-ui v1

##### Addtional configurations
* **yearOffset** for adding display year from relative CE
* **pickerHeaderFormat** for customizing format to pickerHeader

### Installation
Available as npm package.
```sh
npm i material-ui-thai-datepickers
```

Then teach pickers to use `moment` with `MuiPickerUtilsProvider`.
```sh
npm i moment
```

```jsx
import MomentUtils from 'material-ui-thai-datepickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-thai-datepickers/utils/MuiPickersUtilsProvider';
import moment from 'moment';
import 'moment/locale/th';

moment.locale('th');

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils} locale='th' moment={moment}>
      <DatePicker
        label='with B.E. yearOffset'
        yearOffset={543}
        pickerHeaderFormat='ddd D MMM'
        format='dddd D MMMM YYYY'
      />
    </MuiPickersUtilsProvider>
  );
}

render(<App />, document.querySelector('#app'));
```

And the last step of installation would be an icon font. By default, we are relying on material-icons font, but it's possible to override any icons with the help of corresponding props.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Documentation
Check out the material-ui-pickers original [documentation website](https://material-ui-pickers.firebaseapp.com/)

## material-ui-pickers
Check out the [material-ui-pickers](https://github.com/dmtrKovalenko/material-ui-pickers/releases)

### LICENSE
The project is licensed under the terms of [MIT license](https://github.com/dmtrKovalenko/material-ui-pickers/blob/master/LICENSE)
