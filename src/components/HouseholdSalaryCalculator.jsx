import { useState, useEffect } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

function calculateNetto(brutto, allowances, peoples) {
  brutto = Number(brutto);
  let newBrutto = brutto;
  let szja = brutto * 0.15;
  let tb = brutto * 0.185;
  let tax = szja + tb;
  let bonus = 0;

  if (allowances[0]) {
    brutto - 499952 > 0 ? (newBrutto = brutto - 499952) : (newBrutto = 0);
    szja = newBrutto * 0.15;
    tax = szja + tb;
  }
  if (allowances[1] && allowances[4]) {
    bonus = 5000;
  }
  if (allowances[2]) {
    tax - 77300 > 0 ? (tax = tax - 77300) : (tax = 0);
  }
  if (allowances[3]) {
    let allowance = 0;
    switch (peoples["beneficiary"]) {
      case 1:
        allowance = 10000 * peoples["dependant"];
        break;
      case 2:
        allowance = 20000 * peoples["dependant"];
        break;
      case 3:
        allowance = 33000 * peoples["dependant"];
        break;

      default:
        break;
    }

    tax - allowance > 0 ? (tax = tax - allowance) : (tax = 0);
  }

  let netto = brutto - tax + bonus;
  return netto;
}

const HouseholdSalaryCalculator = () => {
  const [member, setMember] = useState({ name: "", brutto: 0, netto: 0 });
  const { name, brutto, netto } = member;
  const [members, setMembers] = useState([{ name: "", brutto: 0, netto: 0 }]);
  const [allowances, setAllowances] = useState([false, false, false, false, false]);
  const [peoples, setPeoples] = useState({ dependant: 0, beneficiary: 0 });

  // update netto when change happens
  useEffect(() => {
    const newNetto = calculateNetto(Number(brutto), allowances, peoples);
    const newMember = { ...member, netto: newNetto };
    setMember(newMember);
  }, [brutto, allowances, peoples]);
  useEffect(() => {
    members[0] = member;
    setMembers([...members]);
  }, [member]);
  return (
    <>
      {console.log(members)}
      <header>
        <FamilyMemberTabs />
      </header>
      <main className="flex flex-row justify-center w-full">
        <SalaryCalculator member={member} setter={setMember} allowances={allowances} setAllowances={setAllowances} peoples={peoples} setPeoples={setPeoples} />
        <HouseholdSummary members={members} />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
