import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import SalaryCalculator from "../SalaryCalculator/SalaryCalculator";
import HouseholdSummary from "../HouseholdSummary/HouseholdSummary";

function FamilyMemberTabs({ members, setMembers }) {
  function handelClick() {
    setMembers([...members, { name: "", brutto: 0, netto: 0 }]);
  }

  return (
    <Tabs variant="line">
      <TabList>
        {members.map((tab, index) => (
          <Tab className="chakra-button css-ez23ye" key={index}>
            {tab.name}
          </Tab>
        ))}
        <Button onClick={handelClick}>+</Button>
      </TabList>
      <TabPanels>
        {members.map((tab, index) => (
          <TabPanel key={index} className="flex flex-row justify-center gap-4">
            <SalaryCalculator members={members} setMembers={setMembers} index={index} />
            <HouseholdSummary members={members} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default FamilyMemberTabs;
