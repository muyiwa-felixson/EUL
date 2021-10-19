import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Theme } from "./theme";
import { darken, lighten, transparentize } from "polished";

const LoaderWrapper = styled.div`
  display: inline-block;
  & svg {
    animation-play-state: running;
    animation-delay: 0s;
    height: ${props=> props.size}px;
    width: ${props=> props.size}px;
    background: none;
    align-self: center;
    & .defs {
      animation-play-state: running;
      animation-delay: 0s;
    }
  }
  ${(props) =>
    props.fullscreen &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 3000;
      background-color: ${(props) =>
        transparentize(1 - props.opacity, props.overlay)};
      display: grid;
      place-content: center;
    `}
  ${(props) =>
    props.section &&
    css`
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      place-content: center;
    `}
`;

const defaultColors = [
  Theme.PrimaryColor,
  Theme.PrimaryRed,
  Theme.PrimaryYellow,
  Theme.PrimaryGreen,
  Theme.PrimaryColor_dark_10,
  Theme.PrimaryColor_light_10,
];

export const Loader = (props) => {
  let colors = [...props.colors, ...defaultColors];
  let newprops = {...props};
  let duration = newprops.duration;

  if (newprops.mini) {
    newprops.size = newprops.size != 80 ? newprops.size : 22;
    newprops.color = newprops.color ? newprops.color : Theme.PrimaryColor;
  }

  if (newprops.grey) {
    colors = [
      Theme.PrimaryGrey,
      darken(0.1, Theme.PrimaryGrey),
      lighten(0.05, Theme.PrimaryGrey),
      lighten(0.1, Theme.PrimaryGrey),
      lighten(0.15, Theme.PrimaryGrey),
      lighten(0.2, Theme.PrimaryGrey),
    ];
  }
  if (newprops.color) {
    colors = [
        newprops.color,
      darken(0.1, newprops.color),
      lighten(0.05, newprops.color),
      lighten(0.1, newprops.color),
      lighten(0.15, newprops.color),
      lighten(0.2, newprops.color),
    ];
  }

  if (newprops.speed) {
    switch (newprops.speed) {
      case "fast":
        duration = 0.6;
        break;
      case "slow":
        duration = 2;
        break;
      default:
        duration = 1;
    }
  }


  return (
    <LoaderWrapper {...newprops}>
      <svg
        width="80px"
        height="80px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs className="defs">
          <filter
            id="gooey"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            color-interpolation-filters="sRGB"
            className="defs"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="4"
              className="defs"
            ></feGaussianBlur>
            <feComponentTransfer result="cutoff" className="defs">
              <feFuncA
                type="linear"
                slope="10"
                intercept="-5"
                className="defs"
              ></feFuncA>
            </feComponentTransfer>
          </filter>
        </defs>
        <g filter="url(#gooey)" className="defs">
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(258)" className="defs">
              <circle
                cx="25"
                cy="0"
                r="10.5333"
                fill={colors[0]}
                className="defs"
              >
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${4 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${4 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${4 * duration}s`}
                repeatCount="indefinite"
                begin="0s"
                className="defs"
              ></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(276)" className="defs">
              <circle cx="25" cy="0" r="7.6" fill={colors[1]} className="defs">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${2 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${3.3 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${2 * duration}s`}
                repeatCount="indefinite"
                begin={`-${0.6 * duration}s`}
                className="defs"
              ></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(54)" className="defs">
              <circle cx="25" cy="0" r="8.4" fill={colors[2]} className="defs">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${1.3 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${2.6 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${1.3 * duration}s`}
                repeatCount="indefinite"
                begin={`-${1.3 * duration}s`}
                className="defs"
              ></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(312)" className="defs">
              <circle
                cx="25"
                cy="0"
                r="8.13333"
                fill={colors[3]}
                className="defs"
              >
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${1 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${2 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${1 * duration}s`}
                repeatCount="indefinite"
                begin={`-${2 * duration}s`}
                className="defs"
              ></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(330)" className="defs">
              <circle cx="25" cy="0" r="10" fill={colors[4]} className="defs">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${0.8 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${1.3 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${0.8 * duration}s`}
                repeatCount="indefinite"
                begin={`-${2.6 * duration}s`}
                className="defs"
              ></animateTransform>
            </g>
          </g>
          <g transform="translate(50 50)" className="defs">
            <g transform="rotate(108)" className="defs">
              <circle cx="25" cy="0" r="10.8" fill={colors[5]} className="defs">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="6;14;6"
                  dur={`${0.6 * duration}s`}
                  repeatCount="indefinite"
                  begin={`-${0.6 * duration}s`}
                  className="defs"
                ></animate>
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur={`${0.6 * duration}s`}
                repeatCount="indefinite"
                begin={`-${3.3 * duration}s`}
                className="defs"
              ></animateTransform>
            </g>
          </g>
        </g>
      </svg>
    </LoaderWrapper>
  );
};

Loader.defaultProps = {
  colors: [],
  overlay: "white",
  opacity: 0.8,
  duration: 1,
  size: 80
};

Loader.propTypes = {
  colors: PropTypes.array,
  color: PropTypes.string,
  grey: PropTypes.bool,
  overlay: PropTypes.string,
  opacity: PropTypes.number,
  duration: PropTypes.number,
  speed: PropTypes.string,
  size: PropTypes.number,
  section: PropTypes.bool,
  fullscreen: PropTypes.bool,
  mini: PropTypes.bool,
};
