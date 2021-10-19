import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { transparentize } from "polished";

const SelectorWrapper = styled.div`
  display: inline-flex;
  margin: ${props => props.space};
  ${props=> (props.view === "label" || props.view === "custom") && css `
    display: block;
  `}
`;

const SelectorInput = styled.input.attrs(props => ({
  type: props.type,
  className: "flexi-radio"
}))`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  & + label {
    cursor: pointer;
    display: block;
    width: ${props => props.size};
    height: ${props => props.size};
    padding: 10px;
    margin: 0;
    border: 1px solid ${props => props.theme.PrimaryBorderColor};
    border-radius: ${props => props.theme.PrimaryRadius};
    transition: ${props => props.theme.PrimaryTransition};
    color: ${props => props.theme.PrimaryFontColor};
    filter: grayscale(100%);
    & svg {
      fill: ${props => props.theme.PrimaryFontColor};
    }

    ${props =>
      props.view === "icon" &&
      css`
        display: grid;
        grid-template-rows: 30px auto max-content;

        & .flexi-selector-checker {
          text-align: right;
          & i {
            display: inline-flex;
            width: 24px;
            height: 24px;
            color: #fff;
            background: ${props => props.color ? props.color : props.theme.PrimaryColor};
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transform: scale(0);
            transition: all 0.2s ease-out;
          }
        }
        & .flexi-selector-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          & i {
            font-size: ${props => props.iconSize};
          }
          & img,
          svg {
            height: ${props => props.iconSize};
          }
        }
        & .flexi-selector-label {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          & strong {
            font-weight: normal;
            transition: all 0.2s ease-out;
          }
        }
      `}
    ${props =>
      props.view === "label" &&
      css`
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: minmax(40px, max-content) auto;
        grid-gap: 10px;
        text-align: left;
        padding: 15px 10px;

        & .flexi-selector-checker {
          display: flex;
          align-items: center;
          justify-content: center;
          & i {
            display: inline-flex;
            width: 24px;
            height: 24px;
            color: rgba(255,255,255,0);
            background: none;
            border: 2px solid ${props=> props.theme.PrimaryBorderColor};
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transform: scale(1);
            transition: all 0.2s ease-out;
          }
        }
        & .flexi-selector-description {
          padding: 5px 0 0;
          opacity: 0.8;
        }
        & .flexi-selector-label {
          padding: 5px 0 0;
          font-weight: bold;
          transition: all 0.2s ease-out;
          & img {
            max-width: 90%;
            max-height: ${props=> props.iconSize};
          }
        }
      `}
      ${props =>
      props.view === "custom" &&
      css`
        width: auto;
        height: auto;
        display: grid;
        grid-template-columns: 40px auto;
        grid-gap: 10px;
        text-align: left;
        padding: 15px 10px;

        & .flexi-selector-checker {
          max-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          & i {
            display: inline-flex;
            width: 24px;
            height: 24px;
            color: rgba(255,255,255,0);
            background: none;
            border: 2px solid ${props=> props.theme.PrimaryBorderColor};
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transform: scale(1);
            transition: all 0.2s ease-out;
          }
        }
        & .flexi-selector-children{
          padding: 5px 0 0;
          grid-column: 1 / span 2;
        }
        & .flexi-selector-label {
          padding: 5px 0 0;
          font-weight: bold;
          transition: all 0.2s ease-out;

          & img {
            max-width: 90%;
            max-height: ${props=> props.iconSize};
          }
        }
      `}
  }

  &:active,
  :focus {
    outline: none;
  }
  &:hover {
    & + label {
      filter: grayscale(0);
      border: 1px solid ${props => props.color ? props.color : props.theme.PrimaryColor};
    }
  }
  &:disabled {
    & + label {
      border: 1px dashed ${props => props.theme.PrimaryBorderColor};
      color: ${props => transparentize(0.6, props.theme.PrimaryFontColor)};
    }
    &:hover {
      & + label {
      filter: grayscale(100%);
      }
    }
  }
  &:checked {
    & + label {
      filter: grayscale(0);
      border: 1px solid ${props => props.color ? props.color : props.theme.PrimaryColor};
      background: #fff;
      ${props => props.theme.Elevate.high};
      & .flexi-selector-label{
        font-weight: bold;
        color: ${props => props.color ? props.color : props.theme.PrimaryColor};
      }
      & .flexi-selector-checker {
        & i {
          transform: scale(1);
          background: ${props => props.color ? props.color : props.theme.PrimaryColor};
          border: none;
          color: #fff;
        }
      }
      & .flexi-selector-icon {
        color: ${props => props.color ? props.color : props.theme.PrimaryColor};
        & svg {
          fill: ${props => props.color ? props.color : props.theme.PrimaryColor};
        }
      }

      ${props => props.view === "label" && css`
        ${props => props.theme.Elevate.mid};
      `}
    }
  }
`;

const createUUID = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
};

export const CardSelector = props => {
  const { children, space, ...other } = props;
  const id = props.id ? props.id : createUUID();
  return (
    <SelectorWrapper {...props} className="flexi-selector">
      <SelectorInput {...other} id={id} />
      <label htmlFor={id}>
        {props.view === "icon" && (
          <>
            <div className="flexi-selector-checker">
              <i className="flexibull-ok" />
            </div>
            <div className="flexi-selector-icon">
              {props.icon && props.icon}
            </div>
            <div className="flexi-selector-label">
              {props.label && props.label}
            </div>
          </>
        )}
        {props.view === "label" && (
          <>
            <div className="flexi-selector-checker">
              <i className="flexibull-ok" />
            </div>
            <div>
              <div className="flexi-selector-label">{props.label && props.label}</div>
              {props.description && <div className="flexi-selector-description"> {props.description} </div>}
            </div>
          </>
        )}
        {props.view === "custom" && (
          <>
            <div className="flexi-selector-checker">
              <i className="flexibull-ok" />
            </div>
            <div className="flexi-selector-label">{props.label && props.label}</div>
              {props.children && <div className="flexi-selector-children">{props.children} </div>}
          </>
        )}
      </label>
    </SelectorWrapper>
  );
};

CardSelector.defaultProps = {
  type: "radio",
  view: "icon",
  size: "166px",
  iconSize: "30px",
  space: "5px"
};

CardSelector.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  type: PropTypes.string,
  view: PropTypes.string,
  iconSize: PropTypes.string,
  space: PropTypes.string, 
  color: PropTypes.string,
  id: PropTypes.string
};
