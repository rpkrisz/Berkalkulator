import ChangeButton from "./ChangeButton";

function Buttons({ member, setter }) {
  return (
    <>
      <ChangeButton member={member} setter={setter} value="-5"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="-1"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="+1"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="+5"></ChangeButton>
    </>
  );
}

export default Buttons;
