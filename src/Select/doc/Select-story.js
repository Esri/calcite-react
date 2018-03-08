import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import GuideExample from '../../../stories/GuideExample';
import doc from './Select.md';
import Alert from '../../Alert';
import Card, { CardTitle, CardContent } from '../../Card';
import Select from '../';
import { MenuItem } from '../../Menu';
import Button from '../../Button';
import { StyledSelectInput } from '../Select-styled';

const CustomInput = StyledSelectInput.extend`
  display: inline-block;
  border: none;
  box-shadow: none;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTRweCIg
aGVpZ2h0PSI3NHB4IiB2aWV3Qm94PSIwIDAgNTQgNzQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0
dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv
MTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRw
Oi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQg
MiBDb3B5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAg
PGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IkFydGJvYXJkLTItQ29weSIgc3Ryb2tlPSJub25lIiBz
dHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAg
PGcgaWQ9ImRvd25BcnJvdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE5LjAwMDAw
MCkiIGZpbGw9IiM1OTU5NTkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwb2x5
Z29uIGlkPSJTaGFwZSIgcG9pbnRzPSI1NCAwIDU0IDExLjE3NjQ3MDYgMjcgMzggMCAxMS4xNzY0
NzA2IDAgMCAyNyAyNi44MjM1Mjk0Ij48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8
L3N2Zz4=');

  &:focus {
    border-color: none;
    box-shadow: none;
  }
  &:hover {
    text-decoration: underline;
  }
`;

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
          </Select>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Custom Input',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <label>
            <span>Value: </span>
            <Select
              input={<CustomInput type="text" />}
              onChange={action('onChange')}
              wrapperStyle={{ display: 'inline' }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </label>
        </GuideExample>
      </div>
    ))
  )
  .add(
    'Ridiculous Example',
    withInfo(doc)(() => (
      <div>
        <GuideExample>
          <Select input={<Button />} onChange={action('onChange')}>
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
                  <code>bar="{'{color}'}"</code>
                </p>
              </CardContent>
            </Card>
          </Select>
        </GuideExample>
      </div>
    ))
  );
