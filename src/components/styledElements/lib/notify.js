import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { darken, transparentize, lighten } from 'polished';
import { Theme } from './theme';

const Load = keyframes`
  to {
    width: 100%;
  }
`;
const ShowUp = keyframes`
  from{
      right: -50%;
  }
  to {
    right: 0;
  }
`;

const NoticeWrapper = styled('div').attrs({
  className: 'flexi-notification-container',
})`
  display: inline-block;
  z-index: 1200;
  position: fixed;

    

    ${(props) =>
      props.position === 'top-right' &&
      css`
        top: 0;
        right: 0;
      `}
    ${(props) =>
      props.position === 'top-left' &&
      css`
        top: 0;
        left: 0;
      `}
    ${(props) =>
      props.position === 'bottom-right' &&
      css`
        bottom: 0;
        right: 0;
      `}
    ${(props) =>
      props.position === 'bottom-left' &&
      css`
        bottom: 0;
        left: 0;
      `}
`;

const Toast = styled('div').attrs({
  className: 'flexi-notification-message',
})`
  position: relative;
  background: #fff;
  box-sizing: border-box;
  padding: 15px;
  max-width: 350px;
  margin: 10px;

  font-family: ${Theme.PrimaryFontFamily};
  border-radius: 0 0 ${Theme.PrimaryRadius} ${Theme.PrimaryRadius};
  font-size: ${Theme.PrimaryFontSize};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};

  margin: 10px
    ${(props) =>
      (props.status || props.realIcon) &&
      (props.position === 'bottom-left' || props.position === 'top-left')
        ? '40px'
        : '10px'};

  box-shadow: 3px 6px 10px
    ${(props) =>
      transparentize(
        0.8,
        darken(0.35, props.color ? props.color : Theme.PrimaryColor)
      )};

  border-top: 3px solid
    ${(props) =>
      lighten(0.4, props.color ? props.color : Theme.PrimaryColor)};
  color: ${(props) =>
    darken(0.45, props.color ? props.color : Theme.PrimaryColor)};

  animation-name: ${ShowUp};
  animation-duration: 0.2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  & i {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    top: -3px;
    left: -30px;
    height: calc(100% - 5px);
    width: 30px;
    background: ${(props) =>
      props.color ? props.color : Theme.PrimaryColor};
    opacity: 0.8;
    border-radius: 3px 0 0 3px;
  }

  &:after {
    position: absolute;
    content: '';
    opacity: 0.8;
    display: block;
    top: -3px;
    left: 0;
    height: 3px;
    width: 0;
    background: ${(props) =>
      props.color ? props.color : Theme.PrimaryColor};
    ${(props) =>
      props.animation &&
      css`
        animation-name: ${Load};
        animation-duration: ${(props) => props.duration / 1000}s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      `}
  }

  ${(props) =>
    props.status &&
    css`
    &:before{
        content: '${(props) => props.icon}';
        font-family: 'flexisaf', ${Theme.PrimaryFontFamily};
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        position: absolute;
        top:-3px;
        left: -30px;
        height: calc(100% - 5px);
        width: 30px;
        background: ${(props) =>
          props.color ? props.color : Theme.PrimaryColor};
        opacity: 0.8;
        border-radius: ${Theme.PrimaryRadius} 0 0 ${(props) =>
      props.theme.PrimaryRadius};
    }
    `}

  ${(props) =>
    props.hover &&
    css`
      cursor: pointer;

      &:hover {
        &:after {
          -webkit-animation-play-state: paused;
          -moz-animation-play-state: paused;
          -o-animation-play-state: paused;
          animation-play-state: paused;
        }
      }
    `}
`;

class Timer {
  constructor(callback, delay) {
    this.timerId = null;
    this.start = Date.now();
    this.remaining = delay;
    this.callback = callback;

    this.resume();
  }

  pause() {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  }

  resume() {
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    this.timerId = window.setTimeout(this.callback, this.remaining);
  }

  kill() {
    window.clearTimeout(this.timerId);
  }
}

const CreateNotificationContainers = (message, newOption) => {
  let id = `flexi-notification-wrapper-${newOption.position}`;
  let box = document.createElement('div');
  document.getElementById('flexi-layout').appendChild(box);
  box.setAttribute('id', id);
  ReactDOM.render(
    <NoticeWrapper
      position={newOption.position}
      id={`flexi-notification-${newOption.position}`}
    />,
    document.getElementById(id)
  );
  notifyFunction(message, newOption);
};

const hashCode = (props) => {
  var hash = 0;
  if (props.length === 0) {
    return hash;
  }
  for (var i = 0; i < props.length; i++) {
    var char = props.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString();
};

const notifyFunction = (message, options) => {
  let date = new Date();
  const id = hashCode(date.toISOString());
  let box = document.createElement('div');

  document
    .getElementById(`flexi-notification-${options.position}`)
    .appendChild(box);

  box.setAttribute('id', id);

  const timer = new Timer(() => {
    options.autoClose && document.getElementById(id).remove();
  }, options.duration);

  switch (options.status) {
    case 'success':
      options.color = Theme.PrimaryGreen;
      options.icon = options.icon ? options.icon : 'S';
      break;
    case 'error':
      options.color = Theme.PrimaryRed;
      options.icon = options.icon ? options.icon : 'E';
      break;
    case 'info':
      options.color = Theme.PrimaryBlue;
      options.icon = options.icon ? options.icon : 'I';
      break;
    case 'warning':
      options.color = Theme.PrimaryOrange;
      options.icon = options.icon ? options.icon : 'W';
      break;
    default:
      options.color = options.color ? options.color : Theme.PrimaryGreen;
      options.icon = !options.icon && null;
  }

  ReactDOM.render(
    <Toast
      hover={options.pauseOnHover}
      animation={options.autoClose}
      duration={options.duration}
      onMouseOver={() => options.pauseOnHover && timer.pause()}
      onMouseLeave={() => options.pauseOnHover && timer.resume()}
      position={options.position}
      status={options.status}
      icon={options.icon}
      realIcon={options.realIcon}
      minWidth={options.minWidth}
      maxWidth={options.maxWidth}
      onClick={() => {
        document.getElementById(id).remove();
        timer.kill();
      }}
      color={options.color}
    >
      {options.realIcon && <i className={options.realIcon} />}
      {message}
    </Toast>,
    document.getElementById(id)
  );
};

export const Notify = (message, options = {}) => {
  const newOption = {
    ...defaultOptionsProps,
    ...options,
  };

  document.getElementById(`flexi-notification-wrapper-${newOption.position}`)
    ? notifyFunction(message, newOption)
    : CreateNotificationContainers(message, newOption);
};

let defaultOptionsProps = {
  position: 'top-right',
  duration: 5000,
  pauseOnHover: true,
  autoClose: true,
  status: null,
  realIcon: null,
  minWidth: '250px',
  maxWidth: '300px',
};

Notify.defaultProps = {
  options: { ...defaultOptionsProps },
  ...defaultOptionsProps,
};

Notify.propTypes = {
  options: PropTypes.array,
  message: PropTypes.string,
  position: PropTypes.string,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  duration: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  autoClose: PropTypes.bool,
  status: PropTypes.string,
  realIcon: PropTypes.any,
};
