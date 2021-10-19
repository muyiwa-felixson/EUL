import React from 'react';
import styled, { css, keyframes, ThemeConsumer } from 'styled-components';
import { default as Rselect } from 'react-select';
import { transparentize, darken } from 'polished';

import PropTypes from 'prop-types';

const Grow = keyframes`
100%{
  transform: scale(1);
}`;

const SelectWrapper = styled('div').attrs({ className: 'flexi-select' })`
    display: inline-flex;
    align-items: center;
    position: relative;
    vertical-align:top;
    /* font-smooth: auto; */
    cursor: pointer;
    min-height: ${props => props.height}px;
    width: ${props => props.width}px;
    ${props =>
      props.spaceLeft &&
      css`
        margin-left: ${props => (props.spaceLeft.length >= 3 ? props.spaceLeft : '10px')};
      `}
    ${props =>
      props.spaceRight &&
      css`
        margin-right: ${props => (props.spaceRight.length >= 3 ? props.spaceRight : '10px')};
      `}
    ${props =>
      props.spaceTop &&
      css`
        margin-top: ${props => (props.spaceTop.length >= 3 ? props.spaceTop : '20px')};
      `}
    ${props =>
      props.spaceBottom &&
      css`
        margin-bottom: ${props => (props.spaceBottom.length >= 3 ? props.spaceBottom : '25px')};
      `}
    ${props =>
      props.block &&
      css`
        display: flex;
        width: 100%;
      `}

  &>div{
    min-height: inherit;
    display: block;
    width: 100%;

    & .flexi__control{
        width: 100%;
        border-radius: ${props => props.theme.PrimaryRadius};
        border: 1px solid ${props =>
          props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor};
        min-height: inherit;
        display: grid;
        /* z-index: 2; */
        grid-template-columns: calc(100% - ${props =>
          props.height}px) minmax(max-content, ${props => props.height}px);

        & .flexi__value-container{
          display: flex;
          align-items: center;
          & .flexi__placeholder{
            display: flex;
            align-items: center;
            height: ${props => props.height}px;
          }
          & .flexi__single-value{
            font-weight: 500;
            width: 100%;
            & .flexi-select-option-element-subtext{
              display: none;
            }
            & .flexi-select-option-element-label{
                grid-template-columns: ${props => (props.height * 0.5) + 10}px auto;
              }
              & .flexi-select-option-element-image{
                height: ${props => props.height * 0.5}px;
                width: ${props => props.height * 0.5}px;
              }
          }
          &.flexi__value-container--is-multi{
            padding: ${props => props.height * 0.2}px 10px;
            & .flexi__multi-value{
              height: ${props => props.height * 0.6}px;
              border-radius: ${props => (props.height * 0.6) / 2}px;
              /* background: ${props => transparentize(0.8, props.color ? props.color : props.theme.PrimaryColor)}; */
              border: 1px solid ${props=> props.theme.PrimaryBorderColor};
              box-sizing: content-box;

              & .flexi__multi-value__label{
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${props =>
                  darken(0.2, props.color ? props.color : props.theme.PrimaryColor)};
                padding: 0 10px;
              }
              & .flexi__multi-value__remove{
                border-radius: ${props => (props.height * 0.5) / 2}px;
                width: ${props => props.height * 0.5}px;
                height: ${props => props.height * 0.5}px;
                margin-top: ${props => props.height * 0.05}px;
                margin-right: ${props => props.height * 0.05}px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: ${props =>
                  transparentize(0.2, props.color ? props.color : props.theme.PrimaryGrey)};
                cursor: pointer;
                transition: ${props => props.theme.PrimaryTransition};
                background: ${props =>
                  transparentize(0.9, props.color ? props.color : props.theme.PrimaryGrey)};
                &:hover{
                  background: ${props =>
                    transparentize(0.2, props.color ? props.color : props.theme.PrimaryGrey)};
                  color: #fff;
                }
              }
              & .flexi-select-option-element-label{
                grid-template-columns: ${props => props.height * 0.5}px auto;
              }
              & .flexi-select-option-element-image{
                height: ${props => props.height * 0.5}px;
                width: ${props => props.height * 0.5}px;
               
                margin-left: -5px;
              }
              & .flexi-select-option-element-label-text{
                /* display: none; */
              }
              & .flexi-select-option-element-subtext{
                display: none;
              }
            }
          }
        }
        & .flexi__indicators{
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: ${props => props.height}px;
          height: 100%;
          & .flexi__indicator-separator{
            display: none;
          }
          & .flexi__indicator{
            border-radius: ${props => props.theme.PrimaryRadius};
            background: ${props => props.caretBg};
            display: flex;
            align-items: center;
            justify-content: center;
            padding:0;
            width: ${props => props.height - 4}px;
            height: ${props => props.height - 6}px;
            margin-bottom: 2px;
            & svg{
            width: ${props => props.theme.PrimaryFontSize};
            transition: ${props => props.theme.PrimaryTransition};
            fill: ${props =>
              darken(0.2, props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor)};
            }
          }
        }

        &.flexi__control--is-focused{
          outline: none;
          border: 1px solid ${props =>
            darken(0.1, props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor)};
          ${props => props.theme.Elevate.low};
          & .flexi__indicator{

          }
        }
        &.flexi__control--menu-is-open{
          ${props => props.theme.Elevate.low};
          & .flexi__indicator{
            &.flexi__dropdown-indicator{
            & svg{
              transform: rotateZ(180deg);
              fill: ${props =>
                darken(
                  0.3,
                  props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor
                )};
            }
            }
          }
        }
        &.flexi__control--is-disabled{
          border: 1px dashed ${props =>
            transparentize(
              0.1,
              props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor
            )};
        }
        ${props =>
          props.error &&
          css`
            border: 1px solid ${props => props.theme.PrimaryRed};
            box-shadow: 0 0 2px ${props => props.theme.PrimaryRed};
          `}

        ${props =>
          props.valid &&
          css`
            &:after {
              position: absolute;
              content: '\\2713';
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: ${props => props.theme.PrimaryGreen};
              box-shadow: 0 1px 3px ${props => transparentize(0.5, props.theme.PrimaryGreen)};
              color: #fff;
              border-radius: 50%;
              transform: scale(0);
              height: ${props => props.height * 0.4}px;
              width: ${props => props.height * 0.4}px;
              top: ${props => props.height * 0.3}px;
              right: ${props => props.height * 0.3}px;
              animation-name: ${Grow};
              animation-duration: 0.3s;
              animation-timing-function: cubic-bezier(0.51, 0.32, 0.85, 1.55);
              animation-direction: forwards;
              animation-iteration-count: 1;
              animation-fill-mode: forwards;
            }
          `}
    }
    & .flexi__menu{
      padding: 0;
      z-index: 5;
      border-radius: ${props => props.theme.PrimaryRadius};
      border: 1px solid ${props =>
        darken(0.1, props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor)};
      ${props => props.theme.Elevate.fader};
      & .flexi__menu-list{
        padding:0;
        & .flexi__option{
          min-height: ${props => props.height - 8}px;
          display: grid;
          align-items: center;
          &:hover,:active{
            background-color: ${props =>
              transparentize(
                0.4,
                props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor
              )};
          }
          &.flexi__option--is-focused{
            background-color: ${props =>
              transparentize(
                0.4,
                props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor
              )};
          }
          &.flexi__option--is-selected{
            background-color: ${props => (props.color ? props.color : props.theme.PrimaryColor)};
            font-weight: 500;
          }
        }
      }
    }
  }
    & .flexi-select-label{
      position: absolute;
      display: block;
      top: -20px;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 0.9em;
      cursor: default;
    }
    & .flexi-select-error{
      position: absolute;
      display: block;
      top: 110%;
      color: ${props => props.theme.PrimaryRed};
      font-size: 0.9em;
      font-style: italic;
      left: 0;
      cursor: default;
    }
`;

