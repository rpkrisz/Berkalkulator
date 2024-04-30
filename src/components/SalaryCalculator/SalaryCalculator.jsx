import Buttons from "./components/Buttons";
import TextInput from "./components/TextInput";
import Allowances from "./components/Allowances";
import RngeSlider from "./components/RngeSlider";
import Formatted from "../Formatted";
import { useState } from "react";



/**
 *
 * @param {{member:Object, setter:Function}} param
 * @returns
 */
const SalaryCalculator = ({ member, setter, allowances, setAllowances, peoples, setPeoples }) => {
  const { name, brutto, netto } = member;

  return (
    <div className="bg-red-300">
      <TextInput title="Családtag neve" label="családtag nevét" member={member} value={name} setter={setter} name="name"></TextInput>
      <TextInput title="Bruttó bér" label="bruttó bérét" member={member} value={brutto} setter={setter} name="brutto"></TextInput>
      <RngeSlider member={member} setter={setter}></RngeSlider>
      <Buttons member={member} setter={setter}></Buttons>
      <Allowances allowances={allowances} setter={setAllowances} peoples={peoples} setPeoples={setPeoples}></Allowances>
      <p>Számított nettó bér:</p>
      <p>
        <Formatted number={netto} />
      </p>
    </div>
  );
};

export default SalaryCalculator;
