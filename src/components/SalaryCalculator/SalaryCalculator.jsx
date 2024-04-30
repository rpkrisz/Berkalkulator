import Buttons from "./components/Buttons";
import TextInput from "./components/TextInput";
import Allowances from "./components/Allowances";
import RngeSlider from "./components/RngeSlider";
import Formatted from "../Formatted";
import { useState } from "react";



/**
 *
 * @param {{member:Object, setMember:Function}} param
 * @returns
 */
const SalaryCalculator = ({ member, setMember, allowances, setAllowances, peoples, setPeoples }) => {
  const { name, brutto, netto } = member;

  return (
    <div className="bg-red-300">
      <TextInput title="Családtag neve" label="családtag nevét" member={member} value={name} setter={setMember} name="name"></TextInput>
      <TextInput title="Bruttó bér" label="bruttó bérét" member={member} value={brutto} setter={setMember} name="brutto"></TextInput>
      <RngeSlider member={member} setter={setMember}></RngeSlider>
      <Buttons member={member} setter={setMember}></Buttons>
      <Allowances allowances={allowances} setter={setAllowances} peoples={peoples} setPeoples={setPeoples}></Allowances>
      <p>Számított nettó bér:</p>
      <p>
        <Formatted number={netto} />
      </p>
    </div>
  );
};

export default SalaryCalculator;
