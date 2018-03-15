import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './MultiSelect.md';

import { MenuItem } from '../../Menu';
import Button from '../../Button';
import { StyledMultiSelectInput } from '../MultiSelect-styled';
import ChevronDown from 'mdi-react/ChevronDownIcon';
import MultiSelect from '../';

storiesOf('MultiSelect', module).add(
  'Controlled MultiSelect',
  withInfo(doc)(() => {
    class ControlledMultiSelect extends Component {
      constructor(props) {
        super(props);
        this.state = {
          selectedValues: [10]
        };
      }

      handleMultiSelectChange = (values, items) => {
        this.setState({
          selectedValues: values
        });
      };

      render() {
        return (
          <div>
            <GuideExample label="selectedItem={this.state.selectedValues}">
              <MultiSelect
                onChange={this.handleMultiSelectChange}
                selectedValues={this.state.selectedValues}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </MultiSelect>
            </GuideExample>
          </div>
        );
      }
    }
    return <ControlledMultiSelect />;
  })
);
