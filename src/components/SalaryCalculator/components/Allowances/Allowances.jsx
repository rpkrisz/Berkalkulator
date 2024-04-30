import AllowanceToggel from "./AllowanceToggel.jsx";
import Entitled from "./Entitled.jsx";
import Dependants from "./Dependants.jsx";
import ModalDateInput from "./ModalDateInput.jsx";
import { Button, useDisclosure } from "@chakra-ui/react";

function Allowances({ allowances, setter, peoples, setPeoples }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="flex flex-col justify-start gap-1">
      <h1>KEDVEZMÉNYEK</h1>
      <AllowanceToggel allowances={allowances} setter={setter} index={0} label="25 év"></AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={1} label="Friss">
        <Button onClick={onOpen} href="#" className="ui right floated green button rounded-full bg-blue-700 p-1" id="newModal">
          <i className="plus icon"></i>
          Dátum
        </Button>
        <ModalDateInput
          open={isOpen}
          handelClose={() => {
            onClose();
          }}
          allowances={allowances}
          setter={setter}
        />
        <Entitled allowances={allowances} />
      </AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={2} label="Személyi"></AllowanceToggel>
      <AllowanceToggel allowances={allowances} setter={setter} index={3} label="Családi">
        <Dependants peoples={peoples} setPeoples={setPeoples} />
      </AllowanceToggel>
    </div>
  );
}

export default Allowances;
