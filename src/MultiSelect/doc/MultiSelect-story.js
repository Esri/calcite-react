import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Formik, Field } from 'formik';

import GuideExample from '../../../stories/GuideExample';
import doc from './MultiSelect.md';

import { MenuItem } from '../../Menu';
import MultiSelect from '../';

import Form, {
  FormControl,
  FormHelperText,
  FormControlLabel
} from '../../Form';
import Button from '../../Button';

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
  )
  .add(
    'with Formik',
    withInfo(doc)(() => {
      const formValues = {
        dogs: []
      };

      const dogOptions = [
        { name: 'Afghan Hound', value: 'afghanhound' },
        { name: 'Basenji', value: 'basenji' },
        { name: 'Bulldog', value: 'bulldog' },
        { name: 'Great Dane', value: 'greatdane' },
        { name: 'Yorkie', value: 'yorkie' },
        { name: 'Whippet', value: 'whippet' }
      ];

      const onSubmit = (values, actions) => {
        console.log(values);
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      };

      const onValidate = values => {
        const errors = {};
        if (!values.dogs.length) {
          errors.dogs = 'You must like at least one... 🤨';
        }

        return errors;
      };

      return (
        <Formik
          initialValues={formValues}
          validate={onValidate}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <GuideExample>
              <Form onSubmit={handleSubmit}>
                {/* dogs */}
                <FormControl
                  success={touched.dogs && !errors.dogs ? true : false}
                  error={touched.dogs && errors.dogs ? true : false}
                >
                  <FormControlLabel htmlFor="token">
                    Favorite Dogs:
                  </FormControlLabel>
                  <Field component={MultiSelect} name="dogs">
                    {dogOptions.map(dog => (
                      <MenuItem key={dog.value} value={dog.value}>
                        {dog.name}
                      </MenuItem>
                    ))}
                  </Field>
                  <FormHelperText>
                    {(touched.dogs && errors.dogs) || null}
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting.......' : 'Submit'}
                  </Button>
                </FormControl>
                Touched: <pre>{JSON.stringify(touched, null, 2)}</pre>
                Errors: <pre>{JSON.stringify(errors, null, 2)}</pre>
                Values: <pre>{JSON.stringify(values, null, 2)}</pre>
              </Form>
            </GuideExample>
          )}
        </Formik>
      );
    })
  );
