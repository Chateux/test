import styled from 'styled-components';
import { DefaultTheme } from '../styles/defaultTheme';

export const MainContainer = styled.main`
  text-align:center;
`;

export const Container = styled.div`
  margin-top:30px;
  margin-bottom:30px;
`;

export const H1 = styled.h1`
  color: ${DefaultTheme.colors.black};
  margin-bottom:100px;
`;

export const ContainerSectionChecked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 900px;
  margin: 0 auto 30px;  

  div {
    display:flex;
    flex-direction:column;
  }
`;



