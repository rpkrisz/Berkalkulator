import { Button, Input } from "@chakra-ui/react";

export default function CounterInput({ peoples, setPeoples, type }) {
  const limit = 3;
  function handelLeftClick() {
    if (peoples[type] === 0) return;
    const count = peoples[type] - 1;

    if (peoples["beneficiary"] === peoples["dependant"] && type === "dependant") {
      setPeoples({ dependant: count, beneficiary: count });
      return;
    }
    setPeoples({ ...peoples, [type]: count });
  }

  function handelRightClick() {
    if (peoples[type] >= limit && type === "beneficiary") return;
    if (peoples["beneficiary"] === peoples["dependant"] && type === "beneficiary") return;

    setPeoples({ ...peoples, [type]: peoples[type] + 1 });
  }
  return (
    <div className="flex align-middle gap-2">
      <Button onClick={handelLeftClick}>-</Button>
      <Input type="number" value={peoples[type]} disabled padding={2} width={30}/>
      <Button onClick={handelRightClick}>+</Button>
    </div>
  );
}
