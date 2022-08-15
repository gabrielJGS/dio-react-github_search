import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import styled from "styled-components";

const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 50%;
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
  border: 1px solid #ccc;
  box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);
  margin-top: -5px;
  z-index: 1;
  background-color: '#fff';
  display: none;
  &.is-selected {
    display: block;
  }
`;
// const WrapperTabPanel = styled(TabPanel)`
//   display: none;
//   min-height: 40vh;
//   padding: 8px;
//   margin-top: 5px;
//   &.is-selected {
//     display: block;
//   }
// `;

export { WrapperTabs, WrapperTabList, WrapperTab, WrapperTabPanel };
