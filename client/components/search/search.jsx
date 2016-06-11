import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Search Here"
          hintText="Ex Chuck Schumer or New York"
          floatingLabelFixed={true}
        />
        <RadioButtonGroup name="searchType" defaultSelected="state">
          <RadioButton
            value="state"
            label="State"
          />
          <RadioButton
            value="name"
            label="Name"
          />
        </RadioButtonGroup>
      </div>
    );
  }
}

export default Search;

/*
2 options to search by
state and name

*/
