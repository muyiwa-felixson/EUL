import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const ExtInputWrapper = styled('div').attrs({ className: 'flexi-form-input-extra'})`
    display: block;
    position: relative;
    border-radius: ${props=> props.theme.PrimaryRadius};
    ${props=> props.theme.Elevate.mid};
    margin: 10px 0;
    background: #fff;
    overflow: hidden;
    ${props=> props.size && css` height: ${props=> props.size};`}
    & .flexi-form-input-extra-label{
        position: absolute;
        height: 100%;
        display: flex;
        top:0;
        left: 0;
        padding: 20px;
        align-items: center;
        transition: ${props=> props.theme.PrimaryTransition};
        text-transform: uppercase;
    }
    & input{
        position: absolute;
        background: none;
        height: 100%;
        width: 100%;
        display: block;
        padding: 20px;
        border: none;
        z-index: 2;
        font-weight: bold;
        font-size: 1.2em;
        border-left: 0 solid ${props=> props.theme.PrimaryColor};
        color: ${props=> props.theme.PrimaryFontColor};
        &[type=password]{
            letter-spacing: 1px;
        }
        &::placeholder{
            display: none;
            color: rgba(0,0,0,0);
        }
        &:focus{
            outline: none;        
        }
        &:empty{
            /* background: silver; */
        }
    }
    &:hover, :focus-within{
        & .flexi-form-input-extra-label{
            height: 50%;
            font-size: 0.8em;
        }
    }
    &:after{
        display: block;
        content: '';
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        z-index: 1;
        background: ${props=> props.theme.PrimaryColor};
        width: 0;
        transition: all 0.4s ease-out;
    }
    ${props=> props.value && css`
    &:after{
        width: 8px;
    }
        & .flexi-form-input-extra-label{
            height: 50%;
            font-size: 0.8em;
        }
    `}
`;

export const ExtInput = props => {
return <ExtInputWrapper {...props}>
    <input {...props} />
        <span className="flexi-form-input-extra-label">{props.label}</span>
    </ExtInputWrapper>
}

ExtInput.defaultProps = {
    size: '70px'
};
  
ExtInput.propTypes = {
    size: PropTypes.string,
    label: PropTypes.string
};