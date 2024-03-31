import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs />
      </header>
      <main className="flex flex-row justify-start">
        <SalaryCalculator />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
