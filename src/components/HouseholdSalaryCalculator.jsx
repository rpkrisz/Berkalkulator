import { useState } from "react";
import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";

const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([{ name: "", brutto: 0, netto: 0 }]);

  return (
    <>
      <header className="bg-sky-200 w-full h-fit p-2 flex justify-center">
        <img src="assets/horizontal-logo_outline.png" alt="Logo" className="" />
      </header>
      <main className="flex flex-row justify-center w-full h-[90dvh] p-6">
        <FamilyMemberTabs members={members} setMembers={setMembers} />
      </main>
      <footer className="bg-sky-300 flex justify-center h-auto">
        <p>© 2024 Réthey-Prikkel Kriszsztián - Elte IK Progremtervező informatika - Kliensoldali webprogramozás beadandó</p>
      </footer>
    </>
  );
};

export default HouseholdSalaryCalculator;
