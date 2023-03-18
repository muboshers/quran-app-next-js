import styled from "styled-components";

export const UserSidebarStyle = styled.div`
  position: relative;
  flex: 0 0 300px;
  max-width: 300px;
  min-width: 300px;
  width: 300px;
  transition: all 0.3s ease 0s;
  z-index: 989;
  
  @media screen and (max-width: 1160px) {
    display: none;
  }
`

export const UserSidebarItems = styled.div`
  position: fixed;
  top: 140px;
  right: 0;
  width: 300px;
  max-width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-layout-bg-color);
  padding-top: 10px;
`

export const UserInfo = styled.div`
  display: flex;
  
  & img{
    width: 120px;
    height: 70px;
  }
`