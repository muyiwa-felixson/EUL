import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { transparentize, darken } from 'polished';
import { LayoutContext, Spacer } from './layout';
import PropTypes from 'prop-types';
import { Button } from './button';
import { PhotoBox } from '../general.style';

const Toggler = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export const SideLink = styled.li`
  display: block;
  list-style: none;
  margin: 0 20px;

  & a {
    display: grid;
    align-items: center;
    text-decoration: none;
    color: ${(props) => darken(0.1, props.theme.PrimaryFontColor)};
    min-height: ${(props) => props.height};
    text-transform: capitalize;
    font-size: 1.1em;
    border-radius: ${(props) => props.theme.PrimaryRadius};
    & i {
      display: flex;
      height: inherit;
      align-items: center;
      justify-content: center;
    }
    &>div{
      display: flex;
      height: inherit;
      align-items: center;
      justify-content: center;
    }
  }
`;

SideLink.defaultProps = {
  height: '46px',
};
SideLink.propTypes = {
  height: PropTypes.string,
};
const SideBarWrapper = styled.div`
      width: ${(props) => props.openWidth};
      display: block;
      transition: ${(props) => props.theme.PrimaryTransition};
      z-index:  ${(props) => props.zIndex};
      background: ${(props) => props.background};
      position: fixed;
      overflow: hidden;
      height: 100vh;
      top: 0;left:0;

      ${(props) =>
        props.borderline &&
        css`
          border-right: 1px solid ${props.borderline};
        `}

      ${(props) =>
        props.float &&
        css`
          position: fixed;
          background: ${(props) =>
            props.background != 'none' ? props.background : 'white'};
          ${(props) => props.theme.Elevate.fader};
          height: 100vh;
        `}
      ${(props) =>
        props.collapse &&
        css`
          width: ${(props) => props.closeWidth};
          ${props.float &&
            css`
              width: 0;
            `}
        `}
      & .flexi-side-content{
        display: grid;
        grid-template-rows: auto max-content;
          width: ${(props) => props.openWidth};
          padding-top: 20px;
          height: calc(100% - ${(props) => props.brandHeight});
          overflow: auto;
        overflow-x: hidden;
        white-space: nowrap;
        transition: ${(props) => props.theme.PrimaryTransition};

  &::-webkit-scrollbar {
    width: 8px;
    display: none;
  }
  &::-webkit-scrollbar-track {
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : props.theme.PrimaryFade};
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      transparentize(0.8, props.theme.PrimaryFontColor)};
    border-radius: 20px;
    display: none;
    border: 3px solid
      ${(props) => (props.bgColor ? props.bgColor : props.theme.PrimaryFade)};
  }

  &:hover {
    &::-webkit-scrollbar {
      width: 8px;
      display: block;
    }
    &::-webkit-scrollbar-track {
      background-color: ${(props) =>
        props.bgColor ? props.bgColor : props.theme.PrimaryFade};
      display: block;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        transparentize(0.8, props.theme.PrimaryFontColor)};
      border-radius: 20px;
      display: block;
      border: 3px solid
        ${(props) => (props.bgColor ? props.bgColor : props.theme.PrimaryFade)};
    }
  }
      }
      & .flexi-side-brand{
          display: flex;
          align-items: center;
          padding: 20px;
          /* justify-content: center; */
          height: ${(props) => props.brandHeight};
          width: ${(props) => props.openWidth};
          border-bottom: 1px solid ${(props) => props.theme.PrimaryBorderColor};
          & img{
              height: 100%;
          }
      }
      ${SideLink}{
          & a{
              grid-template-columns: calc(${(props) => props.closeWidth} - 20px) auto;
              &:hover{
                  color: ${(props) =>
                    props.activeColor
                      ? props.activeColor
                      : props.theme.PrimaryColor};
              }
              &.active{
                color: #fff;
                  background-color: ${(props) =>
                    props.activeColor
                      ? props.activeColor
                      : props.theme.PrimaryColor};
              } 
          }
      }
`;

const TopBarWrapper = styled.div`
      height: ${(props) => props.height};
      display: grid;
      grid-template-columns: 50px auto max-content;
      align-items: center;
      position: fixed;
      transition: ${(props) => props.theme.PrimaryTransition};
      z-index:  ${(props) => props.zIndex};
      overflow: hidden;
      top:0;
      left:0;
      width: 100%;
      background: ${(props) => props.background};

      ${(props) =>
        props.borderline &&
        css`
          border-bottom: 1px solid ${props.borderline};
        `}

      ${(props) =>
        props.anchor &&
        css`
          position: sticky;
        `}
      ${(props) =>
        props.scrollable &&
        css`
          position: absolute;
        `}
      ${(props) => props.theme.Elevate[props.elevate]};
      padding-left: ${(props) => props.spaceLeft};
      ${(props) =>
        props.sideFloat &&
        css`
          padding-left: 0;
        `}

      & .flexi-top-title{
          padding: 0 20px;
      }
      & .flexi-top-toogle{
          & .flexi-button-center{
              & i{
                  transition: ${(props) => props.theme.PrimaryTransition};
                  ${(props) =>
                    props.sideCollapse &&
                    css`
                      transform: rotateZ(180deg);
                      transform-origin: center;
                    `}
              }
          }
      }
`;

