import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './Select.md';

import Alert from '../../Alert';
import Card, { CardTitle, CardContent } from '../../Card';
import { MenuItem } from '../../Menu';
import Select from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';

import statesJson from '../../../stories/_sampleJson/states.json';

storiesOf('Select', module)
  .add(
    'Basic',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select onChange={action('onChange')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Fourty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
            <MenuItem value={60}>Sixty</MenuItem>
            <MenuItem value={70}>Seventy</MenuItem>
            <MenuItem value={80}>Eighty</MenuItem>
            <MenuItem value={90}>Ninety</MenuItem>
            <MenuItem value={100}>One Hundred</MenuItem>
          </Select>
        </GuideExample>
        <GuideExample label="fullWidth">
          <Select fullWidth onChange={action('onChange')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Fourty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
            <MenuItem value={60}>Sixty</MenuItem>
            <MenuItem value={70}>Seventy</MenuItem>
            <MenuItem value={80}>Eighty</MenuItem>
            <MenuItem value={90}>Ninety</MenuItem>
            <MenuItem value={100}>One Hundred</MenuItem>
          </Select>
        </GuideExample>
        <GuideExample label="FormControlLabel">
          <FormControl>
            <FormControlLabel>Value:</FormControlLabel>
            <Select onChange={action('onChange')}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
              <MenuItem value={40}>Fourty</MenuItem>
              <MenuItem value={50}>Fifty</MenuItem>
              <MenuItem value={60}>Sixty</MenuItem>
              <MenuItem value={70}>Seventy</MenuItem>
              <MenuItem value={80}>Eighty</MenuItem>
              <MenuItem value={90}>Ninety</MenuItem>
              <MenuItem value={100}>One Hundred</MenuItem>
            </Select>
          </FormControl>
        </GuideExample>
        <GuideExample label="appendToBody">
          <Select appendToBody onChange={action('onChange')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Fourty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
            <MenuItem value={60}>Sixty</MenuItem>
            <MenuItem value={70}>Seventy</MenuItem>
            <MenuItem value={80}>Eighty</MenuItem>
            <MenuItem value={90}>Ninety</MenuItem>
            <MenuItem value={100}>One Hundred</MenuItem>
          </Select>
        </GuideExample>
        <GuideExample label="menuStyle={{maxHeight: 'none'}}">
          <Select
            menuStyle={{ maxHeight: 'none' }}
            onChange={action('onChange')}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Fourty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
            <MenuItem value={60}>Sixty</MenuItem>
            <MenuItem value={70}>Seventy</MenuItem>
            <MenuItem value={80}>Eighty</MenuItem>
            <MenuItem value={90}>Ninety</MenuItem>
            <MenuItem value={100}>One Hundred</MenuItem>
          </Select>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Controlled Select',
    withInfo({
      text: doc,
      propTables: [Select]
    })(() => {
      class SelectStory extends Component {
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
            <div>
              <GuideExample label="selectedItem={this.state.selectedValue}">
                <Select
                  onChange={this.handleSelectChange}
                  selectedValue={this.state.selectedValue}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Fourty</MenuItem>
                  <MenuItem value={50}>Fifty</MenuItem>
                  <MenuItem value={60}>Sixty</MenuItem>
                  <MenuItem value={70}>Seventy</MenuItem>
                  <MenuItem value={80}>Eighty</MenuItem>
                  <MenuItem value={90}>Ninety</MenuItem>
                  <MenuItem value={100}>One Hundred</MenuItem>
                </Select>
              </GuideExample>
              <GuideExample label="selectedItem={this.state.selectedItem}">
                <Select
                  onChange={this.handleSelectChange}
                  selectedItem={this.state.selectedItem}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                  <MenuItem value={40}>Fourty</MenuItem>
                  <MenuItem value={50}>Fifty</MenuItem>
                  <MenuItem value={60}>Sixty</MenuItem>
                  <MenuItem value={70}>Seventy</MenuItem>
                  <MenuItem value={80}>Eighty</MenuItem>
                  <MenuItem value={90}>Ninety</MenuItem>
                  <MenuItem value={100}>One Hundred</MenuItem>
                </Select>
              </GuideExample>
            </div>
          );
        }
      }

      SelectStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SelectStory />;
    })
  )
  .add(
    'Filterable',
    withInfo({
      text: doc,
      propTables: [Select]
    })(() => {
      class SelectStory extends Component {
        constructor(props) {
          super(props);
          this.state = {
            selectedValue: null
          };
        }

        handleSelectChange = (value, item) => {
          this.setState({
            selectedValue: value
          });
        };

        render() {
          return (
            <div>
              <GuideExample label="filterable">
                <Select
                  filterable
                  onChange={this.handleSelectChange}
                  selectedValue={this.state.selectedValue}
                >
                  {statesJson.states.map(state => {
                    return (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    );
                  })}
                </Select>
              </GuideExample>
              <GuideExample label="virtualized">
                <Select
                  filterable
                  virtualized
                  virtualizedMenuWidth={250}
                  onChange={this.handleSelectChange}
                  selectedValue={this.state.selectedValue}
                >
                  {statesJson.states.map(state => {
                    return (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    );
                  })}
                </Select>
              </GuideExample>
            </div>
          );
        }
      }

      SelectStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SelectStory />;
    })
  )
  .add(
    'Ridiculous Example',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select onChange={action('onChange')}>
            <li value={10}>Go to Online</li>
            <option value={20}>Help</option>
            <Alert value={30}>Sign Out</Alert>
            <div value={40}>I'm a div!</div>
            <Card
              value={50}
              label="Card Option"
              bar="green"
              style={{ margin: '0 5px', width: '300px' }}
            >
              <CardContent>
                <CardTitle>Card with Colored Bar</CardTitle>
                <p>
                  Every color in calcite can be used as a colored "bar" along
                  the top of a card to provide a bit of visual punch with{' '}
                  <code>
                    bar="
                    {'{color}'}"
                  </code>
                </p>
              </CardContent>
            </Card>
          </Select>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Minimal',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select minimal onChange={action('onChange')}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            <MenuItem value={40}>Fourty</MenuItem>
            <MenuItem value={50}>Fifty</MenuItem>
            <MenuItem value={60}>Sixty</MenuItem>
            <MenuItem value={70}>Seventy</MenuItem>
            <MenuItem value={80}>Eighty</MenuItem>
            <MenuItem value={90}>Ninety</MenuItem>
            <MenuItem value={100}>One Hundred</MenuItem>
          </Select>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'with Formik',
    withInfo({
      text: doc,
      propTables: [Select]
    })(() => {
      class SelectWithFormikStory extends Component {
        state = {
          selectedValue: 10,
          selectedItem: null
        };

        formValues = {
          state: ''
        };

        handleSelectChange = (value, item) => {
          this.setState({
            selectedValue: value,
            selectedItem: item
          });
        };

        onSubmit = (values, actions) => {
          setTimeout(() => {
            console.log(values);
            actions.setSubmitting(false);
          }, 1000);
        };

        onValidate = values => {
          const errors = {};
          if (!values.state) {
            errors.state = 'Required 🤨';
          } else if (values.state !== 'CO') {
            errors.state = 'You have to live in Colorado to use this form 😉';
          }

          return errors;
        };

        render() {
          return (
            <div>
              <Formik
                initialValues={this.formValues}
                validate={this.onValidate}
                onSubmit={this.onSubmit}
              >
                {({ values, errors, touched, handleSubmit, isSubmitting }) => (
                  <GuideExample label="selectedItem={this.state.selectedItem}">
                    <Form onSubmit={handleSubmit}>
                      {/* state */}

                      <FormControl
                        success={touched.state && !errors.state ? true : false}
                        error={touched.state && errors.state ? true : false}
                      >
                        <FormControlLabel htmlFor="state">
                          State:
                        </FormControlLabel>
                        <Field component={Select} name="state">
                          <MenuItem value="CA">California</MenuItem>
                          <MenuItem value="CO">Colorado</MenuItem>
                          <MenuItem value="MD">Maryland</MenuItem>
                        </Field>
                        <FormHelperText>
                          {(touched.state && errors.state) || null}
                        </FormHelperText>
                      </FormControl>

                      <FormControl>
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting.......' : 'Submit'}
                        </Button>
                      </FormControl>
                      <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                  </GuideExample>
                )}
              </Formik>
            </div>
          );
        }
      }

      SelectWithFormikStory.propTypes = {
        isStory: PropTypes.bool
      };
      return <SelectWithFormikStory />;
    })
  );
