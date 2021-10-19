import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  position: relative;
  ${({ block, width }) =>
    block
      ? css`
          width: 100%;
        `
      : css`
          width: ${width};
          display: inline-block;
        `};
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
    & .flexi-label-wrapper {
    display: block;
    position: absolute;
    bottom: calc(100% + 8px);

    & label {
      text-transform: capitalize;
      position: relative;
      font-weight: 700;
      display: block;
      font-size: 0.9em;

      &::after {
        ${({ required, theme }) =>
          required &&
          css`
            content: '*';
            color: ${theme.PrimaryRed};
            position: absolute;
            top: -2px;
            margin-left: 2px;
          `};
      }
    }

    & .desc {
      font-weight: normal;
      font-size: 0.8em;
    }
  }
  & .flexi-input-affix-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    font-family: ${({ theme }) => theme.PrimaryFont};

    &::after {
      font-family: "flexibull-2-0";
      opacity: 0.3;
      ${({ iconRight }) =>
        iconRight === undefined &&
        css`
      ${props =>
        props.type === 'search' &&
        css`
          /* content: '\\e803'; */
        `}
        ${props =>
          props.type === 'phone' &&
          css`
            content: '\\e80c';
          `}
        ${props =>
          props.type === 'password' &&
          css`
            content: '\\e80a';
          `}
        ${props =>
          props.type === 'number' &&
          css`
            content: '\\e80d';
          `}
        ${props =>
          props.type === 'text' &&
          css`
            content: '\\e80e';
          `}
        ${props =>
          props.type === 'email' &&
          css`
            content: '\\f2b7';
          `}
      `};
      position: absolute;
      right: 10px;
    }

    & .flexi-input-prefix {
      position: absolute;
      height: 42px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      left: 0;
      opacity: 0.4;
    }
    & .flexi-input-suffix {
      position: absolute;
      height: 42px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      right: 0;
      opacity: 0.4;
    }
    & .flexi-input {
      width: 100%;
      height: ${props=> props.height};
      line-height: 150%;
      padding-left: ${({ iconLeft }) => (iconLeft ? '35px' : '15px')};
      padding-right: ${({ iconRight }) => (iconRight ? '35px' : '15px')};
      background-color: #fff;
      border: 1px solid ${props => props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor };
      border-radius: ${({ theme }) => theme.PrimaryRadius};
      ${props=> props.round && css`
        border-radius: ${props=> parseInt(props.height)/2}px;
        padding-left: ${props=> parseInt(props.height)/2}px;
      `}
      outline: none;
      transition: ${({ theme }) => theme.PrimaryTransition};
      box-sizing: border-box;
      color: ${({ theme }) => theme.PrimaryFontColor};
      ${({ error, theme }) =>
        error &&
        css`
          border: 1px solid ${theme.PrimaryRed};
          box-shadow: 0 0 2px ${theme.PrimaryRed};
        `};

      &::placeholder {
        color: ${({ theme }) => lighten(0.3, theme.PrimaryFontColor)};
      }

      &:focus {
        border-color: ${({ theme }) => theme.PrimaryColor};
        ${({ theme }) => theme.Elevate.low};
      }

      &:disabled {
        background-color: ${({ theme }) => lighten(0.1, theme.PrimaryGreyLight)};
        border: 1px dashed ${props => transparentize( 0.1, props.borderColor ? props.borderColor : props.theme.PrimaryBorderColor )};
      }

      &:disabled::placeholder {
        color: ${({ theme }) => lighten(0.3, theme.PrimaryFontColor)};
      }
    }
  }
  & .error {
    color: ${({ theme }) => theme.PrimaryRed};
    display: block;
    margin-top: 4px;
  }
`;
export const Input = props => {
  const {
    label,
    name,
    description,
    block,
    width,
    error,
    icon,
    size,
    desc,
    spaceLeft,
    spaceRight,
    height,
    iconLeft,
    iconRight,
    ...rest
  } = props;

  return (
    <InputWrapper {...props}>
      {label || desc ? (
        <div className="flexi-label-wrapper">
          {label !== undefined && <label htmlFor={name}>{label}</label>}
          {desc !== undefined && <span className="desc">{desc}</span>}
        </div>
      ) : null}
      <div className="flexi-input-affix-wrapper">
        {iconLeft && (
          <span className="flexi-input-prefix">
            <i className={iconLeft} />
          </span>
        )}
        <input name={name} className="flexi-input" {...rest} />
        {iconRight && (
          <span className="flexi-input-suffix">
            <i className={iconRight} />
          </span>
        )}
      </div>
      {error && <em className="error">{error}</em>}
    </InputWrapper>
  );
};

Input.defaultProps = {
  type: 'text',
  height: "42px",
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number', 'email', 'password', 'search']),
  borderColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  spaceLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  block: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  desc: PropTypes.string,
  error: PropTypes.any,
  size: PropTypes.any,
};
