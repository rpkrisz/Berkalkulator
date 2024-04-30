import ChangeButton from "./ChangeButton";

function Buttons({ member, setter }) {
  return (
    <div className="flex gap-1 justify-between">
      <ChangeButton member={member} setter={setter} value="-5"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="-1"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="+1"></ChangeButton>
      <ChangeButton member={member} setter={setter} value="+5"></ChangeButton>
    </div>
  );
}

export default Buttons;
