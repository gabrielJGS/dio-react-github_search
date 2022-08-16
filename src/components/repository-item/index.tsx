import React from "react";
import * as s from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }: { name: string; linkToRepo: string; fullName: string }) => {
  return (
    <s.Wrapper>
      <s.WrapperTitle>{name}</s.WrapperTitle>
      <s.WrapperFullName>full-name</s.WrapperFullName>
      <s.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </s.WrapperLink>
    </s.Wrapper>
  );
};

export default RepositoryItem;
