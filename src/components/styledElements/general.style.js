import React, {useState, useRef} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import {darken, transparentize} from 'polished';
import { Box, Spacer, Button, Theme } from './lib';
import Placeholder from '../../assets/user.svg';

export const PhotoBox = styled.div`
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    border-radius: 50%;
    background-color: ${props=> props.theme.PrimaryGrey};
    ${props=> props.image && css`
    background-image: url(${props=> props.image});
    `}
    background-size: cover;
    background-position: center;
    position: relative;
    display: inline-block;
    ${props=> props.inset && css`
    margin-right: -${props=> props.size/3}px;
    border: 1px solid #fff;
    `}

    ${props=> props.children && css`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.theme.PrimaryGreyLight};
    vertical-align: top;
    `}

    &:after{
        content: '';
        display: block;
        position: absolute;
        top: 70%;
        left: 70%;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        
        ${props=> props.active && css`
        border:1px solid white;
        background-color: ${props=> props.theme.PrimaryGreen};
        `}
        ${props=> props.inactive && css`
        border:1px solid white;
        background-color: ${props=> props.theme.PrimaryGreyMid};
        `}
    }
`;

export const ImageBox = styled.div`
      background-image: url(${props=> props.image});
      background-size: ${props=> props.size};
      background-position: ${props=> props.position};
      background-repeat: no-repeat;
      padding: ${props=> props.pad};
      ${props=> props.bordered && css`
        border-bottom: 1px solid ${props.theme.PrimaryBorderColor};
      `}
  `

PhotoBox.defaultProps = {
    size: 30,
  };
  
  PhotoBox.propTypes = {
    size: PropTypes.number,
    image: PropTypes.any,
    active: PropTypes.bool,
    inactive: PropTypes.bool,
    inset: PropTypes.bool,
  };

const PhotoUploaderWrapper = styled.div`
  display: inline-block;
  text-align: center;
  padding: 10px;
  position: relative;

  & .photobooth{
    width: 130px;
    height: 130px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    ${props=> props.photo && css`
    border: 1px dotted ${props=> props.theme.PrimaryBorderColor};
    padding: 10px;
    `}
    overflow: hidden;
    & img{
      width: 100%;
    }
  }
  & .x{
    position: absolute;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: #fff;
    background: rgba(0,0,0,0.3);
    top: 10%;
    left: 70%;
    cursor: pointer;
    &:hover{
      background: rgba(0,0,0,0.6);
    }
  }
      & input{
        display: none;
      }
`;
export const PhotoUploader = props => {
  const [file, setFile]= useState();
  const uploadInput = useRef(null);
  const handleClick= () => {
    uploadInput.current.click();
  }
  const handleChange = event=> {
    setFile(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  }
  return <PhotoUploaderWrapper photo={file}>
    {file && <i className="x flexibull-cancel" onClick={()=> setFile()} />}
      <div className="photobooth">{file ? <PhotoBox size={110} image={file} /> : <img src={Placeholder} />}</div>
      <Spacer space="10px"/>
      <Button pale pad="0 30px" color={Theme.PrimaryGrey} fontColor={Theme.PrimaryGrey} onClick={()=> handleClick()}>Upload Picture</Button>
      <input type="file" onChange={handleChange} ref={uploadInput} />
  </PhotoUploaderWrapper>
}

export const ReturnButton = styled.div`
writing-mode: vertical-rl;
margin: -27px 0 -25px  0;
box-shadow: -1px 0 3px ${props=> transparentize(0.8, props.theme.PrimaryDark)};

border-right: 1px solid ${props=> transparentize(0.3,props.theme.PrimaryBorderColor)};

/* justify-content: center; */
background: ${props=>  darken(0.02 * props.level, props.theme.PrimaryFade)};
& a{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 8px;
  color: ${props=> props.theme.PrimaryColor_dark_10};
  line-height: 12px;
}
cursor: pointer;
&:hover{
  background: ${props=> darken(0.1, props.theme.PrimaryFade)};
}
& span{
  /* display: inline-block; */
  font-size: 8px;
}

& i{
  display: inline-block;
  padding-bottom: 5px;
}
`;