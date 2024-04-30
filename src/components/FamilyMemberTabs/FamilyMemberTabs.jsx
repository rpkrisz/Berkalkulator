import { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import SalaryCalculator from "../SalaryCalculator/SalaryCalculator";


function FamilyMemberTabs({ members, setMembers }) {
  function handelClick() {
    setMembers([...members, { name: "", brutto: 0, netto: 0 }]);
  }

  return (
    <Tabs>
      <TabList>
        {members.map((tab, index) => (
          <Tab key={index}>{tab.name}</Tab>
        ))}
        <Button onClick={handelClick}>+</Button>
      </TabList>
      <TabPanels>
        {members.map((tab, index) => (
          <TabPanel key={index}>
            {/* <SalaryCalculator member={member} setMember={setMember} allowances={allowances} setAllowances={setAllowances} peoples={peoples} setPeoples={setPeoples} /> */}
            <SalaryCalculator members={members} setMembers={setMembers} index={index} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default FamilyMemberTabs;
