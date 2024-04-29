import { useState } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  const [brutto, setBrutto] = useState(0);
  const [netto, setNetto] = useState(0);
  const [name, setName] = useState("");
  
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main className="flex flex-row justify-center w-full">
        <SalaryCalculator brutto={brutto} name={name} netto={netto} setterB={setBrutto} setterN={setName} setterNet={setNetto} />
        <HouseholdSummary netto={netto} name={name} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
