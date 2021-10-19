import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize, darken } from "polished";

const Label = styled("label").attrs({ className: "flexi-radio-label" })`
  font-size: ${(props) => props.theme.PrimaryFontSize};
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



const RadioInput = styled.input.attrs((props) => ({
    type: "radio",
    className: "flexi-radio",
}))`
  cursor: pointer;
  margin: 0px 4px;
  width: ${props => props.size};
  height: ${props => props.size};
  display: inline-flex;
  align-items: center;
  justify-items: center;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  ${props => props.box && css` border-radius: 0; `}
  border: ${props => props.thickness} solid ${(props) => props.lineColor ? props.lineColor : darken(0.2, props.theme.PrimaryBorderColor)};
  outline: none;

  ${(props) =>
        props.disabled &&
        css`
      &:disabled {
        cursor: default;
        border: ${props => props.thickness} dotted
        ${(props) => props.lineColor ? props.lineColor : transparentize(0.2, props.theme.PrimaryBorderColor)};
        background: ${(props) =>
                transparentize(0.8, props.lineColor ? props.lineColor : props.theme.PrimaryBorderColor)};
        color: ${(props) => props.lineColor ? props.lineColor : props.theme.PrimaryFontColor};
      }
    `}

  &:checked {
    cursor: pointer;
    border: ${props => props.thickness} solid 
    ${(props) =>
        props.color ? props.color : props.theme.PrimaryColor};
    outline: none;
    display:flex;
    place-content: center;
    opacity: 0.8;
    ${(props) =>
        props.elevate &&
        css`
        ${(props) =>
                props.elevate != "low"
                    ? props.theme.Elevate[props.elevate]
                    : props.theme.Elevate.low};
      `}
    position: relative;

    &:before {
      background: ${(props) =>
        props.color ? props.color : props.theme.PrimaryColor}; 
      border-radius: 50%;
      height: 90%;
      width: 90%;
      font-size: ${props => parseInt(props.size) / 2.2}px;
      content: "";
    }
  }
`;

export const RadioButton = (props) => {
    return (
        <Wrapper {...props}>
            <RadioInput {...props} />
            <Label>{props.label}</Label>
        </Wrapper>
    );
};

RadioButton.defaultProps = {
    block: false,
    spaceLeft: false,
    spaceRight: false,
    elevate: false,
    size: '24px',
    block: false,
    elevate: 'mid',
    height: '42px',
    thickness: '2px',
};

RadioButton.propTypes = {
    block: PropTypes.bool,
    spaceLeft: PropTypes.any,
    spaceRight: PropTypes.any,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    name: PropTypes.string,
    color: PropTypes.string,
    lineColor: PropTypes.string,
    radius: PropTypes.string,
    label: PropTypes.string,
    elevate: PropTypes.any,
    size: PropTypes.string,
    box: PropTypes.bool,
    block: PropTypes.bool,
    formAlign: PropTypes.bool,
    bold: PropTypes.bool,
    thickness: PropTypes.string,
};
