import styled, { css } from "styled-components";

const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 8px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: ${(props: any) => (props.fullWidth ? "100%" : "")};
  background: white;
  border: 1px solid #999;
  &:hover {
    text-shadow: 2px 2px 5px #999;
    box-shadow: 2px 2px 5px #999;
  }
`;
export default Button;
