import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 추가
import * as S from './index.style.ts';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/recruitment':
        return 'recruitment';
      case '/santaNews':
        return 'santaNews';
      case '/santaTest':
        return 'santaTest';
      case '/salary':
        return 'salary';
      default:
        return 'home';
    }
  };

  const activeTab = getActiveTab(); 

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <S.GlobalStyle />
      <S.HeaderText>WorkingonChristmas</S.HeaderText>
      <S.NavBar>
        <S.NavItem 
          isActive={activeTab === 'home'}
          onClick={() => handleTabClick('/')}
        >
          홈
        </S.NavItem>
        <S.NavItem 
          isActive={activeTab === 'recruitment'}
          onClick={() => handleTabClick('/recruitment')}
        >
          채용정보
        </S.NavItem>
        <S.NavItem 
          isActive={activeTab === 'santaNews'}
          onClick={() => handleTabClick('/santaNews')}
        >
          이달의 산타뉴스
        </S.NavItem>
        <S.NavItem 
          isActive={activeTab === 'santaTest'}
          onClick={() => handleTabClick('/santaTest')}
        >
          산타 적성검사
        </S.NavItem>
        <S.NavItem 
          isActive={activeTab === 'salary'}
          onClick={() => handleTabClick('/salary')}
        >
          연봉
        </S.NavItem>
      </S.NavBar>
    </>
  );
};

export default Header;