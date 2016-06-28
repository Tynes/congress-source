import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const style = {
  width: '376px',
};
const PAGINATE_BY = 8;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  handleChange(event) {
    this.setState({ search: event.target.value }, () =>this.props.handleSearch(this.state.search, 0));
  }
  handlePartyChange(party) {
    this.setState({ search: '' }, () => this.searchbar.input.value = '');
    // this method of clearing the search bar does not work still
    this.props.handlePartyChange(party);
  }
  handleSeachByToggle(searchBy) {
    this.searchbar.input.value = '';
    this.props.handleSearchByToggle(searchBy);
  }
  render() {
    return (
      <div>
        <h1 className="row">Search Through Members of the US Government</h1>
        <div className="right-push">
          <TextField
            onChange={this.handleChange.bind(this)}
            floatingLabelText="Search Here"
            hintText="Ex Chuck Schumer or New York"
            floatingLabelFixed={true}
            className="row"
            style={style}
            ref={i => this.searchbar = i}
          />
          <RadioButtonGroup
            name="searchType"
            defaultSelected="state"
            className="row"
            onChange={(e, val) => this.props.handleSearchByToggle(val)}
          >
            <RadioButton
              value="state"
              label="State"
            />
            <RadioButton
              value="name"
              label="Name"
            />
          </RadioButtonGroup>
          <div className="row">
            <Checkbox
              label="Republican"
              checked={this.props.party === 'Republican'}
              onCheck={() => this.props.handlePartyChange('Republican')}
            />
            <Checkbox
              label="Democrat"
              checked={this.props.party === 'Democrat'}
              onCheck={() => this.props.handlePartyChange('Democrat')}
            />
          </div>
          <FlatButton
            icon={<ArrowBack />}
            onClick={() => this.props.paginate(this.state.search, PAGINATE_BY)}
          />
          <FlatButton
            icon={<ArrowForward />}
            onClick={() => this.props.paginate(this.state.search, PAGINATE_BY)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
