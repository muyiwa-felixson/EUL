import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { transparentize, darken } from 'polished';
import PropTypes from 'prop-types';

const Progress = keyframes`
100%{
  width: 100%;
}`;

const hidder = keyframes`
99%{
  width: 0;
  height: 0;
  border-radius: 25px;
}
100%{
  /* display: none; */
}`;

const ButtonWrapper = styled('div').attrs({ className: 'flexi-button' })`
    display: inline-flex;
    overflow: hidden;
    align-items: center;
    position: relative;
    vertical-align:top;
    cursor: pointer;
    font-weight: lighter;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    ${(props) =>
    props.block &&
    css`
        display: flex;
      `}
    ${(props) =>
    props.bold &&
    css`
        font-weight: bold;
      `}
    background-color: ${(props) =>
    props.color ? props.color : props.theme.PrimaryColor}; 
    padding: ${(props) => props.pad};
    color: ${(props) => props.fontColor};
    border-radius: ${(props) =>
    props.round ? `${props.height / 2}px` : props.theme.PrimaryRadius};
    font-size: ${(props) =>
    props.font ? props.font : props.theme.PrimaryFontSize};
    transition: ${(props) => props.theme.PrimaryTransition};
    ${(props) =>
    props.spaceLeft &&
    css`
        margin-left: ${(props) =>
        props.spaceLeft.length >= 3 ? props.spaceLeft : '10px'};
      `}
    ${(props) =>
    props.spaceRight &&
    css`
        margin-right: ${(props) =>
        props.spaceRight.length >= 3 ? props.spaceRight : '10px'};
      `}

    ${(props) =>
    props.elevate &&
    css`
        ${(props) =>
        props.elevate != 'low'
          ? props.theme.Elevate[props.elevate]
          : props.theme.Elevate.low};
      `}
    &:hover{
      background-color: ${(props) =>
    darken(0.1, props.color ? props.color : props.theme.PrimaryColor)}; 
    }

    ${(props) =>
    props.pale &&
    css`
        border: 1px solid
          ${(props) => (props.color ? props.color : props.theme.PrimaryColor)};
        color: ${(props) =>
        props.fontColor != '#fff'
          ? props.fontColor
          : props.theme.PrimaryColor};
        z-index: 0;
        background: ${(props) =>
        transparentize(
          1,
          props.color ? props.color : props.theme.PrimaryColor
        )};
        &:hover {
          background: ${(props) =>
        transparentize(
          0.8,
          props.color ? props.color : props.theme.PrimaryColor
        )};
        }
        ${(props) =>
        props.shaded &&
        css`
            background: ${(props) =>
            transparentize(
              0.8,
              props.color ? props.color : props.theme.PrimaryColor
            )};
            &:hover {
              background: ${(props) =>
            transparentize(
              0.6,
              props.color ? props.color : props.theme.PrimaryColor
            )};
            }
          `}
      `}

    ${(props) =>
    props.plain &&
    css`
        border: none;
        color: ${(props) =>
        props.fontColor != '#fff'
          ? props.fontColor
          : props.color
            ? props.color
            : props.theme.PrimaryColor};
        background: none;
        &:hover {
          background: ${(props) =>
        transparentize(
          0.95,
          props.color ? props.color : props.theme.PrimaryColor
        )};
        }
      `}

    & .flexi-button-center{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    ${(props) =>
    props.iconLeft &&
    css`
        padding-left: 0;
        & .flexi-button-icon-left {
          flex-grow: 0;
          width: ${(props) => props.height}px;
          height: ${(props) => props.height}px;
          display: flex;
          align-items: center;
          justify-content: center;
          & img {
            height: ${(props) => props.height / 2}px;
          }
          & i {
            font-size: ${(props) => props.height / 3}px;
          }
        }
      `}
  ${(props) =>
    props.iconRight &&
    css`
      padding-right: 0;
      & .flexi-button-icon-right {
        flex-grow: 0;
        width: ${(props) => props.height}px;
        height: ${(props) => props.height}px;
        display: flex;
        align-items: center;
        justify-content: center;
        & img {
          height: ${(props) => props.height / 2}px;
        }
        & i {
          font-size: ${(props) => props.height / 3}px;
        }
      }
    `}
  & span{
    position: relative;
    z-index: 1;
  }
  ${(props) =>
    props.progress &&
    css`
      overflow: hidden;
      &:after {
        content: '';
        display: block;
        width: 0;
        height: 100%;
        background: rgba(255, 255, 255, 0.1);
        ${(props) =>
        props.pale &&
        css`
            background: ${(props) =>
            transparentize(
              0.9,
              darken(
                0.1,
                props.color ? props.color : props.theme.PrimaryColor
              )
            )};
          `}
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        animation: ${Progress} 1.5s linear infinite alternate both;
      }
      &:hover {
        & span.flexi-button-center {
          filter: blur(0.5px);
        }
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.3);
      ${(props) =>
        props.pale &&
        css`
          background: none;
          border: 1px dashed rgba(0, 0, 0, 0.3);
        `}
      &:hover {
        background-color: rgba(0, 0, 0, 0.15);
        color: rgba(0, 0, 0, 0.3);
        ${(props) =>
        props.pale &&
        css`
            background: none;
            border: 1px dashed rgba(0, 0, 0, 0.25);
          `}
        & span {
          filter: blur(0.5px);
        }
      }
    `}
  ${(props) =>
    props.hide &&
    css`
      display: none;
    `}
`;

export const Button = (props) => {
  return (
    <ButtonWrapper
      {...props}
      onClick={!props.progress && !props.disabled ? props.onClick : () => { }}
    >
      {props.iconLeft && (
        <span className='flexi-button-icon-left'>
          {props.progress ? (
            <i className={`flexibull-spin6 animate-spin`} />
          ) : (
              props.iconLeft
            )}
        </span>
      )}
      {props.icon && <span className='flexi-button-center'>{props.icon}</span>}
      {props.children && (
        <span className='flexi-button-center'>{props.children}</span>
      )}
      {props.iconRight && (
        <span className='flexi-button-icon-right'>
          {props.progress ? (
            <i className={`flexibull-spin6 animate-spin`} />
          ) : (
              props.iconRight
            )}
        </span>
      )}
    </ButtonWrapper>
  );
};

Button.defaultProps = {
  block: false,
  spaceLeft: false,
  spaceRight: false,
  round: false,
  fontColor: '#fff',
  height: 38,
  pad: '0 15px',
  elevate: false,
  pale: false,
};

Button.propTypes = {
  block: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  children: PropTypes.any,
  height: PropTypes.number,
  fontColor: PropTypes.string,
  round: PropTypes.bool,
  pad: PropTypes.string,
  font: PropTypes.number,
  elevate: PropTypes.any,
  pale: PropTypes.bool,
  progress: PropTypes.bool,
  width: PropTypes.number,
};
