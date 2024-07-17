import { Switch, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

function AllowanceToggel({ allowances, setter, index, label, children }) {
  const [checked, setChecked] = useState(false);

  function handelChange(e, index) {
    const array = [...allowances];
    array[index] = e.target.checked;
    setter(array);
    setChecked(e.target.checked);
  }

  return (
    <div className="flex flex-col justify-start gap-1 ">
      <FormControl display="flex" alignItems="center">
        <Switch id="email-alerts" onChange={(e) => handelChange(e, index)} />
        <FormLabel htmlFor="email-alerts" mb="0" ml="3">
          {label}
        </FormLabel>
      </FormControl>

      {checked ? children : <></>}
    </div>
  );
}

export default AllowanceToggel;
