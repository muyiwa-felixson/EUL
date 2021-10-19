import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { Theme, media } from './theme';
import PropTypes from 'prop-types';
import { Global } from './globalstyles';
import './fonts/fontello/css/flexibull-2-0.css';
import './fonts/fontello/css/animation.css';
import './fonts/fonts.css';
import { SideBar, TopBar } from './navigation';
import { Text } from './typo';

const PageWrapper = styled('div').attrs({
  className: 'flexi-layout',
  id: 'flexi-layout',
})`
  min-width: 100vw;
  min-height: 100vh;
  font-family: ${(props) => props.theme.PrimaryFont};
  font-size: ${(props) => props.theme.PrimaryFontSize};
  transition: padding 0.3s ease-out;
  position: relative;
  ${(props) =>
    props.withSideNav &&
    css`
      padding-left: ${props.openWidth};
      ${props.collapseSide &&
        css`
          padding-left: ${props.closeWidth};
        `}
      ${props.floatSideNav &&
        css`
          padding-left: 0;
        `}
    `}
  ${(props) => props.withTopNav && css``}
`;

export const LayoutContext = React.createContext();

export const Layout = (props) => {
  let theme = { ...Theme };
  props.theme && (theme = { ...Theme, ...props.theme });

  const node = useRef();
  const [layoutVar, setLayoutVar] = useState({
    collapseSide: props.sideNavProps && props.sideNavProps.float ? true : false,
    floatSide: props.sideNavProps && props.sideNavProps.float,
  });

  const [pageVar, setPageVar] = useState({
    themeColor: false,
    title: '',
  });

  const setLayout = (elem) => {
    setLayoutVar({ ...layoutVar, ...elem });
  };

  const setPage = (elem) => {
    setPageVar((prevProps) => ({ ...prevProps, ...elem }));
  };

  const handleResize = () => {
    node.current.clientWidth < 600
      ? setLayout({ floatSide: true, collapseSide: true })
      : setLayout({ floatSide: false, collapseSide: false });
  };

  useEffect(() => {
    if (props.sideNavProps && !props.sideNavProps.float) {
      window.addEventListener('resize', handleResize);
      window.addEventListener('load', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('load', handleResize);
      };
    }
  }, [node]);

  return (
    <LayoutContext.Provider value={{ layoutVar, setLayout, setPage }}>
      <ThemeProvider
        theme={
          pageVar.themeColor
            ? { ...theme, ...{ PrimaryColor: pageVar.themeColor } }
            : theme
        }
      >
        <Global />
        <PageWrapper
          ref={node}
          withSideNav={props.withSideNav}
          withTopNav={props.withTopNav}
          floatSideNav={layoutVar.floatSide}
          collapseSide={layoutVar.collapseSide}
          openWidth={props.sideNavOpenWidth}
          closeWidth={props.sideNavCloseWidth}
        >
          {props.withTopNav && (
            <TopBar
              {...props.topNavProps}
              height={props.topNavHeight}
              title={pageVar.title}
              spaceLeft={
                props.withSideNav && !layoutVar.floatSide
                  ? layoutVar.collapseSide
                    ? props.sideNavCloseWidth
                    : props.sideNavOpenWidth
                  : '0'
              }
              toogle={props.withSideNav}
            >
              {props.topNavContent}
            </TopBar>
          )}
          {props.withSideNav && (
            <SideBar
              collapse={layoutVar.collapseSide}
              {...props.sideNavProps}
              float={layoutVar.floatSide}
              openWidth={props.sideNavOpenWidth}
              closeWidth={props.sideNavCloseWidth}
              brandHeight={props.topNavHeight}
            >
              {props.sideNavContent}
            </SideBar>
          )}
          {props.children}
        </PageWrapper>
      </ThemeProvider>
    </LayoutContext.Provider>
  );
};

