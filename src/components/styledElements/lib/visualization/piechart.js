import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {transparentize} from 'polished';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Label, Legend } from 'recharts';
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

const dataRender = (data, colors) =>{
    let newdata;
    newdata = data.map((elem, id)=> {
        return {...elem, fill: elem.fill ? elem.fill : colors[id]}
    })
    return newdata;
}
export const FlexiPie = props => {
    let data;
    const {stroke , ...others} = props;
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
        <ResponsiveContainer width="100%" height={(props.radius * 2) + 20}>
            <PieChart {...others}  
            >
            { props.tooltip && (
            props.tooltip === 'light' ? 
             <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.9)', borderRadius: '3px', border: 'none', padding: '15px', boxShadow: '1px 2px 10px rgba(0,0,0,0.2)' }} itemStyle={{ color: "#333"}} cursor={{ opacity: 0.05, fill: 'rgba(0,0,0,0.9)'}} allowEscapeViewBox={{ x: false, y: true }} />
             :
             <Tooltip contentStyle={{ background: 'rgba(32,39,46,0.9)', borderRadius: '3px', border: 'none', padding: '15px', boxShadow: '1px 2px 10px rgba(0,0,0,0.2)' }} itemStyle={{ color: "#fff"}} cursor={{ opacity: 0.05, fill: 'rgba(0,0,0,0.9)'}} allowEscapeViewBox={{ x: false, y: true }} />
            ) }
             {
                 props.children
             }
             {Object.keys(data[0]).map((key, index)=> {
                 if(key != "name" && key != "fill"){
                i++;
                const outerRadius= props.radius - (props.thickness * (index - 1));
                const newData = dataRender(data, colors);
                 return <Pie data={newData} key={`data-${key}-${index}`} opacity={1 - 0.2 * (index - 1)} nameKey="name" dataKey={key} strokeWidth={stroke ? 1 : 0}  cx="50%" cy="50%" outerRadius={outerRadius} innerRadius={props.doughnut ? outerRadius - props.thickness : 0} fill={colors[index]} />
                 } else {
                     return null
                 }
             })}
             {props.legend && <Legend 
             align="right"
             verticalAlign="top"
             layout="vertical"
             /> }
            </PieChart>
        </ResponsiveContainer>
    </FlexiWrapper>
}

FlexiPie.defaultProps = {
    radius: 100,  
    colors: [Theme.PrimaryColor, Theme.PrimaryRed, Theme.PrimaryOrange, Theme.PrimaryYellow, Theme.PrimaryGreen,Theme.PrimaryBlue, Theme.PrimaryGrey, Theme.PrimaryGreyLight, Theme.SecondaryColor],
    stroke: true,
    thickness: 20
  };
  
FlexiPie.propTypes = {
    radius: PropTypes.number,
    colors: PropTypes.array,
    shade: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string]),
    xData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object]),
    yData: PropTypes.oneOfType([ PropTypes.array, PropTypes.object]),
    legend: PropTypes.bool,
    aspect: PropTypes.bool,
    thickness: PropTypes.number,
    stroke:PropTypes.bool,
  };
  