import Buttons from "./components/Buttons";
import Input from "./components/TextInput";
import Allowances from "./components/Allowances";
import RngeSlider from "./components/RngeSlider";

const SalaryCalculator = () => {
  const brutto = 100;

  const netto = brutto;
  return (
    <div className="bg-red-300">
      <p>SalaryCalculator</p>
      <Input title="cs" label="neve"></Input>
      <Input title="bér" label="bére"></Input>
      <RngeSlider></RngeSlider>
      <Buttons></Buttons>

      <Allowances></Allowances>
      <p>Számított nettó bér:</p>
      <p>{netto} Ft</p>
    </div>
  );
};

export default SalaryCalculator;
