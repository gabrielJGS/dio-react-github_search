import React, { useEffect, useState } from "react";
import * as s from "./styled";
import RepositoryItem from "../repository-item";
import useGithub from "../../hooks/github-hooks";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState?.user.login) {
      getUserRepos?.(githubState.user.login);
      getUserStarred?.(githubState.user.login);
    }

    setHasUserForSearchRepos(!!(githubState && githubState.user.login));
  }, [githubState?.user.login, githubState, getUserRepos, getUserStarred]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
          <s.WrapperTabList>
            <s.WrapperTab>Repositories</s.WrapperTab>
            <s.WrapperTab>Starred</s.WrapperTab>
          </s.WrapperTabList>
          <s.WrapperTabPanel>
            <s.WrapperList>
              {githubState?.repositories.map((item) => {
                return (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                );
              })}
            </s.WrapperList>
          </s.WrapperTabPanel>
          <s.WrapperTabPanel>
            <s.WrapperList>
              {githubState?.starred.map((item) => {
                return (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    linkToRepo={item.full_name}
                    fullName={item.full_name}
                  />
                );
              })}
            </s.WrapperList>
          </s.WrapperTabPanel>
        </s.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
