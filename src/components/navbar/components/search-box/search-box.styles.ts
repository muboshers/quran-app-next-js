import styled from "styled-components";

export const SearchBoxStyle = styled.div`
  max-width: 600px;
  width: 600px;
  margin: 0 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0 0 0 20px;
  }

  & input {
    height: 50px;
    max-width: 100%;
    border-radius: 30px;
    @media screen and (max-width: 768px) {
      height: 30px;
    }
  }
`