## T React Date Picker

A simple `React` **date-picker** component written with `styled-component` 💅 and `date-fns` 🗓.

## Props

This component accepts the following **three** props:

- **onSelect**:(fn) function that will receive the selected **date**
- **value**:(Date) The current value selected by the user
- **dateFormat**(String,optional): The specific format you would like to display the date value. The possible formats are determined by `date-fns`. [Consult their documentation for the possible formats.](https://date-fns.org/v1.29.0/docs/format) defaults to`'dddd Do [of] MMMM YYYY'` which outputs `Monday 12th of June 2018`.

### Usage

The most basic usage of this component is found below.

```javascript
import DatePicker from 't-react-date-picker';

class MyComponent extends React.Component {
  state = { value: null };

  render() {
    return (
      <DatePicker
        value={this.state.value}
        onSelect={value => this.setState({ value })}
      />
    );
  }
}
```

## Custom styles

You can override the styles to the main form field using `styled-components` in the following manner:

```javascript
import styled from 'styled-components';

import DatePicker from 't-react-date-picker';

const StyledPicker = styled(DatePicker)`
  background-color: pink;
`;


render(){
    return <StyledPicker/>
}

//renders a DatePicker with a pink background
```
