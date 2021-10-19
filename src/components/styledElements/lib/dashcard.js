import React from "react";
import styled, { css } from "styled-components";
import { transparentize, darken, readableColor } from "polished";
import PropTypes from "prop-types";
import { Box} from "./";

const DashCardWrapper = styled.div`
  display: grid;
  /* max-width: 400px; */
  min-height: 100px;
  overflow: hidden;
  position: relative;
  /* grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr; */
  align-items: center;
  border-radius: ${props=> props.theme.SecondaryRadius};
  color: ${props=> readableColor(props.color)};
  background: ${props=> props.color};
  ${props=> props.theme.Elevate[props.elevate]};
  transition: ${props=> props.theme.PrimaryTransition};
  padding: 20px;
  ${props=> props.bordered && css`
    border: 1px solid ${props=> props.theme.PrimaryBorderColor};
  `}
  ${props=> props.icon && css`
    & .flexi-card-icon{
      position: absolute;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 10px;
      bottom: 50%;
      right: 0;
      transform: rotateZ(45deg);
      transition: ${props=> props.theme.PrimaryTransition};
      & .flexi-card-icon-i{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        opacity: 0.2;
      }
      ${props=> typeof props.icon === 'boolean' ? css`
      & .flexi-card-icon-i{
        border: 2px solid ${props.iconColor};
        border-radius: ${props.theme.SecondaryRadius};
      }
      `: css`
      & .flexi-card-icon-i{
        border: none;
        border-radius: ${props.theme.SecondaryRadius};
        font-size: 40px;
      }
      `}
    }
  `}
  &:hover{
    ${props=> props.theme.Elevate.high};
    ${props=> props.icon && css`
      & .flexi-card-icon{
          right: -30px;
      }
    `}
  }
`

export const CardSection = styled.div`
padding: ${props=> props.pad};
display: grid;
align-items: ${props=> props.vAlign};
${props=> props.height && css`
  height: ${props=> props.height};
`};
${props=> props.left && css`
  grid-area: 1 / 1 / span 2 / span 2;
  /* background: red;  */
`}
${props=> props.right && css`
  grid-area: 1 / 3 / span 2 / span 1;
  /* background: blue;  */
`}
${props=> props.topLeft && css`
  grid-area: 1 / 1 / span 1 / span 2;
  /* background: green;  */
`}
${props=> props.bottomLeft && css`
  grid-area: 2 / 1 / span 1 / span 2;
  /* background: orange;  */
`}
${props=> props.topRight && css`
  grid-area: 1 / 3 / span 1 / span 1;
  /* background: wheat;  */
`}
${props=> props.bottomRight && css`
  grid-area: 2 / 3 / span 1 / span 1;
  /* background: teal;  */
`}
`;

CardSection.defaultProps = {
  pad: '5px',
  vAlign: 'center'
};

CardSection.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  bottomRight: PropTypes.bool,
  topLeft: PropTypes.bool,
  topRight: PropTypes.bool,
  pad: PropTypes.string,
  vAlign: PropTypes.string,
  height: PropTypes.string
};



export const DashCard = (props) => {
  return (
    <DashCardWrapper {...props}>
        {props.icon && <div className="flexi-card-icon">
          <div className="flexi-card-icon-i">{ typeof props.icon != 'boolean' && props.icon }</div>
          <div className="flexi-card-icon-i">{props.icon}</div>
          <div className="flexi-card-icon-i">{props.icon}</div>
          <div className="flexi-card-icon-i">{props.icon}</div>
          </div>
        }
        {props.children}
    </DashCardWrapper>
  );
};

DashCard.defaultProps = {
  elevate: "mid",
  color: '#fff',
};

DashCard.propTypes = {
  color: PropTypes.string,
  elevate: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  iconColor: PropTypes.string,
  bordered: PropTypes.bool
};
