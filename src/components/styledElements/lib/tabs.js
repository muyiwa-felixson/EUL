import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

import { darken } from 'polished';

const TabHeader = styled('div').attrs({ className: 'flexi-tab-header' })`
  border-bottom: 1px solid ${(props) => props.theme.PrimaryGreyLight};
  min-height: 40px;
  margin: 0;
  font-size: ${(props) => props.theme.PrimaryFontSize};
  display: flex;

  ${(props) =>
    props.mode === 'card' &&
    css`
      border-bottom: 1px solid
        ${(props) =>
          props.highlightColor
            ? props.highlightColor
            : props.theme.PrimaryColor};
    `}

  & .flexi-tab-header-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    min-height: 40px;
    position: relative;
    cursor: pointer;
    color: ${(props) => props.labelColor};

    ${(props) =>
      props.justifyTabs &&
      css`
        width: -webkit-fill-available;
      `}

    ${(props) =>
      props.mode === 'card' &&
      css`
        border: 1px solid ${(props) => props.theme.PrimaryGreyLight};
        border-radius: ${(props) => props.theme.SecondaryRadius}
          ${(props) => props.theme.SecondaryRadius} 0 0;
        background-color: ${(props) =>
          props.bgColor
            ? darken(0.25, props.bgColor)
            : props.theme.PrimaryGreyLight};
      `}

    & .flexi-tab-icon-right {
      padding-left: 10px;
    }

    & .flexi-tab-icon-left {
      padding-right: 10px;
    }

    &.disabled {
      opacity: 0.3;
    }

    &.flexi-tab-label-active {
      background: ${(props) => (props.bgColor ? props.bgColor : '#fff')};

      ${(props) =>
        props.mode === 'card' &&
        css`
          border-color: ${(props) =>
            props.highlightColor
              ? props.highlightColor
              : props.theme.PrimaryColor};
        `}

      &::after {
        height: 3px;
        background: ${(props) =>
          props.highlightColor
            ? props.highlightColor
            : props.theme.PrimaryColor};
        content: '';
        position: absolute;
        bottom: -2px;
        width: 100%;
        display: block;

        ${(props) =>
          props.mode === 'card' &&
          css`
            background: ${(props) => props.bgColor};
          `}
      }
    }
  }
`;

const TabContent = styled.div`
  padding: ${(props) => props.padContent};
  display: none;
  background: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};

  ${(props) =>
    props.mode === 'card' &&
    css`
      border-radius: 0 0 ${(props) => props.theme.SecondaryRadius}
        ${(props) => props.theme.SecondaryRadius};

      border-right: 1px solid ${(props) => props.theme.PrimaryColor};

      border-left: 1px solid ${(props) => props.theme.PrimaryColor};

      border-bottom: 1px solid ${(props) => props.theme.PrimaryColor};

      border-color: ${(props) =>
        props.highlightColor ? props.highlightColor : props.theme.PrimaryColor};
    `}

  &.flexi-tab-content-active {
    display: block;
  }
`;

export const Tabs = (props) => {
  const [active, setActive] = useState(props.activeTab);

  const setActiveTab = (id) => {
    setActive(id);
  };

  const {
    mode,
    justifyTabs,
    bgColor,
    padContent,
    labelColor,
    highlightColor,
  } = props;

  let myChildren = [];
  if (props.children) {
    myChildren = !Array.isArray(props.children)
      ? [props.children]
      : props.children;
  }

  if (myChildren.length < 1) {
    return null;
  }

  return (
    <div>
      <TabHeader
        mode={mode}
        justifyTabs={justifyTabs}
        bgColor={bgColor}
        labelColor={labelColor}
        highlightColor={highlightColor}
      >
        {myChildren.map((elem, id) => {
          const { label, disabled, iconRight, iconLeft } = elem.props;

          return (
            <div
              key={id}
              className={`flexi-tab-header-box ${
                id === active ? 'flexi-tab-label-active' : 'flexi-tab-inactive'
              } ${disabled ? 'disabled' : ''}`}
              onClick={(e) => !disabled && setActiveTab(id)}
            >
              {iconRight ? (
                <span className='flexi-tab-icon-left'>{iconRight}</span>
              ) : null}

              <span className='flexi-tab-label'>{label}</span>

              {iconLeft ? (
                <span className='flexi-tab-icon-right'>{iconLeft}</span>
              ) : null}
            </div>
          );
        })}
      </TabHeader>

      {myChildren.map((elem, id) => {
        const { children, disabled } = elem.props;
        let persist = elem.props.persist ? elem.props.persist : true;
        if ((persist || id === active) && !disabled) {
          return (
            <TabContent
              key={id}
              className={
                id === active
                  ? 'flexi-tab-content-active'
                  : 'flexi-tab-content-inactive'
              }
              bgColor={bgColor}
              padContent={padContent}
              mode={mode}
              highlightColor={highlightColor}
            >
              {children}
            </TabContent>
          );
        }
      })}
    </div>
  );
};

Tabs.defaultProps = {
  activeTab: 0,
  persist: true,
  mode: 'transparent',
  justifyTabs: false,
  bgColor: '#fff',
  padContent: '10px',
};

Tabs.propTypes = {
  activeTab: PropTypes.number,
  persist: PropTypes.bool,
  mode: PropTypes.string,
  justifyTabs: PropTypes.bool,
  bgColor: PropTypes.string,
  labelColor: PropTypes.string,
  highlightColor: PropTypes.string,
  padContent: PropTypes.string,
  iconRight: PropTypes.node,
  iconLeft: PropTypes.node,
};
