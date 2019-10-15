import React, { Component } from 'react';
import { withTheme } from 'styled-components';

export default withTheme(class Arrow extends Component {
  render() {
    return (
      <svg width="70%" height="70%" viewBox="0 0 30 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <polygon id="Triangle" stroke={this.props.theme['--logo-fill']} strokeWidth="3" transform="translate(13.500000, 15.500000) rotate(90.000000) translate(-13.500000, -15.500000) " points="13.5 4 25 27 2 27"></polygon>
        </g>
      </svg>
    )
  }
})
