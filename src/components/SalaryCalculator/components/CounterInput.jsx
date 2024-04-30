import { Button, Input } from "@chakra-ui/react";

export default function CounterInput() {
    
  return (
    <div className="flex align-middle">
      <Button>-</Button>
      <Input type="number" defaultValue={3} />
      <Button>+</Button>
    </div>
  );
}
