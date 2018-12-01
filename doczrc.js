import { css } from 'docz-plugin-css';
import DoczCalcitetheme from './docz/DoczCalcitetheme';

export default {
  plugins: [css()],
  wrapper: __dirname + '/docz/ThemeWrapper',
  menu: ['Getting Started'],
  themeConfig: DoczCalcitetheme
};
