import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import styled from "styled-components";

const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;
const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

// WrapperTabList.tabsRole = "Tabtolist";
const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  margin-right: 5px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 1px solid white;
  }
`;
const WrapperTabPanel = styled(TabPanel)`
  padding: 8px;
  margin-top: -5px;

  z-index: 99999;
  background-color: "#fff";
  display: none;
  &.is-selected {
    display: block;
  }
`;

const WrapperList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export { WrapperTabs, WrapperTabList, WrapperTab, WrapperTabPanel, WrapperList };
