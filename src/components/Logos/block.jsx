import React, { Component } from 'react';
import { withTheme } from 'styled-components';

export default withTheme(class BlockLogo extends Component {
  render() {
    return (
      <svg width="100%" height="100%" viewBox="0 0 44 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
         <g id="Artboard" transform="translate(-125.000000, -145.000000)" fillRule="nonzero">
            <g id="3d-(1)" transform="translate(125.000000, 145.000000)">
              <path fill={this.props.theme['--logo-fill']} d="M22,0 L0,12.5 L0,37.5 L22,50 L44,37.5 L44,12.5 L22,0 Z M39.5159631,13.3449555 L22,23.2975006 L4.48403693,13.3449555 L22,3.3927918 L39.5159631,13.3449555 Z M2.98548176,15.8866883 L20.5072591,25.8419037 L20.5072591,45.7592011 L2.98548176,35.8036041 L2.98548176,15.8866883 Z M23.4927409,45.7592011 L23.4927409,25.8419037 L41.0145182,15.8866883 L41.0145182,35.8036041 L23.4927409,45.7592011 Z" id="Shape"></path>
            </g>
          </g>
        </g>
      </svg>
    )
  }
})
