import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GuideExample from '../../../stories/GuideExample';
import doc from './Elements.md';

import {
  CalciteP,
  CalciteA,
  CalciteH1,
  CalciteH2,
  CalciteH3,
  CalciteH4,
  CalciteH5,
  CalciteH6,
  CalciteOl,
  CalciteUl,
  CalciteLi
} from '../';

storiesOf('Elements', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample label="CalciteH1...">
        <CalciteH1>Title H1</CalciteH1>
        <CalciteH2>Title H2</CalciteH2>
        <CalciteH3>Title H3</CalciteH3>
        <CalciteH4>Title H4</CalciteH4>
        <CalciteH5>Title H5</CalciteH5>
        <CalciteH6>Title H6</CalciteH6>
      </GuideExample>
      <GuideExample label="CalciteP">
        <CalciteP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          justo ligula, aliquet vel lectus quis, accumsan maximus ex. Nulla
          maximus augue vitae nunc ultricies sodales.
        </CalciteP>
      </GuideExample>
      <GuideExample label="CalciteA">
        <CalciteA>A Link</CalciteA>
      </GuideExample>
      <GuideExample label="CalciteOl">
        <CalciteOl>
          <CalciteLi>Item 1</CalciteLi>
          <CalciteLi>Item 2</CalciteLi>
          <CalciteLi>Item 3</CalciteLi>
        </CalciteOl>
      </GuideExample>
      <GuideExample label="CalciteUl">
        <CalciteUl>
          <CalciteLi>Item 1</CalciteLi>
          <CalciteLi>Item 2</CalciteLi>
          <CalciteLi>Item 3</CalciteLi>
        </CalciteUl>
      </GuideExample>
      <GuideExample label="plain list">
        <CalciteUl plain>
          <CalciteLi>Item 1</CalciteLi>
          <CalciteLi>Item 2</CalciteLi>
          <CalciteLi>Item 3</CalciteLi>
        </CalciteUl>
        <CalciteOl plain>
          <CalciteLi>Item 1</CalciteLi>
          <CalciteLi>Item 2</CalciteLi>
          <CalciteLi>Item 3</CalciteLi>
        </CalciteOl>
      </GuideExample>
    </div>
  ))
);
