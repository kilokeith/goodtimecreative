import { path } from 'rambdax';
import { css } from 'styled-components';
import { withProp } from 'styled-tools';
import colors from '../colors';

// looks up a path in the colors object
export const lookupColor = colorPath => path(colorPath, colors);
// checks if a color path exists
export const hasColor = colorPath => !!lookupColor(colorPath);

// for props.primary, props.secondary, props.color
// to be used a func inside styled-component
// ig: `color: ${colorProp};`
export const colorProp = css`
  ${withProp(['color'], color => {
    // if a color name was passed and exists in colors, return its value
    if (color && hasColor(color)) {
      const col = lookupColor(color);
      // all good, return color
      if (typeof col === 'string') {
        return col;
      } else if (typeof col === 'function') {
        // it's a func, it may take a param, but for now execute and return
        return col();
      }
    }
    // return any color passed, like a hex string
    if (color && typeof color === 'string') return color;
    // default color
    return 'inherit';
  })};
`;

// sets the foreground if included
// for props.color, props.primary, props.secondary
// ig: `${colorStyle}` => color: ${primary|secondary|props.color}
export const colorStyle = css`
  color: ${colorProp};
`;
