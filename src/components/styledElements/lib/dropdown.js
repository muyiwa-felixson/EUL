import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import PropTypes from 'prop-types';

const DropWrapper = styled.div`
  display: inline-block;
  position: relative;
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
    props.block &&
    css`
      display: flex;
      width: 100%;
    `}
  & .flexi-dropdown-trigger{
    display: inline-block;
    z-index: -1;
    & i{
      z-index: 0;
    }
  }

  & .flexi-dropdown-list{
    position: absolute;
    display: inline-block;
    background: #fff;
    border-radius: ${props => props.theme.PrimaryRadius};
    ${props => props.theme.Elevate.fader};
    border: 1px solid ${props => props.theme.PrimaryBorderColor};
    list-style: none;
    margin:10px 0;
    padding:0;
    word-wrap: nowrap;
    width: max-content;
    z-index: 20;
    ${props =>
    props.width &&
    css`
        min-width: ${props => props.width};
      `}
    display: none;

    &:after{
      z-index: 10;
      opacity: 0;
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 30px;
    }
    &:before{
      content: '';
      position: absolute;
      display: block;
      background: inherit;
      width: 14px;
      height: 14px;
      transform: rotate(45deg);
      transform-origin: center;
      border: 1px solid;
      border-color: inherit;
      z-index: 10;
      clip: rect(0, 9px, 9px, 0);
    }

    ${props =>
    props.menuAlign.includes('left') &&
    css`
        left: 0;
        &:before {
          left: 10px;
        }
      `}
    ${props =>
    props.menuAlign.includes('right') &&
    css`
        right: 0;
        &:before {
          right: 10px;
        }
      `}
    ${props =>
    props.menuAlign.includes('top') &&
    css`
        bottom: 100%;
        &:after {
          bottom: -20px;
        }
        &:before {
          bottom: -4px;
          transform: rotate(225deg);
        }
      `}
    ${props =>
    props.menuAlign.includes('bottom') &&
    css`
        top: 100%;
        &:after {
          top: -20px;
        }
        &:before {
          top: -4px;
        }
      `}

    & li{
      display: block;
      min-height: 30px;
      padding: 8px;
      position: relative;
      z-index: 10;
      &.flexi-dropdown-list-item {
        display: grid;
      }
      &:hover{
        background: ${props => transparentize(0.9, props.theme.PrimaryColor)};
      }
    }

  }
  ${props =>
    props.open &&
    css`
      & .flexi-dropdown-list {
        ${props =>
        !props.empty &&
        css`
            display: inline-block;
          `}
      }
    `}
  &:hover{
    ${props =>
    props.trigger === 'hover' &&
    css`
        & .flexi-dropdown-list {
          ${props =>
        !props.empty &&
        css`
              display: inline-block;
            `}
        }
      `}
  }
`;

const ListManual = styled.li`
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
  ${props =>
    props.disable &&
    css`
      opacity: 0.6;
      filter: grayscale(90%);
      cursor: default;
      background: ${props => props.theme.PrimaryFade};
      &:hover {
        background: ${props => props.theme.PrimaryFade};
      }
    `}
`;

const ListWrapper = styled.li`
  &.flexi-dropdown-list-item {
    display: grid;
    grid-template-columns: ${props => props.iconLeft && '30px'} auto ${props =>
    props.iconRight && '30px'};
    width: 100%;
    line-height: 20px;
    & div {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    & i {
      display: flex;
      width: 30px;
      height: 20px;
      align-items: center;
      &.flexi-icon-left {
        justify-content: flex-start;
      }
      &.flexi-icon-right {
        justify-content: flex-end;
      }
    }
    ${props =>
    props.onClick &&
    css`
        cursor: pointer;
      `}
    ${props =>
    props.disable &&
    css`
        opacity: 0.6;
        filter: grayscale(90%);
        cursor: default;
        background: ${props => props.theme.PrimaryFade};
        &:hover {
          background: ${props => props.theme.PrimaryFade};
        }
      `}
  }
`;

const ListRender = props => {
  return (
    <ListWrapper className="flexi-dropdown-list-item" {...props}>
      {props.iconLeft && <i className={`${props.iconLeft} flexi-icon-left`} />}
      <div>{props.label}</div>
      {props.iconRight && <i className={`${props.iconRight} flexi-icon-right`} />}
    </ListWrapper>
  );
};

export const DropDown = props => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  let Aligner = props.menuAlign.split(' ');
  let myChildren = [];
  if (props.children) {
    myChildren = !Array.isArray(props.children) ? [props.children] : props.children;
  }

  return (
    <DropWrapper
      {...props}
      menuAlign={Aligner}
      open={open}
      ref={node}
      onClick={() => (props.trigger === 'click' ? setOpen(!open) : {})}
      empty={!props.menuList && !props.children}
    >
      <div className="flexi-dropdown-trigger">{props.label}</div>
      {(props.trigger === 'hover' || open) && (
        <ul className="flexi-dropdown-list">
          {props.menuList &&
            props.menuList.map((elem, index) => (
              <ListRender {...elem} key={`dropdown-list-item-${elem.label}-${index}`} />
            ))}
          {props.children &&
            myChildren.map((elem, index) => (
              <ListManual
                {...elem.props}
                key={`dropdown-list-item-${elem.key}-${index}`}
                title={`dropdown-list-item-${elem.key}-${index}`}
              />
            ))}
        </ul>
      )}
    </DropWrapper>
  );
};

DropDown.defaultProps = {
  menuAlign: 'left bottom',
  trigger: 'hover',
  block: false,
  spaceLeft: false,
  spaceRight: false,
};

DropDown.propTypes = {
  menuAlign: PropTypes.string,
  label: PropTypes.any,
  children: PropTypes.any,
  trigger: PropTypes.oneOf(['hover', 'click']),
  width: PropTypes.string,
  block: PropTypes.bool,
  spaceLeft: PropTypes.any,
  spaceRight: PropTypes.any,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      iconLeft: PropTypes.string,
      iconRight: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
};
