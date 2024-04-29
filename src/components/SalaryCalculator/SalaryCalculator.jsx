import Buttons from "./components/Buttons";
import TextInput from "./components/TextInput";
import Allowances from "./components/Allowances";
import RngeSlider from "./components/RngeSlider";

function calculateNetto(brutto) {
  let netto = 0;
  netto = brutto - brutto * 0.15 - brutto * 0.185;
  return netto;
}

/**
 *
 * @param {{brutto:number, name:string,netto:number, setterB:Function, setterN:Function, setterNet:Function}} param0
 * @returns
 */
const SalaryCalculator = ({ brutto, name, netto, setterB, setterN, setterNet }) => {
  setterNet(calculateNetto(Number(brutto)));
  return (
    <div className="bg-red-300">
      <TextInput title="Családtag neve" label="családtag nevét" value={name} setter={setterN}></TextInput>
      <TextInput title="Bruttó bér" label="bruttó bérét" value={brutto} setter={setterB}></TextInput>
      <RngeSlider brutto={brutto} setter={setterB}></RngeSlider>
      <Buttons brutto={brutto} setter={setterB}></Buttons>
      <Allowances netto={netto} setter={setterNet}></Allowances>
      <p>Számított nettó bér:</p>
      <p>{netto ?? 0} Ft</p>
    </div>
  );
};

export default SalaryCalculator;
