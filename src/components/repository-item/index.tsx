import * as s from "./styled";

const RepositoryItem = ({
  name,
  description,
  linkToRepo,
  fullName,
}: {
  name: string;
  description: string;
  linkToRepo: string;
  fullName: string;
}) => {
  return (
    <s.Wrapper>
      <s.WrapperTitle>{name}</s.WrapperTitle>
      <s.WrapperFullName>{description}</s.WrapperFullName>
      <s.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </s.WrapperLink>
    </s.Wrapper>
  );
};

export default RepositoryItem;
