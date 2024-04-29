import ChangeButton from "./ChangeButton";

function Buttons({ brutto, setter }) {
  return (
    <>
      <ChangeButton brutto={brutto} setter={setter} value="-5"></ChangeButton>
      <ChangeButton brutto={brutto} setter={setter} value="-1"></ChangeButton>
      <ChangeButton brutto={brutto} setter={setter} value="+1"></ChangeButton>
      <ChangeButton brutto={brutto} setter={setter} value="+5"></ChangeButton>
    </>
  );
}

export default Buttons;
