import styled from "styled-components";

export const SidebarBottomStyle = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 25px;
  
  @media screen and (min-width: 769px) {
    display: none;
  }

  & a {
    text-align: center;
    margin: 15px 0;

    & > i {
      color: black;
      font-size: 22px;
    }
  }
`