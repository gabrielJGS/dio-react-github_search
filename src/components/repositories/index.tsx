import React from "react";
import * as s from "./styled";
import RepositoryItem from "../repository-item";

const Repositories = () => {
  return (
    <s.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
      <s.WrapperTabList>
        <s.WrapperTab>Repositories</s.WrapperTab>
        <s.WrapperTab>Starred</s.WrapperTab>
      </s.WrapperTabList>
      <s.WrapperTabPanel>
        <RepositoryItem name="gabrieljgs1" linkToRepo="github/gabrieljgs/repo1" fullName="gabriel/repo1" />
      </s.WrapperTabPanel>
      <s.WrapperTabPanel>
        <RepositoryItem name="gabrieljgs2" linkToRepo="github/gabrieljgs/repo1" fullName="gabriel/repo1" />
      </s.WrapperTabPanel>
    </s.WrapperTabs>
  );
};

export default Repositories;
