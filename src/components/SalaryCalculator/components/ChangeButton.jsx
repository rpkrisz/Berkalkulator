import { Button } from "@chakra-ui/react";

function ChangeButton({ member, setter, value }) {
  const { name, brutto, netto } = member;

  function handelClick() {
    setter({ ...member, brutto: Number(brutto) + Math.round((Number(brutto) * Number(value)) / 100) });
  }
  return (
    <>
      <Button onClick={handelClick} className="border rounded-lg bg-purple-400">
        {value}%
      </Button>
    </>
  );
}

export default ChangeButton;
