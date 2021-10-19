import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { transparentize} from 'polished';
import PropTypes from "prop-types";
import { Box, Spacer, Theme, Text, Grid } from 'src/components/styledElements/lib';

const ActivityWrapper = styled.div`
    background: #fff;
    padding: 10px 15px 10px 30px;
    position: relative;
    margin: 10px 0;
    border: 1px solid #fff;
    border-radius: ${props=> props.theme.PrimaryRadius};
    transition: all 0.3s ease-out;
    ${props=> props.theme.Elevate.mid};
    &:before{
        content: '';
        transition:all 0.3s ease-out;
        display: block;
        width: 3px;
        height: calc(100% - 20px);
        position: absolute;
        left: 10px; top: 10px;
        background: ${props=> props.color};
    }
    font-size: 10px;
    & .griding{
        display: grid;
        transition: all 0.3s ease-out;
        grid-template-columns: max-content auto;
    }
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;

    &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
    }
    ${props => props.lag && css `
       background: linear-gradient(45deg, rgba(255,255,255,1) 95%, ${props=> transparentize(0.3, props.theme.PrimaryRed)} 100%);
    `}
    ${props => props.dragged && css `
        opacity: 0.4;
        border: 1px dashed #ccc;
        color: #fff;
        ${props=> props.theme.Elevate.high};
        &:before{
        background: #ccc;
        }
        & .griding{
            opacity: 0;
        }
    `}
`;

export const Activity = props => {
    const [dragging, setDragging] = useState(false)
    return <ActivityWrapper {...props} dragged={dragging} onDrag={e => setDragging(true)} onDrop={e => setDragging(false)} onDragEnd={e => setDragging(false)} lag={props.lag > 0 && props.color !== Theme.PrimaryGreen}>
        <div className="griding">
            <div><strong>{props.stepName}</strong><Spacer space="10px" /><Text opacity={0.6}>Due Date:</Text> <Text color={props.color}>{props.dueDate}</Text></div>
            <Box align="right"><Text opacity={0.6}>Status</Text><Spacer space="10px" /><Text color={props.color}>{props.lag}</Text></Box>
        </div>
    </ActivityWrapper>
}


Activity.defaultProps = {
    color: Theme.PrimaryBlue
  };
  
  Activity.propTypes = {
      color: PropTypes.string,
  };
  
  export const WeekWrapper = styled.div`
  min-height: 50vh;
  position: relative;
  & .weekgrid{
      position: absolute;
      z-index: 1;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(${props=> props.cols}, 1fr);
  }
  & .details{
      position: relative;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      padding-top: 60px;
  }
  & .today{
    position: absolute;
      z-index: 3;
      top:0;
      left: ${props=> props.today}%;
      height: 100%;
      width: 1px;
      background: #444;
  }
  `;
  const Weeky = styled.div`
    border-right: 1px solid ${props=> props.theme.PrimaryBorderColor};
    opacity: 0.5;
    &:before{
        content: 'Week ${props=> props.count}';
        padding: 10px;
        display: block;
        border-bottom: 1px solid ${props=> props.theme.PrimaryBorderColor};
    }
  `;

const Weekee = num => {
    let list = [];
    for(let i=1; i <= num; i++){
        list.push(<Weeky count={i} />)
    }
    return list;
}
export const WeekRender = props => {
    return <WeekWrapper cols={props.weeks} today={props.today}>
        <div className="weekgrid">
        {  Weekee(props.weeks)  }
        </div>
        <div className="details">
            {props.children}
        </div>
        <div className="today" />
    </WeekWrapper>
}

const StageBarWrapper = styled.div` 
    min-height: 50px;
    position: relative;
    cursor: pointer;
    
    width: ${props=> props.width}%;
    margin-left: ${props=> props.start}%;
    margin-bottom: 15px;
    & span{
        border-radius: 3px;
        background: ${props=> props.theme.PrimaryGreyLight};
        color: #fff;
        display: block;
        padding: 15px;
        position: relative;
        overflow: hidden;
        & em{
            position: relative;
            z-index: 3;
        }
        &:after{
            content: '';
            display: block;
            position: absolute;
            top:0;
            left: 0;
            background: ${props=> props.theme.PrimaryBlue};
            height: 100%;
            z-index: 1;
            width: ${props=> props.complete}%;
        }
        &:before{
            content: '';
            display: block;
            position: absolute;
            top:0;
            left: ${props=> props.complete}%;
            background: ${props=> props.theme.PrimaryRed};
            height: 100%;
            z-index: 2;
            width: ${props=> props.incomplete}%;
        }
    }
    & .secondaryData{
        padding: 20px;
        background-color: white;
        overflow: hidden;
        display: ${props=> props.showMore ? 'block' : 'none'};
        border: 1px solid ${props=> props.theme.PrimaryBorderColor};
        font-size: 10px;
        color:  ${props=> props.theme.PrimaryGreyMid};
        line-height: 20px;
        & strong{
            color:  ${props=> props.theme.PrimaryGreyDark};
        }
    }
`;
export const StageBar = props => {
    const [view, setView] = useState(false);
    return <StageBarWrapper {...props} showMore={view} onClick={()=> setView(!view)}>
        <span><em>{props.children}</em></span>
        <div className="secondaryData">
        {
            props.steps.map((elem, index)=>{
                return <Grid key={`${index}-subelemnt-${elem.id}`} default="auto max-content" responsive={false}><Box>{ elem.status ? <i className="flexibull-ok" style={{ color: Theme.PrimaryGreen}} /> : <i className="flexibull-cancel"  style={{ color: Theme.PrimaryRed}}/>} <strong>{elem.stepName}</strong> </Box><Box align="right">{elem.dueDate}</Box></Grid>
            })
        }
        </div>
    </StageBarWrapper>
}
