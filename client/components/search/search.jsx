import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';

const style = {
  width: '376px',
};

// style sets the width of the form
// need to figure out how to make it responsive

class Search extends React.Component {
  render() {
    return (
      <div>
        <h1 className="row center-text">Search Through Members of the US Government</h1>
        <div className="right-push">
          <TextField
            floatingLabelText="Search Here"
            hintText="Ex Chuck Schumer or New York"
            floatingLabelFixed={true}
            className="row"
            style={style}
          />
          <RadioButtonGroup name="searchType" defaultSelected="state" className="row">
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
      </div>
    );
  }
}

export default Search;

/*
2 options to search by
state and name

*/
