import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '116watermelon';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.0/116watermelon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/npm/pretendard@latest/dist/web/static/pretendard-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: '116watermelon', sans-serif;
  }
`;

export const HeaderText = styled.div`
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
  color: #BC0000;
  font-family: '116watermelon', sans-serif;  
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const NavItem = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.isActive ? '#BC0000' : '#808080')};
  margin: 0 15px;
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;  

  &:hover {
    color: #BC0000;
  }
`;