import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  &:hover{
    box-shadow: 2px 2px 5px #999;
  }
`;

const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

const WrapperFullName = styled.h2`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
  color: #2d3748;
`;

const WrapperLink = styled.a`
  font-size: 14px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;
`;

export { Wrapper, WrapperTitle, WrapperFullName, WrapperLink };
