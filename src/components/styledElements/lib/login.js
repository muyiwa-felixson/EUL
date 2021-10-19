import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import { Box } from './layout';

const LoginLayoutWrapper = styled('div').attrs({ className: 'flexi-login-splitlayout'})`
    display: grid;
    min-height: 100vh;
    min-width: 100vw;
    grid-template-columns: 0 auto;
    position: relative;
    
    & .flexi-login-left{
        background: ${props=> props.color ? props.color : props.theme.PrimaryColor}; 
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        z-index: 0;
        & img{
            width: minmax(300px, 80%);
            max-height: 80%;
        }
    }
    & .flexi-login-right{
        position: relative;
        z-index: 2;
        background: ${props=> props.theme.PrimaryFade};
        box-shadow: -10px 0 35px ${transparentize(0.9, '#000')};
        display: block;
    }
    & div{
        & .flexi-login-brand{
            position: absolute;
            top: 40px;
            left: 40px;
            color: ${props=> props.color ? props.color : props.theme.PrimaryColor}; 
            fill: ${props=> props.color ? props.color : props.theme.PrimaryColor}; 
        }
        & .flexi-login-left-foot{
            position: relative;
            color: ${props=> props.color ? props.color : props.theme.PrimaryColor}; 
            padding: 20px 40px 40px 40px;
        }
        & .flexi-login-right-top{
            text-align: right;
            padding: 40px 20px;
        }
        & .flexi-login-right-foot{
            text-align: left;
            padding: 40px 20px;
        }
        & .flexi-login-right-cage{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            min-height: calc(100% - 100px);
            display: grid;
            grid-template-rows: max-content auto max-content;
            grid-gap: 20px;
            padding: 0 20px;
        }
        & .flexi-login-body{
            display: flex;
            align-items: center;
            justify-content: stretch;
        }
    }

    ${props=> props.split && css`
        @media (min-width: 800px){
        grid-template-columns: 1fr 2fr;
            & div .flexi-login-brand{
                color: #fff;
                fill: #fff;
            }
            & .flexi-login-right{
                display: flex;
                align-items: center;
                justify-content: center;
            } 
            & div .flexi-login-right-foot{
                text-align: right;
            }
            & div .flexi-login-left-foot{
                bottom: 0;
                left: 0;
                position: fixed;
                color: #fff;
            }
            & .flexi-login-right-cage{
                height: 100%;
            }
        }
        @media (min-width: 1200px){
        grid-template-columns: minmax(0, 600px) auto;
        }
        & div{
            & .flexi-login-brand{
                position: fixed;
            }
        }
    `}
`;
export const SplitLoginLayout = props =>{

    return <LoginLayoutWrapper {...props}>
        
        <div className="flexi-login-left">
            <img src={props.image} alt="Hero Image" />
        </div>
        <div className="flexi-login-right">
            <div className="flexi-login-brand">{props.brand}</div>
            <Box className="flexi-login-right-cage">
                <div className="flexi-login-right-top">{props.rightTop}</div>
                <Box pad="20px" className="flexi-login-body">
                    <Box width="100%">
                        {props.children}
                    </Box>
                </Box>
                <div className="flexi-login-right-foot">{props.rightFoot}</div>
            </Box>
            <div className="flexi-login-left-foot">{props.leftFoot}</div>
        </div>
    </LoginLayoutWrapper>
}

SplitLoginLayout.defaultProps = {
    split: true,
};
  
SplitLoginLayout.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    split: PropTypes.bool,
    image: PropTypes.string,
    brand: PropTypes.any,
    leftFoot: PropTypes.any,
    RightTop: PropTypes.any,
    RightFoot: PropTypes.any,
};