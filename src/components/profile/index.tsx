import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as s from "./styled";

const Profile = () => {
  const { githubState } = useGithub();
  return (
    <s.Wrapper>
      <s.WrapperImage src={githubState ? githubState.user.avatar : ""} alt="avatar of user" />
      <s.WrapperInfoUser>
        <div>
          <h1>{githubState ? githubState.user.name : ""}</h1>
          <s.WrapperUserGeneric>
            <h3>Username: </h3>
            <a href={githubState ? githubState.user.html_url : ""} target="_blank" rel="noreferrer">
              {githubState ? githubState.user.login : ""}
            </a>
          </s.WrapperUserGeneric>
          <s.WrapperUserGeneric>
            <h3>Company: </h3>
            <span>{githubState ? githubState.user.company : ""}</span>
          </s.WrapperUserGeneric>
          <s.WrapperUserGeneric>
            <h3>Location: </h3>
            <span>{githubState ? githubState.user.location : ""}</span>
          </s.WrapperUserGeneric>
          <s.WrapperUserGeneric>
            <h3>Blog: </h3>
            <a href={githubState ? githubState.user.blog : ""} target="_blank" rel="noreferrer">
              {githubState ? githubState.user.blog : ""}
            </a>
          </s.WrapperUserGeneric>
        </div>
        <s.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>{githubState ? githubState.user.followers : ""}</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{githubState ? githubState.user.following : ""}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState ? githubState.user.public_gists : ""}</span>
          </div>
          <div>
            <h4>Repositories</h4>
            <span>{githubState ? githubState.user.public_repos : ""}</span>
          </div>
        </s.WrapperStatusCount>
      </s.WrapperInfoUser>
    </s.Wrapper>
  );
};

export default Profile;
