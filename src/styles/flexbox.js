import { zipObj } from 'rambdax';
import { setConfiguration } from 'react-grid-system';
// https://github.com/sealninja/react-grid-system

export const breakpoints = [576, 768, 992, 1200, 1600];
export const screenClasses = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
export const sizes = zipObj(screenClasses, [0, ...breakpoints]);

const flexbox = {
  breakpoints: breakpoints,
  containerWidths: [540, 740, 960, 1140, 1540],
  gutterWidth: 30,
  gridColumns: 12,
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
};

setConfiguration(flexbox);

export default flexbox;
