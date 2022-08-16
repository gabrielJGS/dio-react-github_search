import { useContext } from "react";
import { GithubContext, ContextType } from "../providers/github-provider";

const useGithub = () => {
  const context = useContext(GithubContext);
  const githubState = context?.githubState;
  const getUser = context?.getUser;
  const getUserRepos = context?.getUserRepos;
  const getUserStarred = context?.getUserStarred;

  return { githubState, getUser, getUserRepos, getUserStarred };
};

export default useGithub;
