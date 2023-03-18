import styled from "styled-components";

export const BaseLayoutStyles = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;

export const BaseLayoutMainStyle = styled.div`
    width: 100%;
`

export const BaseLayoutMain = styled.main`
  display: flex;
`;


export const BaseLayoutMainChildren = styled.div`
  flex-grow: 1;
  background-color: #EEF2F4;
  min-height: 500px;
  border-radius: 35px;
  padding: 35px;
  margin-right: 10px;

  @media screen and (max-width: 1160px) {
    margin-right: 30px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`