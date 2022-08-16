import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* width: 100%; */
  height: auto;
  margin-left: 8px;
  h1{
    font-size: 32px;
    font-weight: bold;
  }
  h3{
    font-size: 18px;
    font-weight: bold;
  }
  h4{
    font-size: 16px;
    font-weight: bold;
  }
`;

const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div{
    margin: 8px;
    text-align: center;
  }
`;

const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  h3{
    margin-right: 8px;
  }
  a{
    font-size: 14px;
    color: blue;
    font-weight: bold;
  }
`;

const WrapperImage = styled.img`
  border-radius: 50%;
  width: 100px;
  margin: 8px;
`;

export { Wrapper, WrapperInfoUser, WrapperStatusCount, WrapperUserGeneric, WrapperImage };
