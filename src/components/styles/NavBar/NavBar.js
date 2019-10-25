import React from "react";
import styled from "styled-components";

const BurgerWrapper = styled.a`
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  position: relative;
  /* //@todo come from props here. props.theme.navbar.height */
  /* height: 3.25rem; */
  /* width: 3.25rem; */
  margin-left: auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

const BurgerBar = styled.span`
      background-color: currentColor;
      display: block;
      height: 1px;
      left: calc(50% - 8px);
      position: absolute;
      transform-origin: center;

      //@todo from props
      transition-duration: 86ms;
      transition-property: background-color, opacity, transform;
      transition-timing-function: ease-out;
      width: 16px;
      &:nth-child(1) {
        top: calc(50% - 6px);
        ${
          props =>
            props.active
              ? "transform: translateY(5px) rotate(45deg);"
              : "" /* eslint-disable-line no-confusing-arrow */
        }
      }
      &:nth-child(2) {
        top: calc(50% - 1px);
        ${
          props =>
            props.active
              ? "opacity: 0;"
              : "" /* eslint-disable-line no-confusing-arrow */
        }
      }
      &:nth-child(3) {
        top: calc(50% + 4px);
        ${
          props =>
            props.active
              ? "transform: translateY(-5px) rotate(-45deg);"
              : "" /* eslint-disable-line no-confusing-arrow */
        }
      }
    }

`;

const Burger = ({ active, onClick, ...props }) => {
  return (
    <BurgerWrapper
      onClick={onClick}
      aria-label="menu"
      aria-expanded="false"
      {...props}
    >
      <BurgerBar aria-hidden="true" active={active} />
      <BurgerBar aria-hidden="true" active={active} />
      <BurgerBar aria-hidden="true" active={active} />
    </BurgerWrapper>
  );
};

const Menu = styled.nav`
  display: none;
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)) {
    background-color: ${props => props.background};
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
    ${props =>
      props.active &&
      `
      display: block;
    `}
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

const Start = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-right: auto;
  }
`;

const End = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }
`;

const Dropdown = styled.div`
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  display: none;
  border-top: 1px solid ${props => props.theme.nav.borderColor};
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    background-color: ${props => props.theme.global.background};
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    //@todo border from navbar. Fix all these later.
    border-top: 1px solid ${props => props.theme.nav.borderColor};
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    // display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
    &.is-right {
      left: auto;
      right: 0;
    }
  }
`;

const Link = styled.a`
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
color: ${props => props.theme.global.textColor};

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: center;
    display: flex;
  }
  cursor: pointer;
  &:hover,
  &.is-active {
    // background-color: ;
    // color: ;
  }
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &.is-active {
        // color: ${props => props.theme.nav};
    }
    &.is-active:not(:hover) {
      // background-color: ;
    }
  }
  &:not(.is-arrowless) {
    padding-right: 2.5em;
    &::after {
        border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
  border-color: #3273dc;
      margin-top: -0.375em;
      right: 1.125em;
    }
  }
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)) {
    &::after {
      display: none;
    }
  }
`;

const Item = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;

${props =>
  props.dropdown &&
  `
padding: 0px;

`}

color: ${props => props.theme.global.textColor};
&:hover {
    color: ${props => props.theme.global.linkColor};
}

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: center;
    display: flex;
  }

  a& {
    cursor: pointer;
    // &:hover,
    // &.is-active {
    //   background-color: ;
    //   color:;
    // }
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      &.is-active {
        // color: ;
      }
      &.is-active:not(:hover) {
        // background-color: ;
      }
    }
  }
  &.has-dropdown {
    padding: 0;
  }
  ${Dropdown} & {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    &.has-dropdown {
      align-items: stretch;
      &:hover,
      &.is-active {
        ${Link} {
          // background-color: fromTheme("navbar-item-hover-background-color")};
        }
      }
    }
    &.has-dropdown-up {
      ${Link}::after {
        transform: rotate(135deg) translate(0.25em, -0.25em);
      }
      ${Dropdown} {
        // border-bottom: fromTheme("navbar-dropdown-border-top")};
        // border-radius: fromTheme("navbar-dropdown-radius")} fromTheme(
    // "navbar-dropdown-radius"
  )} 0 0;
        border-top: none;
        bottom: 100%;
        // box-shadow: 0 -8px 8px {({ theme }) => rgba(theme["black"], 0.1)};
        top: auto;
      }
    }
    // &.is-active,
    ${props =>
      props.active &&
      `
          ${Dropdown} {
            display: block;
          }
    `}
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        ${props =>
          props.hoverable &&
          `
          &:hover {
              ${Dropdown} {
                display: block;
              }
           }
        `}
    }
    ${Dropdown} & {
      padding: 0.375rem 1rem;
      white-space: nowrap;
    }
    ${Dropdown} a& {
      padding-right: 3rem;
      &:hover {
        // background-color: fromTheme(
        //   "navbar-dropdown-item-hover-background-color"
        // )};
        // color: fromTheme("navbar-dropdown-item-hover-color")};
      }
      &.is-active {
        // background-color: fromTheme(
        //   "navbar-dropdown-item-active-background-color"
        // )};
        // color: fromTheme("navbar-dropdown-item-active-color")};
      }
    }
`;

const Brand = styled.div`
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  //@todo come from theme (navbar height);
  /* min-height: 3.25rem; */
  @media (max-width: calc(${props => props.theme.breakpoints.desktop} - 1px)) {
    ${Item} {
      align-items: center;
      display: flex;
    }
  }
`;

const Container = styled.div`
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: stretch;
    width: 90%;
    /* TODO: Take this in as a prop */
    max-width: 1216px;
  }
`;

export const NavBar = styled.nav`
  background-color: ${props => props.background};
  min-height: ${props => props.height};
  position: relative;
  z-index: 30;

  ${Container} {
    min-height: ${props => props.height};
    ${Brand} {
      min-height: ${props => props.height};
      ${BurgerWrapper} {
        height: ${props => props.height};
        width: ${props => props.height};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    align-items: stretch;
    display: flex;
  }
`;

NavBar.Brand = Brand;
NavBar.Item = Item;
NavBar.Link = Link;
NavBar.Dropdown = Dropdown;
NavBar.Burger = Burger;
NavBar.Menu = Menu;
NavBar.Start = Start;
NavBar.End = End;
NavBar.Container = Container;

NavBar.defaultProps = {
  background: "#fff",
  height: "3.25rem"
};
