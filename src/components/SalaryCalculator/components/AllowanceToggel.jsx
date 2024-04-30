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
    <div className="flex flex-row justify-start gap-1">
      <label className="inline-flex items-center me-5 cursor-pointer" htmlFor={label}>
        <input onChange={(e) => handelChange(e, index)} type="checkbox" value="" className="sr-only peer" name={label} id={label} />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
      </label>

      {checked ? children : <></>}
    </div>
  );
}

export default AllowanceToggel;
