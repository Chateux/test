import styled from 'styled-components';
import { DefaultTheme } from '../styles/defaultTheme';


export const ContainerSectionStars = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 180px;
`;

export const ContainerSectionByStar = styled.button `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
    height: 50px;
    width: 50px;
    outline: 0;
    border: 1px solid ${DefaultTheme.colors.secondary};
    border-radius: 50%;
    cursor: pointer;
    margin: 5px;
    background: ${props => props.isClicked ? DefaultTheme.colors.secondary : DefaultTheme.colors.white};
    color: ${props => props.isClicked ? DefaultTheme.colors.white : DefaultTheme.colors.secondary};
`;
