import React, { Component, Fragment } from 'react';
import GuideExample from '../../../stories/GuideExample';

import Select from '../Select';
import { MenuItem } from '../../Menu';
import Button from '../../Button';

import ChevronDown from 'mdi-react/ChevronDownIcon';

class SelectStateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 10,
      selectedItem: null
    };
  }

  handleSelectChange = (value, item) => {
    this.setState({
      selectedValue: value,
      selectedItem: item
    });
  };

  render() {
    return (
      <Fragment>
        <GuideExample label="selectedItem={this.state.selectedValue}">
          <Select
            onChange={this.handleSelectChange}
            selectedValue={this.state.selectedValue}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </GuideExample>
        <GuideExample label="selectedItem={this.state.selectedItem}">
          <Select
            input={<Button icon={<ChevronDown />} />}
            onChange={this.handleSelectChange}
            selectedItem={this.state.selectedItem}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </GuideExample>
      </Fragment>
    );
  }
}

export default SelectStateExample;
