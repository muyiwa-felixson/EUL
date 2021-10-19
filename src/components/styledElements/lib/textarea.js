import React from 'react';
import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';
import PropTypes from 'prop-types';

const TextAreaWrapper = styled.div`
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

  ${({ spaceLeft }) =>
    spaceLeft &&
    css`
      margin-left: ${spaceLeft.length >= 3 ? spaceLeft : '10px'};
    `};

  ${({ spaceRight }) =>
    spaceRight &&
    css`
      margin-right: ${spaceRight.length >= 3 ? spaceRight : '10px'};
    `};
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
  & .flexi-text-area {
    width: 100%;
    min-height: ${({ height }) => height};
    background-color: #fff;
    padding: 10px;
    font-family: inherit;
    border: 1px solid ${({ theme }) => theme.PrimaryBorderColor};
    border-radius: ${({ theme }) => theme.PrimaryRadius};
    outline: none;
    transition: ${({ theme }) => theme.PrimaryTransition};
    box-sizing: border-box;
    resize: ${({ resizeable }) => (resizeable ? 'both' : 'none')};
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
      ${({ theme }) => theme.Elevate.mid};
    }

    &:disabled {
      background-color: ${({ theme }) => lighten(0.1, theme.PrimaryGreyLight)};
      border-color: ${({ theme }) => lighten(0.2, theme.PrimaryInputOutline)};
    }

    &:disabled::placeholder {
      color: ${({ theme }) => lighten(0.3, theme.PrimaryFontColor)};
    }
  }
  & .error {
    color: ${({ theme }) => theme.PrimaryRed};
    display: block;
    margin-top: 4px;
  }
`;

export const TextArea = props => {
  const { name, label, desc, error, width, height, ...rest } = props;
  
  return (
    <TextAreaWrapper {...props}>
      {label || desc ? (
        <div className="flexi-label-wrapper">
          {label !== undefined && <label htmlFor={name}>{label}</label>}
          {desc !== undefined && <span className="desc">{desc}</span>}
        </div>
      ) : null}
      <textarea className="flexi-text-area" placeholder="Address" {...rest} />
      {error && <em className="error">{error}</em>}
    </TextAreaWrapper>
  );
};

TextArea.defaultProps = {
  width: '400px',
  height: '42px',
  resizeable: false,
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  block: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  desc: PropTypes.string,
  error: PropTypes.any,
  size: PropTypes.any,
  spaceLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceTop: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  spaceBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  disabled: PropTypes.bool,
  resizeable: PropTypes.bool,
  rows: PropTypes.number,
};
