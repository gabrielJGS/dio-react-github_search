import { useEffect, useState } from "react";
import * as s from "./styled";
import RepositoryItem from "../repository-item";
import useGithub from "../../hooks/github-hooks";
import { MdStar } from "react-icons/md";
import { MdBookmarks } from "react-icons/md";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (!!githubState?.user.login) {
      getUserRepos?.(githubState.user.login);
      getUserStarred?.(githubState.user.login);
    }

    setHasUserForSearchRepos(!!(githubState && githubState.user.login));
  }, [githubState?.user.login]);

  return (
    <>
      {hasUserForSearchRepos ? (
        <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
          <s.WrapperTabList>
            <s.WrapperTab>
              <MdBookmarks />
              Repositories
            </s.WrapperTab>
            <s.WrapperTab>
              <MdStar />
              Starred
            </s.WrapperTab>
          </s.WrapperTabList>
          <s.WrapperTabPanel>
            <s.WrapperList>
              {githubState?.repositories.map((item) => {
                console.log(item);
                return (
                  <RepositoryItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    linkToRepo={item.html_url}
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
                    description={item.description}
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
