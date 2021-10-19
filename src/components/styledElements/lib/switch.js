import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize, darken } from "polished";

const Label = styled("label").attrs({ className: "flexi-checkbox-label" })`
  font-height: ${(props) => props.theme.PrimaryFontSize};
  font-family: ${(props) => props.theme.PrimaryFont};
  color: ${(props) => props.theme.PrimaryFontColor};
  margin-left: 10px;
`;

const Wrapper = styled.div`
  padding: 5px;
  display: ${props => props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  height: ${props => props.height};
  cursor: default;
  vertical-align: top;
  ${(props) =>
    props.spaceTop &&
    css`
      margin-top: ${(props) =>
        props.spaceTop.length >= 3 ? props.spaceTop : "10px"};
    `}

    ${(props) =>
    props.formAlign &&
    css`
      margin-top: 20px;
    `}
  ${(props) =>
    props.spaceLeft &&
    css`
      margin-left: ${(props) =>
        props.spaceLeft.length >= 3 ? props.spaceLeft : "10px"};
  `}
  ${(props) =>
    props.spaceRight &&
    css`
      margin-right: ${(props) =>
        props.spaceRight.length >= 3 ? props.spaceRight : "10px"};
    `}
    ${Label}{
      ${props => props.bold && css`
        font-weight: 900;
      `}
    }
    ${(props) => props.disabled && css`
    ${Label}{
        opacity: 0.6;
      }
    `}
`;



const SwitchInput = styled.input.attrs((props) => ({
  type: "checkbox",
  className: "flexi-checkbox",
}))`
  cursor: pointer;
  margin: 0px 4px;
  width: ${(props) => props.size * 2}px;
  height: ${(props) => props.size}px;
  display: inline-flex;
  align-items: center;
  justify-items: center;
  box-sizing: content-box;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: ${(props) => (props.size/2) + props.thickness }px;
  border: ${props=> props.thickness}px solid ${(props) => props.uncheckColor ? props.uncheckColor : darken(0.1, props.theme.PrimaryBorderColor)};
  background: ${(props) => props.uncheckColor ? props.uncheckColor : darken(0.1, props.theme.PrimaryBorderColor)};
  outline: none;
  position: relative;

  ${(props) =>
    props.disabled &&
    css`
      &:disabled {
        cursor: default;
        border: ${props=> props.thickness}px solid
        ${(props) => props.uncheckColor ? props.uncheckColor : transparentize(0.8, props.theme.PrimaryBorderColor)};
        background: ${(props) =>
        transparentize(0.8, props.uncheckColor ? props.uncheckColor : props.theme.PrimaryBorderColor)};
        color: ${(props) => props.uncheckColor ? props.uncheckColor : props.theme.PrimaryFontColor};
        &:after{
          opacity: 0.8;
        }
      }
    `}
   
  &:after{
    background: #fff; 
    border-radius: 50%;
    height: ${props=> props.size}px;
    width: ${props=> props.size}px;
    content: "";
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    transition: 0.4s;
  }

  &:checked {
    cursor: pointer;
    border: ${props=> props.thickness}px solid 
    ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor};
    background: ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor}; 
    outline: none;
    opacity: 0.8;
    ${(props) =>
    props.elevate &&
    css`
        ${(props) =>
        props.elevate != "low"
          ? props.theme.Elevate[props.elevate]
          : props.theme.Elevate.low};
      `}

    &:after {
      transform: translateX(${props=> props.size}px);
    }
  }
`;

export const Switch = (props) => {
  return (
    <Wrapper {...props}>
      <SwitchInput {...props} />
      <Label>{props.label}</Label>
    </Wrapper>
  );
};

Switch.defaultProps = {
  block: false,
  spaceLeft: false,
  spaceRight: false,
  elevate: false,
  block: false,
  elevate: 'mid',
  height: '42px',
  thickness: 3,
  size: 20
};

Switch.propTypes = {
  block: PropTypes.bool,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  color: PropTypes.string,
  uncheckColor: PropTypes.string,
  radius: PropTypes.string,
  label: PropTypes.string,
  elevate: PropTypes.any,
  block: PropTypes.bool,
  formAlign: PropTypes.bool,
  bold: PropTypes.bool,
  thickness: PropTypes.number,
  size: PropTypes.number
};
