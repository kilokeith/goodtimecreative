import { map } from 'rambdax';
import { sizes } from './flexbox';

// https://github.com/mg901/styled-breakpoints
// transform into px values (e.q. 64 -> '64px')
const breakpoints = map(val => `${val}px`, sizes);

export default breakpoints;
