import { useState } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([{ name: "", brutto: 0, netto: 0 }]);

  return (
    <>
      <main className="flex flex-row justify-center w-full">
        <FamilyMemberTabs members={members} setter={setMembers} />
        <HouseholdSummary members={members} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
