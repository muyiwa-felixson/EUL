import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {transparentize} from 'polished';


const AccordionWrapper = styled.div`
/* background: ${props=> props.theme.PrimaryBackground}; */
border: 1px solid ${props => props.color ? props.color : props.theme.PrimaryBorderColor};
border-radius: ${props=> props.theme.SecondaryRadius};
padding: 0;
margin-bottom: ${props=> props.gap};
${props=> props.elevate && props.theme.Elevate[props.elevate]};

& .flexi-accordion-header{
  cursor: pointer; 
  text-align: left;
  padding: 15px;
  font-size: 1em;
  font-weight: bold;
  display: grid;
  background: ${props=> props.headerBg && props.headerBg };
  grid-template-columns: auto max-content;
  ${props=> props.isOpen && css`
    color: ${props=> props.activeColor ? props.activeColor : props.theme.PrimaryColor};
  `}
}
& .flexi-accordion-body{
  border-top: 1px solid ${props => transparentize(0.3, props.color ? props.color : props.theme.PrimaryBorderColor)};
  margin-top: 10;
  padding: 25px 15px;
  text-align: left;
  background: ${props=> props.contentBg && props.contentBg };
  border-bottom-left-radius: ${props=> props.theme.SecondaryRadius};
  border-bottom-right-radius: ${props=> props.theme.SecondaryRadius};
}
& .flexi-accordion-icon{
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${props=> props.theme.PrimaryTransition};
  font-weight: 900;

  ${props=> props.isOpen && css`
    transform: rotateZ(180deg);
  `}
}

${props=> props.mode === "plain" && css`
  border: none;
  border-bottom: 1px solid ${props => props.color ? props.color : props.theme.PrimaryBorderColor};
  border-radius: 0;
  & .flexi-accordion-header{
    border-radius: 0 0 0 0;
    background: none;
  }
  & .flexi-accordion-body{
    border-radius: 0 0 0 0;
    background: none;
    border-top: 1px dashed ${props => transparentize(0.2, props.color ? props.color : props.theme.PrimaryBorderColor)};
  }
`}
`

const AccordionSection = (props) => (
  <AccordionWrapper
    {...props}
  >
    <div className="flexi-accordion-header"
      onClick={() => props.clicker(props.label)}
    >
      {props.label}
      <div className="flexi-accordion-icon">
        <i className={`flexibull-angle-down`} color={props.color} />
      </div>
    </div>
    {props.isOpen && (
      <div className="flexi-accordion-body">
        {props.children}
      </div>
    )}
  </AccordionWrapper>
)

AccordionSection.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
  label: PropTypes.any,
};


export const Accordion = (props) => {
  const [openSections, setOpenSections] = useState({})
  const onClick = label => {
    const isOpen = !!openSections[label];
    setOpenSections({
      [label]: !isOpen,
    })
  };

  useEffect(() => {
    props.preOpen && onClick(props.children[props.preOpen - 1].props.label);
  }, [props.preOpen]);

  const children = props.children ? Array.isArray(props.children) ? props.children : [props.children] : null;

  return (
    <div>
      {children && children.map((child, index) => (
        <AccordionSection
          isOpen={!!openSections[child.props.label]}
          label={child.props.label}
          {...props}
          clicker={onClick}
          key={`flexi-accordion-key-${index}-${child.props.label}`}
        >
          {child.props.children}
        </AccordionSection>
      ))}
    </div>
  );
}

Accordion.defaultProps = {
  gap: '0',
  contentBg:  'none',
  headerBg:  'none',
  mode: 'default',
  elevate: null,
  preOpen: null
};

Accordion.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  color: PropTypes.string,
  contentBg:  PropTypes.string,
  headerBg:  PropTypes.string,
  activeColor:  PropTypes.string,
  gap: PropTypes.string,
  mode: PropTypes.oneOf(["plain","default"]),
  elevate: PropTypes.oneOf(["high","low","mid","fader", null]),
  preOpen: PropTypes.oneOfType([PropTypes.number, PropTypes.any])
};

