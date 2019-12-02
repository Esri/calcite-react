import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import embedCSS from 'rollup-plugin-embed-css';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import progress from 'rollup-plugin-progress';

export default {
  // use glob in the input
  input: ['src/**/index.js', 'src/**/*-styled.js', 'src/**/utils/*.js'],
  output: {
    format: 'esm',
    dir: 'dist'
  },
  plugins: [
    resolve({
      preferBuiltins: true, // use local modules over matching builtin ones
      mainFields: ['main', 'module']
    }),
    multiInput(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: [
          'Children',
          'Component',
          'PureComponent',
          'Fragment',
          'createElement',
          'createContext',
          'forwardRef',
          'useContext',
          'useDebugValue',
          'useEffect',
          'useMemo',
          'useState'
        ],
        'react-dom': ['render', 'findDOMNode'],
        'prop-types': ['PropTypes'],
        'react-is': [
          'isForwardRef',
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ],
        'react-dates': ['SingleDatePicker', 'DateRangePicker'],
        'react-popper': ['Manager', 'Reference', 'Popper'],
        'react-virtualized': ['List']
      }
    }),
    embedCSS(),
    babel({
      exclude: ['node_modules/**']
    }),
    terser(),
    progress()
  ]
};
