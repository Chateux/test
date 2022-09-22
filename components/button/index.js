import styled from 'styled-components';
import { DefaultTheme } from '../styles/defaultTheme';

export const Button = styled.button`
    width:auto;
    height:auto;
    color:red;
    border-radius:20px;
    padding:10px;
    background:${DefaultTheme.colors.white};
    color: ${DefaultTheme.colors.primary};
    border:0;
    cursor:pointer;
    box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.6), 0 4px 6px 1px rgba(0, 0, 0, 0.3),
      0 1px 2px 1px rgba(0, 0, 0, 0) inset, 0 18px 32px -2px rgba(255, 255, 255, 0.1) inset;
    &:hover {
      background: ${DefaultTheme.colors.primary};
      color: ${DefaultTheme.colors.white};
    }
`;
