import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 30px;
  
  & button{
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: initial;
    max-width: initial;
    margin: 0 0 0 20px;
    & > div {
      display: none;
    }

    & button {
      margin-right: 12px;
      border-color: transparent !important;
      display: block;

      & i {
        position: relative;
        top: -2px;
        font-size: 17px;
      }
    }
  }

  & input {
    height: 50px;
    max-width: 100%;
    border-radius: 30px;
  }
`