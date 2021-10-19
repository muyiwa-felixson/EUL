import React from "react";
import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";
import PropTypes from "prop-types";

const TagWrapper = styled("div")`
  display: inline-flex;
  overflow: hidden;
  align-items: center;
  font-family: ${(props) => props.theme.PrimaryFont};
  height: ${(props) => props.height}px;
  border: 1px solid ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor}; 
  background-color: ${(props) =>
    transparentize(0.8, props.color ? props.color : props.theme.PrimaryColor)};
  padding: ${(props) => props.pad};
  color: ${(props) => (props.color ? props.color : props.theme.PrimaryColor)};
  border-radius: ${(props) =>
    props.round ? `${props.height / 2}px` : props.theme.PrimaryRadius};
  font-size: ${(props) =>
    props.font ? props.font : props.theme.PrimaryFontSize};
  transition: ${(props) => props.theme.PrimaryTransition};
  ${(props) =>
    props.small &&
    css`
      font-size: 10px;
      height: 28px;
    `}
  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
  ${(props) =>
    props.dashed &&
    css`
      border-style: dashed;
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

  &:hover{
    background-color: ${(props) =>
      transparentize(
        0.7,
        props.color ? props.color : props.theme.PrimaryColor
      )}; 
  }

  ${(props) =>
    props.solid &&
    css`
      border: none;
      color: ${(props) =>
        props.fontColor
          ? props.fontColor
          : darken(0.4, props.theme.PrimaryColor)};
      background-color: ${(props) =>
        props.color ? props.color : props.theme.PrimaryColor};
      &:hover {
        border: none;
        background: ${(props) =>
          darken(0.05, props.color ? props.color : props.theme.PrimaryColor)};
      }
    `}

  & .flexi-tag-center{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
  }
  
  ${(props) =>
    props.onClose &&
    css`
      padding-right: 0;
      & .flexisaf-tag-close {
        flex-grow: 0;
        cursor: pointer;
        color: ${(props) =>
          props.color ? props.color : props.theme.PrimaryColor};
        width: ${(props) => props.height / 2}px;
        height: ${(props) => props.height / 2}px;
        border-radius: ${(props) =>
          props.round ? `${props.height / 2}px` : props.theme.PrimaryRadius};
        background-color: #fff;
        font-size: ${(props) =>
          props.font ? props.font : props.theme.PrimaryFontSize};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        font-weight: bold;

        &:hover {
          color: ${(props) =>
            darken(0.4, props.color ? props.color : props.theme.PrimaryColor)};
        }
      }
    `}
`;

export const Tag = (props) => {
  return (
    <TagWrapper {...props}>
      <span className="flexi-tag-center">{props.children}</span>
      {props.onClose && (
        <span className="flexisaf-tag-close" onClick={props.onClose}>
          &times;
        </span>
      )}
    </TagWrapper>
  );
};

Tag.defaultProps = {
  block: false,
  spaceLeft: false,
  spaceRight: false,
  dashed: false,
  round: true,
  height: 30,
  pad: "0 15px",
  solid: false,
  small: false,
};

Tag.propTypes = {
  block: PropTypes.bool,
  color: PropTypes.string,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  dashed: PropTypes.bool,
  children: PropTypes.any,
  height: PropTypes.number,
  fontColor: PropTypes.string,
  round: PropTypes.bool,
  pad: PropTypes.string,
  font: PropTypes.number,
  solid: PropTypes.bool,
  small: PropTypes.bool,
};
