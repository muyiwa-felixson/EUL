import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const TextWrapper = styled.span`
    ${props =>
      props.size &&
      css`
        font-size: ${props => props.size};
      `}
    ${props =>
      props.block &&
      css`
        display: block;
      `}
      ${props =>
      props.font &&
      css`
        font-family: ${props => props.font};
      `}
    ${props =>
      props.italic &&
      css`
        font-style: italic;
      `}
      ${props =>
      props.bold &&
      css`
        font-weight: bold;
      `}
      ${props =>
      props.bolder &&
      css`
        font-weight: 700;
      `}
      ${props =>
      props.light &&
      css`
        font-weight: lighter;
      `}
    
    ${props =>
      props.capitalize &&
      css`
        text-transform: capitalize;
      `}
    ${props =>
      props.uppercase &&
      css`
        text-transform: uppercase;
      `}
    ${props =>
      props.lowercase &&
      css`
        text-transform: lowercase;
      `}
      ${props =>
      props.color &&
      css`
        color: ${props => props.color};
      `}
      ${props =>
      props.opacity &&
      css`
        opacity: ${props => props.opacity};
      `}
`;


export const Text = props => {
  return <TextWrapper {...props}>{props.children}</TextWrapper>;
};

Text.defaultProps = {};

Text.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  block: PropTypes.bool,
  bold: PropTypes.bool,
  capitalize: PropTypes.bool,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  font: PropTypes.string,
  opacity: PropTypes.number
};
TextWrapper.defaultProps = Text.defaultProps;
TextWrapper.propTypes = Text.propTypes;