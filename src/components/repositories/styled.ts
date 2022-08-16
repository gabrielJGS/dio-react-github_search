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
  height: 100%;

  &:hover {
    background-color: #333;
    font-weight: bold;
    color: whitesmoke;
  }
  &.is-selected {
    background-color: whitesmoke;
    font-weight: bold;
    color: black;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    border-bottom: 1px solid transparent;
  }
`;
const WrapperTabPanel = styled(TabPanel)`
  border-collapse: collapse;

  padding: 8px;
  margin-top: -5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  z-index: 99999;
  background-color: whitesmoke;
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
  background-color: whitesmoke;
  border-radius: 15px;
`;

export { WrapperTabs, WrapperTabList, WrapperTab, WrapperTabPanel, WrapperList };