export const SideBarToogle = (props) => {
  const { layoutVar, setLayout } = useContext(LayoutContext);
  return (
    <Toggler
    {...props}
      onClick={() => setLayout({ collapseSide: !layoutVar.collapseSide })}
    >
      {props.children}
    </Toggler>
  );
};
export const SideBar = (props) => {
  const listmenu = props.menuList
    ? Array.isArray(props.menuList)
      ? props.menuList
      : [props.menuList]
    : null;
    const footlistmenu = props.footMenuList
    ? Array.isArray(props.footMenuList)
      ? props.footMenuList
      : [props.footMenuList]
    : null;

  return (
    <SideBarWrapper {...props}>
      <div className='flexi-side-brand'>{props.brand}</div>
      <div className='flexi-side-content'>
        <div>
        {listmenu &&
          listmenu.map((elem, index) => {
            return elem.navlink ? (
              <SideLink key={`flexi-menu-list-${index}-${elem.label}`}>
                <NavLink to={elem.navlink}>
                  <i className={elem.icon} />
                  <span>{elem.label}</span>
                </NavLink>
              </SideLink>
            ) : (
              <SideLink key={`flexi-menu-list-${index}-${elem.label}`}>
                <a href={elem.link}>
                  <i className={elem.icon} />
                  <span>{elem.label}</span>
                </a>
              </SideLink>
            );
          })}
        </div>
        <div>
        {footlistmenu &&
          footlistmenu.map((elem, index) => {
            return elem.navlink ? (
              <SideLink key={`flexi-menu-list-${index}-${elem.label}`}>
                <NavLink to={elem.navlink}>
                  {typeof(elem.icon) === "string" ? 
                  <i className={elem.icon} />
                  : 
                    elem.icon
                  }
                  <span>{elem.label}</span>
                </NavLink>
              </SideLink>
            ) : (
              <SideLink key={`flexi-menu-list-${index}-${elem.label}`}>
                <a href={elem.link}>
                  <i className={elem.icon} />
                  <span>{elem.label}</span>
                </a>
              </SideLink>
            );
          })}
          <Spacer space="20px" />
        </div>
        </div>
        {props.children}
    </SideBarWrapper>
  );
};

export const TopBar = (props) => {
  const { layoutVar } = useContext(LayoutContext);
  return (
    <TopBarWrapper
      {...props}
      sideCollapse={layoutVar.collapseSide}
      sideFloat={layoutVar.sideFloat}
    >
      {props.toogle && (
        <div className='flexi-top-toogle'>
          <SideBarToogle>
            <Button plain spaceLeft icon={<i className='flexibull-left' />} />
          </SideBarToogle>
        </div>
      )}
      <div className='flexi-top-title'>{props.title}</div>
      <div className='flexi-top-content'>{props.children}</div>
    </TopBarWrapper>
  );
};

SideBar.defaultProps = {
  borderline: 'none',
  openWidth: '100px',
  closeWidth: '60px',
  collapse: false,
  float: false,
  zIndex: 990,
  background: 'none',
};
SideBar.propTypes = {
  borderline: PropTypes.string,
  openWidth: PropTypes.string,
  closeWidth: PropTypes.string,
  collapse: PropTypes.bool,
  float: PropTypes.bool,
  zIndex: PropTypes.number,
  background: PropTypes.string,
  brand: PropTypes.any,
  brandHeight: PropTypes.string,
  menuList: PropTypes.any,
};

TopBar.defaultProps = {
  borderline: 'none',
  height: '80px',
  anchor: false,
  zIndex: 989,
  background: '#fff',
  elevate: 'fader',
};
TopBar.propTypes = {
  borderline: PropTypes.string,
  height: PropTypes.string,
  anchor: PropTypes.bool,
  zIndex: PropTypes.number,
  background: PropTypes.string,
  elevate: PropTypes.string,
  scrollable: PropTypes.bool,
  title: PropTypes.any,
  spaceLeft: PropTypes.string,
  toogle: PropTypes.bool,
};
