import styled from "styled-components";

export const NavbarStyle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 0 20px;
  
  @media screen and (max-width: 768px) {
    height: 70px;
  }
`

export const NavbarLogo = styled.div``

export const SearchAndSettings = styled.div`
  display: flex;
  align-items: center;
  max-width: 600px;
  width: 600px;
  
  @media screen and (max-width: 768px) {
    width: initial;
    max-width: initial;
  }

  & > a {
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  
  & button{
    width: 112px;
    margin-left: 10px;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`