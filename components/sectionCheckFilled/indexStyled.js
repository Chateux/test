import styled from 'styled-components';
import { DefaultTheme } from '../styles/defaultTheme';


export const ContainerCheck = styled.div`
    text-align:left;
`;

export const ContainerCheckStars = styled.div`
    color: ${props => !props.isNumber ? DefaultTheme.colors.secondary : DefaultTheme.colors.primary};
    font-size:16px;
    font-weight:bold;
`;
