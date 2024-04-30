import { Button } from "@chakra-ui/react";

function ChangeButton({ brutto, setter, value }) {
  function handelClick() {
    setter(Number(brutto) + (Number(brutto) * Number(value)) / 100);
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
