import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './MultiSelect.md';

import { MenuItem } from '../../Menu';
import MultiSelect from '../';

storiesOf('MultiSelect', module)
  .add(
    'Controlled MultiSelect',
    withInfo({
      text: doc,
      propTables: [MultiSelect]
    })(() => {
      class MultiSelectStory extends Component {
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
              <GuideExample label="fullWidth">
                <MultiSelect
                  fullWidth
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

      MultiSelectStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <MultiSelectStory />;
    })
  )
  .add(
    'Custom Label Renderer',
    withInfo({
      text: doc,
      propTables: [MultiSelect]
    })(() => {
      class MultiSelectStory extends Component {
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

        renderValue = items => {
          if (!items || items.length === 0) {
            return 'Select an Option';
          } else if (items.length > 2) {
            return `${items.length} Items Selected`;
          } else {
            return items.map(item => item.props.children).join(', ');
          }
        };

        render() {
          return (
            <div>
              <GuideExample label="selectedItem={this.state.selectedValues}">
                <MultiSelect
                  renderValue={this.renderValue}
                  onChange={this.handleMultiSelectChange}
                  selectedValues={this.state.selectedValues}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Fourty</MenuItem>
                  <MenuItem value={50}>Fifty</MenuItem>
                  <MenuItem value={60}>Sixty</MenuItem>
                </MultiSelect>
              </GuideExample>
            </div>
          );
        }
      }

      MultiSelectStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <MultiSelectStory />;
    })
  )
  .add(
    'Minimal',
    withInfo({
      text: doc,
      propTables: [MultiSelect]
    })(() => {
      class MultiSelectStory extends Component {
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
              <GuideExample>
                <MultiSelect
                  minimal
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

      MultiSelectStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <MultiSelectStory />;
    })
  );