export const Box = styled.div`
    ${(props) =>
      props.width &&
      css`
        width: ${(props) => props.width};
      `}
      ${(props) =>
        props.background &&
        css`
          background: ${props.background};
        `}
    ${(props) =>
      props.maxWidth &&
      css`
        max-width: ${(props) => props.maxWidth};
      `}
    ${(props) =>
      props.height &&
      css`
        height: ${(props) => props.height};
      `}
    ${(props) =>
      props.maxHeight &&
      css`
        max-height: ${(props) => props.maxHeight};
      `}

      ${(props) =>
      props.minHeight &&
      css`
        min-height: ${(props) => props.minHeight};
      `}
    margin: ${(props) => props.margin};
    ${(props) =>
      props.centered &&
      css`
        margin: 0 auto;
      `}
    ${(props) =>
      props.display &&
      css`
        display: ${(props) => props.display};
      `}
    ${(props) =>
      props.align &&
      css`
        text-align: ${(props) => props.align};
      `}
    ${(props) =>
      props.relative &&
      css`
        position: relative;
      `}
    ${(props) =>
      props.fullHeight &&
      css`
        height: 100%;
      `}
    ${(props) =>
      props.vAlign &&
      css`
        display: flex;
        align-items: center;
      `}
      ${(props) =>
      props.verticalAlign &&
      css`
        display: grid;
        align-items: ${props.verticalAlign};
      `}
    padding: ${(props) => props.pad};
    ${(props)=> props.bordered && css`
      ${props.bordered === true && css`border-bottom: 1px solid ${props.theme.PrimaryBorderColor};`}
      ${props.bordered === "top" && css`border-top: 1px solid ${props.theme.PrimaryBorderColor};`}
      ${props.bordered === "left" && css`border-left: 1px solid ${props.theme.PrimaryBorderColor};`}
      ${props.bordered === "right" && css`border-right: 1px solid ${props.theme.PrimaryBorderColor};`}
      ${props.bordered === "all" && css`border: 1px solid ${props.theme.PrimaryBorderColor};`}
    `}
    ${(props) =>
      props.round &&
      css`
        border-radius: ${(props) =>
          props.round === 'high'
            ? props.theme.SecondaryRadius
            : props.theme.PrimaryRadius};
      `}
`;

export const Grid = styled('div').attrs({ className: 'flexi-grid' })`
  display: ${(props) => (props.inline ? 'inline-grid' : 'grid')};
  grid-template-columns: ${(props) => props.default};
  ${(props) =>
    props.responsive &&
    css`
    ${media.large`
      grid-template-columns: ${(props) => props.default};
    `}
    ${media.desktop`
      grid-template-columns: ${(props) => props.lr};
    `}
    ${media.tablet`
      grid-template-columns: ${(props) => props.md};
    `}
    ${media.phone`
      grid-template-columns: ${(props) => props.sm};
    `}
  `}

  grid-template-rows: ${(props) => props.templateRow};

  ${(props) =>
    props.margin &&
    css`
      margin: ${(props) => props.margin};
    `}

  ${(props) =>
    props.gap &&
    css`
      grid-gap: ${(props) => props.gap};
    `}
    ${(props) =>
      props.columnGap &&
      css`
        column-gap: ${(props) => props.columnGap};
      `}
  ${(props) =>
    props.rowGap &&
    css`
      row-gap: ${(props) => props.rowGap};
    `}
  
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${(props) => props.alignItems};
    `}

  `;

export const Spacer = styled.span`
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};
  height: ${(props) =>
    ['vertical', 'both'].includes(props.direction) && parseInt(props.space)}px;
  width: ${(props) =>
    ['horizontal', 'both'].includes(props.direction) &&
    parseInt(props.space)}px;
