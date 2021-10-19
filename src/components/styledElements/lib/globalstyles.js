import React from 'react';
import { createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
    body {
        background: ${props=> props.theme.PrimaryBackground};
        font-size: ${props=> props.theme.PrimaryFontSize};
        color: ${props=> props.theme.PrimaryFontColor};
        width: 100%;
        height: 100%;
        margin:0;
        padding: 0;
    }
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
`;