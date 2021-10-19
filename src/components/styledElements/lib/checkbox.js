import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize, darken } from "polished";

const Label = styled("label").attrs({ className: "flexi-checkbox-label" })`
  font-size: ${(props) => props.theme.PrimaryFontSize};
  font-family: ${(props) => props.theme.PrimaryFont};
  color: ${(props) => props.theme.PrimaryFontColor};
  margin-left: 10px;
`;

const Wrapper = styled.div`
  padding: 5px;
  display: ${props=> props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  height: ${props=> props.height};
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
      ${props=> props.bold && css`
        font-weight: 900;
      `}
    }
    ${(props)=> props.disabled && css`
    ${Label}{
        opacity: 0.6;
      }
    `}
`;



const CheckboxInput = styled.input.attrs((props) => ({
  type: "checkbox",
  className: "flexi-checkbox",
}))`
  cursor: pointer;
  margin: 0px 4px;
  width: ${props=> props.size};
  height: ${props=> props.size};
  /* flex-shrink: 0; */
  display: inline-flex;
  align-items: center;
  justify-items: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: ${(props) =>
  props.radius ? props.radius : props.theme.PrimaryRadius};
  ${props=> props.round && css` border-radius: 50%; `}
  border: ${props=> props.thickness} solid ${(props) => props.lineColor ? props.lineColor : darken(0.2,props.theme.PrimaryBorderColor)};
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      &:disabled {
        cursor: default;
        border: ${props=> props.thickness} dotted
        ${(props) => props.lineColor ? props.lineColor : transparentize(0.2,props.theme.PrimaryBorderColor)};
        background: ${(props) =>
        transparentize(0.8, props.lineColor ? props.lineColor : props.theme.PrimaryBorderColor)};
        color: ${(props) => props.lineColor ? props.lineColor : props.theme.PrimaryFontColor};
      }
    `}

  &:checked {
    cursor: pointer;
    background: ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor};
    border: ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor};
    outline: none;
    opacity: 1;
    ${(props) =>
    props.elevate &&
    css`
        ${(props) =>
        props.elevate != "low"
          ? props.theme.Elevate[props.elevate]
          : props.theme.Elevate.low};
      `}

    ${(props) =>
    props.disabled &&
    css`
    cursor: default;
    `}
    position: relative;

    &:before {
      font-family: "flexibull-2-0";
      height: ${props=> props.size};
      width: ${props=> props.size};
      font-size: ${props=> parseInt(props.size)/2.2}px;
      content: "\\${props=> props.icon}";
      color: #fff;
      font-weight: normal;
      display: flex;
      position: absolute;
      top:0;left:0;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Checkbox = (props) => {
  return (
    <Wrapper {...props}>
      <CheckboxInput {...props} />
      <Label>{props.label}</Label>
    </Wrapper>
  );
};

Checkbox.defaultProps = {
  block: false,
  spaceLeft: false,
  spaceRight: false,
  elevate: false,
  size: '24px',
  block: false,
  elevate: 'mid',
  height: '42px',
  thickness: '2px',
  icon: "e813",
};

Checkbox.propTypes = {
  block: PropTypes.bool,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  color: PropTypes.string,
  lineColor: PropTypes.string,
  radius: PropTypes.string,
  label: PropTypes.string,
  elevate: PropTypes.any,
  size: PropTypes.string,
  round: PropTypes.bool,
  block: PropTypes.bool,
  formAlign: PropTypes.bool,
  bold: PropTypes.bool,
  thickness: PropTypes.string,
  icon: PropTypes.string,
};
