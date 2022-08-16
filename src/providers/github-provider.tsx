import React, { createContext, useState, useCallback } from "react";
import api from "../services/api";

type githubStateType = {
  hasUser: boolean;
  loading: boolean;
  user: {
    id?: string;
    avatar?: string;
    login: string;
    name: string;
    html_url: string;
    blog: string;
    company: string;
    location: string;
    followers: number;
    following: number;
    public_gists: number;
    public_repos: number;
  };
  repositories: any[];
  starred: any[];
};

export type ContextType = {
  githubState: githubStateType;
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  getUserStarred: (username: string) => void;
};

interface ProviderProp {
  children?: React.ReactNode;
}

export const GithubContext = createContext<ContextType | null>(null);

const GithubProvider: React.FC<ProviderProp> = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: '',
      avatar: '',
      login: '',
      name: '',
      html_url: '',
      blog: '',
      company: '',
      location: '',
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username: string) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username: string) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username: string) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username: string) => getUser(username), []),
    getUserRepos: useCallback((username: string) => getUserRepos(username), []),
    getUserStarred: useCallback((username: string) => getUserStarred(username), []),
  };

  return <GithubContext.Provider value={contextValue}> {children}</GithubContext.Provider>;
};

export default GithubProvider;
