import ChangeButton from "./ChangeButton";

function Buttons({ nums }) {
  return (
    <>
      <ChangeButton value="-5"></ChangeButton>
      <ChangeButton value="-1"></ChangeButton>
      <ChangeButton value="+1"></ChangeButton>
      <ChangeButton value="+5"></ChangeButton>
    </>
  );
}

export default Buttons;
