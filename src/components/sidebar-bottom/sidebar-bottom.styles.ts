import styled from "styled-components";

export const SidebarBottomStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 25px;
  
  @media screen and (min-width: 769px) {
    display: none;
  }
  
  @media screen and (max-width: 425px) {
    padding: 0 20px;
  }

  & a {
    text-align: center;
    margin: 15px 0;
    
    &.user-icon{
      position: relative;
      top: -15px;
      background-color: var(--primary-color);
      padding: 20px 22px;
      border-radius: 50%;
      margin: 0!important;
      
      & i {
        color: white;
      }
    }

    & > i {
      color: black;
      font-size: 22px;
    }
  }
`