const ElementOptionWrapper = styled('div').attrs({ className: 'flexi-select-option-element' })`
  display: block;
  .flexi-select-option-element-label {
    display: grid;
    grid-template-columns: ${props => props.iconLeft && '25px'} ${props => props.image && '40px'} auto ${props =>
        props.iconRight && '25px'};
    width: 100%;
    line-height: 20px;
    & div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    & .flexi-select-option-element-image{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${props=> props.theme.PrimaryGrey};
      background-size: cover;
      background-position: center;
    }
    & i {
      display: flex;
      width: 25px;
      height: 20px;
      align-items: center;
      justify-content: center;
    }
  }
  .flexi-select-option-element-subtext {
    font-size: 0.8em;
    opacity: 0.8;
  }
`;
const ElementOption = props => {
  return (
    <ElementOptionWrapper {...props}>
      <div className="flexi-select-option-element-label">
        {props.iconLeft && <i className={props.iconLeft} />}
        <div>{props.label}</div>
        {props.iconRight && <i className={props.iconRight} />}
      </div>
      {props.subText && <div className="flexi-select-option-element-subtext">{props.subText}</div>}
    </ElementOptionWrapper>
  );
};

const ImageOption = props => {
  return (
    <ElementOptionWrapper {...props}>
      <div className="flexi-select-option-element-label">
        {props.image && <div className="flexi-select-option-element-image" style={{ backgroundImage: `url(${props.image})`}} />}
        <div className="flexi-select-option-element-label-text">{props.label}
        {props.subText && <div className="flexi-select-option-element-subtext">{props.subText}</div>}
        </div>
      </div>
      
    </ElementOptionWrapper>
  );
};

export const Select = props => {
  let Options = props.options;
  Options = props.simpleOptions
    ? props.simpleOptions.map(elem => ({ value: elem, label: elem }))
    : Options;
  Options = props.elementOptions
    ? props.elementOptions.map(elem => ({ value: elem.label, label: <ElementOption {...elem} /> }))
    : Options;

    Options = props.imageOptions
    ? props.imageOptions.map(elem => ({ value: elem.value, label: <ImageOption {...elem} /> }))
    : Options;
  return (
    <SelectWrapper {...props}>
      {props.label && <span className="flexi-select-label">{props.label}</span>}
      <Rselect {...props} classNamePrefix="flexi" isDisabled={props.disable} options={Options} />
      {props.error && <span className="flexi-select-error">{props.error}</span>}
    </SelectWrapper>
  );
};

Select.defaultProps = {
  block: false,
  caretBg: 'none',
  spaceLeft: false,
  spaceRight: false,
  height: 42,
  width: 180,
  elevate: false,
  pale: false,
};

Select.propTypes = {
  block: PropTypes.bool,
  caretBg: PropTypes.string,
  color: PropTypes.string,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  spaceTop: PropTypes.any,
  spaceBottom: PropTypes.any,
  height: PropTypes.number,
  fontColor: PropTypes.string,
  elevate: PropTypes.any,
  pale: PropTypes.bool,
  width: PropTypes.number,
  disable: PropTypes.bool,
  error: PropTypes.any,
  valid: PropTypes.bool,
  simpleOptions: PropTypes.array,
  elementOptions: PropTypes.any,
  label: PropTypes.any,
  options: PropTypes.any,
};
