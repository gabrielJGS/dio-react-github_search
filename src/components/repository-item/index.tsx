import React from "react";

const RepositoryItem = ({ name, linkToRepo, fullName }: { name: string; linkToRepo: string; fullName: string }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h4>full-name</h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </a>
    </div>
  );
};

export default RepositoryItem;
