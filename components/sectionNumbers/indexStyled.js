import styled from 'styled-components';
import { DefaultTheme } from '../styles/defaultTheme';

export const ContainerSectionNumber = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex: 0 1 600px;
    margin-right: 30px;
`;


export const ContainerSectionByNumber = styled.button `
    display: inline-block;
    padding: 0;
    font-size: 16px;
    font-weight:bold;
    height: 40px;
    width: 40px;
    user-select: none;
    outline: 0;
    border: 1px solid ${DefaultTheme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
    color: ${DefaultTheme.colors.primary};
    margin: 10px;
    background: ${props => props.isClicked ? DefaultTheme.colors.primary : DefaultTheme.colors.white};
    color: ${props => props.isClicked ? DefaultTheme.colors.white : DefaultTheme.colors.primary};
`;