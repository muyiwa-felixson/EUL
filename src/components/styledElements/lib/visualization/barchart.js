import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {transparentize, darken} from 'polished';
import { Bar, BarChart, ResponsiveContainer, YAxis, XAxis, CartesianGrid, Tooltip, Label, Legend } from 'recharts';
import { Theme } from '../theme';

const FlexiWrapper = styled.div`
    display: block;
`;
const shader = col => {
        let shader = [];
        for(let w = 0; w <5; w++){
            shader.push(transparentize(w*0.2, col));
        }
        return shader;
}

export const FlexiBar = props => {
    let data;
    if(props.data){
        data = props.data;
    } else {
        data = props.yData.map((elem, id) => {
            return {name: props.xData[id], ...elem}
        })
    }
    let i = -1;   

    const colors =  props.shade ? typeof props.shade === 'string' ? shader(props.shade) : shader(Theme.PrimaryColor) : props.colors;

    return <FlexiWrapper>
        <ResponsiveContainer width="100%" aspect={props.aspect  && 3} height={props.aspect ? false : props.height}>
            <BarChart data={data} {...props}>
            { props.tooltip && (
             props.tooltip === 'light' ? 
             <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.9)', borderRadius: '3px', border: 'none', padding: '15px', boxShadow: '1px 2px 10px rgba(0,0,0,0.2)' }} itemStyle={{ color: "#333"}} cursor={{ opacity: 0.05, fill: 'rgba(0,0,0,0.9)'}}  allowEscapeViewBox={{ x: false, y: true }}/>
             :
             <Tooltip contentStyle={{ background: 'rgba(32,39,46,0.9)', borderRadius: '3px', border: 'none', padding: '15px', boxShadow: '1px 2px 10px rgba(0,0,0,0.2)' }} itemStyle={{ color: "#fff"}} cursor={{ opacity: 0.05, fill: 'rgba(0,0,0,0.9)'}} allowEscapeViewBox={{ x: false, y: true }} />
            )}
             {props.grid && <CartesianGrid  strokeDasharray={ typeof props.grid === 'string' ? `${props.grid} ${props.grid}` : '3 3'} />}
             {
                 props.children
             }
             {Object.keys(data[0]).map((key, index)=> {
                 if(key != "name" && key != "fill"){
                i++;
                 return <Bar key={`data-${key}-${index}`} dataKey={key} fill={colors[i]} stackId={props.stack ? 'stack-0' : `data-${key}`}  />
                 } else {
                     return null
                 }
             })}
             {props.yAxis && <YAxis stroke={darken(0.2, Theme.PrimaryBorderColor)}>{ props.yLabel && <Label value={props.yLabel} position="insideLeft" angle='-90' /> }</YAxis>}
            {props.xAxis && <XAxis dataKey="name" stroke={darken(0.2, Theme.PrimaryBorderColor)}>{ props.xLabel && <Label value={props.xLabel} offset={0} position="insideBottom" /> }</XAxis>}
            {props.legend && <Legend align="left" verticalAlign="bottom" wrapperStyle={{ bottom: '0px'}} /> }
            </BarChart>
        </ResponsiveContainer>
    </FlexiWrapper>
}

FlexiBar.defaultProps = {
    height: 200,  
    colors: [Theme.PrimaryColor, Theme.PrimaryRed, Theme.PrimaryOrange, Theme.PrimaryYellow, Theme.PrimaryGreen,Theme.PrimaryBlue, Theme.PrimaryGrey, Theme.PrimaryGreyLight, Theme.SecondaryColor] 
  };
  
FlexiBar.propTypes = {
    height: PropTypes.number,
    colors: PropTypes.array,
    shade: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string]),
    grid: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string]),
    xData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object]),
    yData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object]),
    stack: PropTypes.bool,
    yAxis: PropTypes.bool,
    xAxis: PropTypes.bool,
    legend: PropTypes.bool,
    xLabel: PropTypes.string,
    yLabel: PropTypes.string,
    tooltip: PropTypes.oneOf(['light', false, true, null])
  };
  