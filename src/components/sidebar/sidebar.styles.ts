import styled from "styled-components";

export const SidebarStyle = styled.div`
  position: relative;
  flex: 0 0 80px;
  max-width: 80px;
  min-width: 80px;
  width: 80px;
  transition: all 0.3s ease 0s;
  z-index: 989;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SidebarItems = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  max-width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-layout-bg-color);
  padding-top: 20px;
`

export const SidebarLogo = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  a {
    background-color: var(--primary-color);
    color: var(--primary-color);
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
`

export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & a {
    text-align: center;
    margin: 15px 0;

    & > i {
      color: black;
      font-size: 22px;
    }
  }
`