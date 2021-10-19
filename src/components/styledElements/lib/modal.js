import React from "react";
import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";
import PropTypes from "prop-types";

const ModalWrapper = styled("div").attrs({ className: "flexi-modal" })`
  top: 0;
  left: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: none;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  ${(props) =>
    props.open &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.bottom &&
    css`
      align-items: flex-end;
    `}

  ${(props) =>
    props.left &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
    `}
`;

const ModalOverlay = styled("div").attrs({ className: "flexi-modal-overlay" })`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: ${(props) => props.overlayOpacity};
  background-color: ${(props) => props.overlayColor};
  display: block;
  z-index: 1000;
`;

export const ModalBody = styled("div").attrs({ className: "flexi-modal-body" })`
  flex-grow: 1;
  width: 96%;
  margin: 2%;
  ${(props) =>
    props.width &&
    css`
      max-width: ${(props) => props.width};
    `}
  z-index: 1000;
  position: relative;
  border-radius: ${(props) => props.theme.SecondaryRadius};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.PrimaryFade};
  color: ${(props) => props.theme.PrimaryFontColor};
  ${(props) =>
    props.elevate &&
    css`
      ${(props) =>
        props.elevate != "low"
          ? props.theme.Elevate[props.elevate]
          : props.theme.Elevate.low};
    `}

    ${(props) =>
      props.sidedRight &&
      css`
        width: 100%;
        max-width: ${(props) => props.width};
        margin: 0;
        height: 100vh;
        position: fixed;
        top: 5px;
        right: 5px;
        overflow: auto;
      `}
  
    ${(props) =>
      props.sidedLeft &&
      css`
        width: 100%;
        max-width: ${(props) => props.width};
        margin: 0;
        height: 100vh;
        position: fixed;
        top: 5px;
        left: 5px;
        overflow: auto;
      `}
`;

export const ModalClose = styled("div").attrs({
  className: "flexi-modal-close",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 30px;
  width: 30px;
  top: 26px;
  right: 30px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  transition: ${(props) => props.theme.PrimaryTransition};
  cursor: pointer;
  color: ${(props) => transparentize(0.6, props.theme.PrimaryFontColor)};
  z-index: 1002;

  &:hover {
    color: ${(props) => darken(0.4, props.theme.PrimaryFontColor)};
  }
`;

export const ModalFooter = styled("div").attrs({
  className: "flexi-modal-footer",
})`
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: ${(props) =>
    transparentize(
      0.9,
      props.footercolor ? props.footercolor : props.theme.PrimaryGreyMid
    )};
`;

export const Modal = (props) => {
  return (
    <ModalWrapper {...props}>
      <ModalOverlay
        onClick={props.outerclick ? props.onClose : () => {}}
        overlayColor={props.overlayColor}
        overlayOpacity={props.overlayOpacity}
      />
      {props.children}
    </ModalWrapper>
  );
};

Modal.defaultProps = {
  open: false,
  overlayColor: "#000",
  overlayOpacity: 0.4,
  width: "90vw",
  center: true,
};

Modal.propTypes = {
  open: PropTypes.bool,
  width: PropTypes.string,
  overlayColor: PropTypes.string,
  overlayOpacity: PropTypes.number,
  bgColor: PropTypes.string,
  onClose: PropTypes.any,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  center: PropTypes.bool,
  sidedRight: PropTypes.bool,
  sidedLeft: PropTypes.bool,
  footercolor: PropTypes.string,
};