`;

Spacer.defaultProps = {
  space: '10px',
  direction: 'vertical',
  inline: false,
};

Spacer.propTypes = {
  space: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  direction: PropTypes.string,
  inline: PropTypes.bool,
};

const GridRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  display: ${(props) => (props.inline ? 'inline-grid' : 'grid')};
  ${(props) =>
    props.gap &&
    css`
      grid-gap: ${(props) => props.gap};
    `}
    ${(props) =>
      props.columnGap &&
      css`
        column-gap: ${(props) => props.columnGap};
      `}
  ${(props) =>
    props.rowGap &&
    css`
      row-gap: ${(props) => props.rowGap};
    `}
  
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${(props) => props.alignItems};
    `}

    ${(props) =>
      props.margin &&
      css`
        margin: ${(props) => props.margin};
      `}
`;

export const GridCell = styled(Box)`
  grid-column-end: span ${(props) => props.span};
  ${media.desktop`
      grid-column-end: span ${(props) => props.lr};
  `}
  ${media.tablet`
      grid-column-end: span ${(props) => props.md};
  `}
  ${media.phone`
      grid-column-end: span ${(props) => props.sm};
  `}
`;

export const GridRow = (props) => {
  let myChildren = [];
  if (props.children) {
    myChildren = !Array.isArray(props.children)
      ? [props.children]
      : props.children;
  }
  useEffect(() => {
    myChildren = !Array.isArray(props.children)
      ? [props.children]
      : props.children;
  }, [props.children]);
  const keyGen = new Date().getTime();
  return (
    <GridRowWrapper {...props}>
      {props.children &&
        myChildren.map((elem, index) => (
          <GridCell key={`grid-item-${index}-${keyGen}`} {...elem.props}>
            {elem.props.children && elem.props.children}
          </GridCell>
        ))}
    </GridRowWrapper>
  );
};

GridRow.defaultProps = {
  inline: false,
  gap: '10px',
  alignItems: 'stretch',
};

GridRow.propTypes = {
  inline: PropTypes.bool,
  gap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  alignItems: PropTypes.string,
};

Grid.defaultProps = {
  inline: false,
  default: 'repeat(6, 1fr)',
  lr: 'repeat(3, 1fr)',
  md: 'repeat(2, 1fr)',
  sm: '1fr',
  gap: '10px',
  alignItems: 'stretch',
  responsive: true,
};

Grid.propTypes = {
  inline: PropTypes.bool,
  default: PropTypes.string,
  sm: PropTypes.string,
  lr: PropTypes.string,
  md: PropTypes.string,
  gap: PropTypes.string,
  gridGap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  templateRow: PropTypes.string,
  alignItems: PropTypes.string,
  responsize: PropTypes.bool,
};

Layout.defaultProps = {
  withSideNav: false,
  withTopNav: false,
  sideNavOpenWidth: '200px',
  sideNavCloseWidth: '60px',
  topNavHeight: '100px',
};
Layout.propTypes = {
  theme: PropTypes.any,
  withSideNav: PropTypes.bool,
  withTopNav: PropTypes.bool,
  sideNavOpenWidth: PropTypes.string,
  sideNavCloseWidth: PropTypes.string,
  sideNavProps: PropTypes.any,
  topNavProps: PropTypes.any,
  sideNavContent: PropTypes.any,
};

Box.defaultProps = {
  pad: 0,
  margin: 0,
};

Box.propTypes = {
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  centered: PropTypes.bool,
  display: PropTypes.string,
  relative: PropTypes.bool,
  fullHeight: PropTypes.bool,
  align: PropTypes.string,
  padding: PropTypes.any,
  margin: PropTypes.any,
  vAlign: PropTypes.bool,
  progress: PropTypes.bool,
  background: PropTypes.string,
  round: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  bordered: PropTypes.bool,
};

export const PageTitle = (props) => {
  const { children } = props;
  const { setPage } = useContext(LayoutContext);
  const setLayoutCallback = useCallback((props) => setPage(props), []);

  useEffect(() => {
    setLayoutCallback({
      title: (
        <Text block size='22px'>
          {children && children}
        </Text>
      ),
    });
  }, [children, setLayoutCallback]);

  return <>{null}</>;
};
